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

function Memorie({nome,image,metadata,word}) {
  const initialized = useRef(false)
  const [userGmail, setUserGmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //Mumbai
  const contractAddress = "0xDBEeC081964A89f76270991E4b47DD65aeE97E32";

  useEffect(() => {

    if (!initialized.current) {
      initialized.current = true
      const loggedInUser = localStorage.getItem("user");
      const loggedWallet = localStorage.getItem("wallet");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setUserGmail(foundUser['email']);
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

    const wallets = await getDocs(collection(db, "wallets"));
    let findWallet = 0
    let addressFound = ""
    wallets.forEach((wallet) => {
        if(wallet.id == userGmail){
            addressFound = wallet.data().address
            findWallet+=1
        }
    });
    if(findWallet==0){

        const wallet = ethers.Wallet.createRandom()
        await db.collection('wallets').doc(gmail).set({address: wallet.address,privateKey: btoa(wallet.privateKey),minted:[]});

        addressFound = wallet.address;
    }

    const docSnap = await getDoc(doc(db, "master-key", "key"))
    let masterKey = ""
    masterKey  = atob(docSnap.data().privateKey);

    let rpcProvider = "https://rpc-mumbai.maticvigil.com/";
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

    await nftTxn.wait();

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

    setIsLoading(false);
  }

  async function mintNft(){

    setIsLoading(true);

    const docSnap = await getDoc(doc(db, "master-key", "key"))
    let masterKey = ""
    masterKey  = atob(docSnap.data().privateKey);

    const docSnapPayments = await getDoc(doc(db, "link-payments", word))
    
    if(docSnapPayments.data().minted){
      setIsLoading(false);
      return
    } 

    try {

        let rpcProvider = "https://rpc-mumbai.maticvigil.com/";
        let metadataMint = metadata;

        const provider = new ethers.providers.JsonRpcProvider(rpcProvider);

        const signer = new ethers.Wallet(masterKey, provider);

        const nftContractReadonly = new ethers.Contract(contractAddress, contract.abi, provider);
        const nftContract = nftContractReadonly.connect(signer);

        let nftTxn = await nftContract.safeMint(
            localStorage.getItem("wallet"), 
            metadataMint,
            { value: ethers.utils.parseEther("0") }
        );

        await nftTxn.wait();

        await db.collection('link-payments').doc(word).set(
          {
            'nome':nome,
            'metadata':metadata,
            'image':image,
            'minted':true
          }
        );

        setIsLoading(false);
        
    } catch (err) {
        console.log(err.message)
        setIsLoading(false);
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
          <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CircularProgress/>
          </div>
            :
          <MemoryContent>
            <h1>
              YOU HAVE
              <span>MADE YOUR MEMORIE</span>
            </h1>
            <div className="spin">
              {/* <img src={spin} alt="Orange spin" /> */}
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
