import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import db from "../../database/firebase.config";

export default function Stripe({nome,image,link,metadata,word,gratis}) {

  // Teste
  // const priceProduct = "price_1NRPNuLdcTxsuZ9XOMrJJpqf"
  // const token = "pk_test_51NROo0LdcTxsuZ9XlEPB7S1um4K6OKhwUKyFYvVH64i5TxOSGs72Csnxi6uKdtKnaOx99G2mCVKZTvohfBvqEpma00Vu9hRcFz"

  // Producao
  const priceProduct = "price_1NcBh0LvW21zB0YR56xRp1z5"
  const token = "pk_live_51NTVLfLvW21zB0YRKnZ8k1JOXxjcAeNMoP5gctWFCGLPbicMhK5NNP5xu7wWPAUou1vATe5tQnbC7vG2rMRWGOm000t1z7S7J2"

  const navigateTo = useNavigate();
  let stripePromise;
  const getStripe = () => {
  if (!stripePromise) {
      stripePromise = loadStripe(token);
  }
      return stripePromise;
  };

  async function handleFree() {

    const docSnap = await getDoc(doc(db, "mints", link))

    let quantidadeGratis = docSnap.data().gratis

    const docRef = doc(db, "mints", link)
    const data = {
        gratis: quantidadeGratis-1
    };
    updateDoc(docRef, data)

    await db.collection('link-payments').doc(word).set(
      {
        'nome':nome,
        'metadata':metadata,
        'image':image,
        'minted':false
      }
    );
    navigateTo('/memorie/'+word)
  }

  async function handleCheckout() {
    await db.collection('link-payments').doc(word).set(
      {
        'nome':nome,
        'metadata':metadata,
        'image':image,
        'minted':false
      }
    );
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceProduct,
          quantity: 1,
        },
      ],
      mode: 'payment',
      // successUrl: 'http://localhost:5173/memorie/'+word,
      successUrl: 'http://soulfullab.xyz/'+word,
      // cancelUrl: 'http://localhost:5173/'+link,
      cancelUrl: 'http://soulfullab.xyz/'+link,
    });
    console.warn(error.message);
  }
  
  return <button style={{backgroundColor:'#d9bb8d', width:'50%'}} onClick={gratis <= 0 ? handleCheckout : handleFree}>GET IT</button>;
}