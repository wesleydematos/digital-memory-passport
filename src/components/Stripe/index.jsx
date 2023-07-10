import { loadStripe } from '@stripe/stripe-js';

export default function Stripe({nome,image,link}) {

    let stripePromise;
    const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51NROo0LdcTxsuZ9XlEPB7S1um4K6OKhwUKyFYvVH64i5TxOSGs72Csnxi6uKdtKnaOx99G2mCVKZTvohfBvqEpma00Vu9hRcFz");
    }
        return stripePromise;
    };

    async function handleCheckout() {
      localStorage.setItem('nome', nome)
      localStorage.setItem('image', image)
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1NRPNuLdcTxsuZ9XOMrJJpqf",
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `http://localhost:5173/memorie`,
        cancelUrl: 'http://localhost:5173/'+link,
        // customerEmail: 'customer@email.com',
      });
      console.warn(error.message);
    }
  
    return <button onClick={handleCheckout}>Buy</button>;
  }