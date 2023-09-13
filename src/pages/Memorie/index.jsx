import React, { useState, useEffect, useRef  } from "react";
import { BgBlueOrange } from "../../components/Backgrounds/style";
import SocialsMemorie from "../../components/SocialsMemorie";
import { MemoryContent } from "./style";
import spin from "../../assets/spin.gif";
import { collection, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../database/firebase.config";
import contract from '../../contracts/Certificate.json';
import { ethers } from "ethers";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Memorie({nome,image,metadata,word}) {
  const initialized = useRef(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigateTo = useNavigate();

  //Mumbai
  // const contractAddress = "0xCFe583AE4DcEA50f650d056B20B0f0D39929D584";
  // let rpcProvider = "https://rpc-mumbai.maticvigil.com/";

  //Polygon
  const contractAddress = "0xDBEeC081964A89f76270991E4b47DD65aeE97E32";
  const rpcProvider = "https://polygon-rpc.com/"

  useEffect(() => {

    if (!initialized.current) {
      initialized.current = true
      const loggedInUser = localStorage.getItem("user");
      const loggedWallet = localStorage.getItem("wallet");
      if (loggedInUser) {
        mintGmail()
      }else if(loggedWallet){
        mintNft()
      }
    }

  }, []);

  async function mintGmail(){

    setIsLoading(true);

    const docSnapPayments = await getDoc(doc(db, "link-payments", word))
    let gmail = JSON.parse(localStorage.getItem("user"))['email']
    
    if(docSnapPayments.data().minted){
      setIsLoading(false);
      return
    } 

    const docSnapWallet = await getDoc(doc(db, "wallets", gmail))
    let addressFound = ""
    if(docSnapWallet.exists()){
      addressFound = docSnapWallet.data().address
    }else{
      const wallet = ethers.Wallet.createRandom()
      await db.collection('wallets').doc(gmail).set({address: wallet.address,privateKey: btoa(wallet.privateKey),minted:[]});

      addressFound = wallet.address;
    }

    const docSnap = await getDoc(doc(db, "master-key", "key"))
    let masterKey = ""
    masterKey  = atob(docSnap.data().privateKey);

    let metadataMint = metadata;

    const provider = new ethers.providers.JsonRpcProvider(rpcProvider);

    const signer = new ethers.Wallet(masterKey, provider);

    const nftContractReadonly = new ethers.Contract(contractAddress, contract.abi, provider);
    const nftContract = nftContractReadonly.connect(signer);

    let nftTxn = await nftContract.safeMint(
        addressFound, 
        metadataMint,
        { value: ethers.utils.parseEther("0") }
    );

    await db.collection('link-payments').doc(word).set(
      {
        'nome':nome,
        'metadata':metadata,
        'image':image,
        'minted':true
      }
    );

    const docSnapGmail = await getDoc(doc(db, "wallets", gmail))

    let mintedNft = docSnapGmail.data().minted
    mintedNft.push({'image':image,'nome':nome})

    const docRef = doc(db, "wallets", gmail)
    const data = {
        minted: mintedNft
    };
    updateDoc(docRef, data)

    await nftTxn.wait();
    
    setIsLoading(false);
  }

  async function mintNft(){

    setIsLoading(true);

    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price',
      {
        params: {
          ids: 'matic-network',
          vs_currencies: 'eur',
        },
      }
    );

    const maticToEuroRate = response.data['matic-network'].eur;

    let valueMint = ((1/maticToEuroRate)*1).toString()

    const docSnapPayments = await getDoc(doc(db, "link-payments", word))
    
    if(docSnapPayments.data().minted){
      setIsLoading(false);
      return
    } 

    try {

        let metadataMint = metadata;

        const { ethereum } = window;

        let gratis = localStorage.getItem("gratisWallet")

        if(gratis==0){
          let provider = new ethers.providers.Web3Provider(ethereum);  
          let signer = provider.getSigner();
          const gasPrice = await provider.getGasPrice();

          const amountInMatic = ethers.utils.parseUnits(valueMint, 18);

          const tx = {
            to: "0x8b4b3acA034980794994E05FD7d8f776d5c19577",
            value: amountInMatic,
            gasPrice,
          };

          const gasLimit = await signer.estimateGas(tx);
          tx.gasLimit = gasLimit;

          const transactionResponse = await signer.sendTransaction(tx);

          await transactionResponse.wait()
        }

        const docSnap = await getDoc(doc(db, "master-key", "key"))

        let masterKey = ""
        masterKey  = atob(docSnap.data().privateKey);

        const providerWallet = new ethers.providers.JsonRpcProvider(rpcProvider);

        const signerWallet = new ethers.Wallet(masterKey, providerWallet);

        const nftContractReadonly = new ethers.Contract(contractAddress, contract.abi, providerWallet);
        const nftContract = nftContractReadonly.connect(signerWallet);

        let nftTxn = await nftContract.safeMint(
            localStorage.getItem("wallet"), 
            metadataMint,
            { value: ethers.utils.parseEther("0") }
        );

        await db.collection('link-payments').doc(word).set(
          {
            'nome':nome,
            'metadata':metadata,
            'image':image,
            'minted':true
          }
        );

        await nftTxn.wait();

        setIsLoading(false);
        
    } catch (err) {
      console.log(err.message)
      alert("An error occurred, please try again.")
      navigateTo('/')
    }
  }

  const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BgBlueOrange>
        {isLoading ? 
          <MemoryContent>
            <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'30px'}}>
              <h2 style={{'color': 'white'}}>
                WAIT... WE ARE CREATING YOUR MEMORY.
              </h2><br></br>
              <CircularProgress style={{'color': 'white'}}/>
            </div>
          </MemoryContent>
          
            :
          <MemoryContent>
            <h1>
              YOU HAVE
              <span>MADE YOUR MEMORIE</span>
            </h1>
            <div className="spin">
              <div>
                <img src={image}/>
              </div>
              <p>{nome}</p>
            </div>
            <div className="share">
              <p>Share with friends</p>
              <SocialsMemorie link={image} nome={nome}/>
            </div>
          </MemoryContent>
        }
        <div className="triangle" />
      </BgBlueOrange>
    </AlertProvider>
  );
}

export default Memorie;
