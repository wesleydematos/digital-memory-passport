import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Stripe from "../Stripe";
import { generate } from "random-words";
import { useNavigate } from 'react-router-dom';
import db from "../../database/firebase.config";
import { ethers } from 'ethers';

const clientId =
  '511396642771-raoickmie1u15a6o61j9ig70oqt9f9ik.apps.googleusercontent.com';

function Login({nome,image,link,metadata,gratis}) {

  let generateWord = generate()+generate()

  const [user, setUser] = useState("");
  const [connectWithWallet, setConnectWithWallet] = useState(false);

  const navigateTo = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedWallet = localStorage.getItem("wallet");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser['name']);
    }else if(loggedWallet){
      let accountStr = loggedWallet.substring(0,6)+"..."+loggedWallet.slice(-4);
      setUser(accountStr);
    }
  }, []);

  const connectWalletHandler = async () => {

    const { ethereum } = window;

    let provider = new ethers.providers.Web3Provider(ethereum);  
    const { chainId } = await provider.getNetwork()
    if(chainId!=137 && chainId!=80001){
      alert("Select polygon network!")
      return
    }

    setConnectWithWallet(true)
  
    try {
        const account = await ethereum.request({ method: 'eth_requestAccounts' });
        let accountStr = account[0].substring(0,6)+"..."+account[0].slice(-4);
        setUser(accountStr)
        localStorage.setItem('wallet', account[0])
    } catch (err) {
      console.log(err)
    }
}

const paymentWithWallet = async () => {

  await db.collection('link-payments').doc(generateWord).set(
    {
      'nome':nome,
      'metadata':metadata,
      'image':image,
      'minted':false
    }
  );
  navigateTo('/memorie/'+generateWord)
}

  const onSuccess = async res => {
    const token = res.credential;
    const decoded = jwt_decode(token);
    setUser(decoded['name'])
    localStorage.setItem('user', JSON.stringify(decoded))
  };

  const onFailure = () => {
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const handleLogout = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <div>
      {
        user == ""  ? 
        <>  
            <button>
              <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              theme="filled_black"
              text="continue_with"
              shape="circle"
              />
            </button>
            <br/><br/>
            <button onClick={connectWalletHandler}>CONNECT WALLET</button>
            <br/><br/>
            <button style={{backgroundColor:'#d9bb8d',width:'300px'}} onClick={() => navigateTo('/')}>CHECK OUT OUR SITE</button>
        </>
        :
        <div>
            <p style={{fontSize:'1.5rem'}}>{"You are logged in as "+user}</p>
            <button onClick={handleLogout}>Logout</button>
            <br/><br/><br/>
            {connectWithWallet ? <button style={{backgroundColor:'#d9bb8d', width:'50%'}} onClick={() => paymentWithWallet()}>GET IT</button> : <Stripe nome={nome} image={image} link={link} metadata={metadata} word={generateWord} gratis={gratis}></Stripe>}
        </div>
      }
      
    </div>
  );
}

export default Login;