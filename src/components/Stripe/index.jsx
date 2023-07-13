import { loadStripe } from '@stripe/stripe-js';
import db from "../../database/firebase.config";

export default function Stripe({nome,image,link,metadata,word}) {

    let stripePromise;
    const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51NROo0LdcTxsuZ9XlEPB7S1um4K6OKhwUKyFYvVH64i5TxOSGs72Csnxi6uKdtKnaOx99G2mCVKZTvohfBvqEpma00Vu9hRcFz");
    }
        return stripePromise;
    };

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
            price: "price_1NRPNuLdcTxsuZ9XOMrJJpqf",
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'http://localhost:5173/memorie/'+word,
        cancelUrl: 'http://localhost:5173/'+link,
        // customerEmail: 'customer@email.com',
      });
      console.warn(error.message);
      localStorage.clear();
    }
  
    return <button style={{backgroundColor:'#D2EAF8',borderRadius:'8%'}}onClick={handleCheckout}>Buy</button>;
  }