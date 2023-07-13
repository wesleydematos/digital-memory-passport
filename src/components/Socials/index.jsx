import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SocialsContainer } from "./style";

function Socials() {
  return (
    <>
      <SocialsContainer>
        <button>
          <BsTwitter />
        </button>
        <button>
          <BsInstagram />
        </button>
      </SocialsContainer>
    </>
  );
}

export default Socials;