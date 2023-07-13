import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Stripe from "../Stripe";
import { generate } from "random-words";
import { useNavigate } from 'react-router-dom';
import db from "../../database/firebase.config";

const clientId =
  '511396642771-raoickmie1u15a6o61j9ig70oqt9f9ik.apps.googleusercontent.com';

function Login({nome,image,link,metadata}) {

  let generateWord = generate()

  const [user, setUser] = useState("");

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
  
    if (!ethereum) {
        alert("Please install Metamask!");
    }
  
    try {
        const account = await ethereum.request({ method: 'eth_requestAccounts' });
        let accountStr = account[0].substring(0,6)+"..."+account[0].slice(-4);
        setUser(accountStr)
        localStorage.setItem('wallet', account[0])
    } catch (err) {
      console.log(err)
    }
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
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
            <br/>
            OR
            <br/><br/>
            <button onClick={connectWalletHandler}>CONNECT WALLET</button>
        </>
        :
        <div>
            <p style={{fontSize:'1.5rem'}}>{"You are logged in as "+user}</p>
            <button onClick={handleLogout}>Logout</button>
            <br/><br/><br/>
            <Stripe nome={nome} image={image} link={link} metadata={metadata} word={generateWord}></Stripe>
        </div>
      }
      
    </div>
  );
}

export default Login;