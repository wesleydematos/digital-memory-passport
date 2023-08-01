import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SocialsContainer } from "./style";

function Socials() {
  return (
    <>
      <SocialsContainer>
        <button onClick={() => window.open('https://twitter.com/soulfulab', '_blank')}>
          <BsTwitter />
        </button>
        <button onClick={() => window.open('https://www.instagram.com/soulfullab/', '_blank')}>
          <BsInstagram />
        </button>
      </SocialsContainer>
    </>
  );
}

export default Socials;