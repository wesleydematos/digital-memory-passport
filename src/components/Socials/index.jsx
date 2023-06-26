import { BsTwitter } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { RxDiscordLogo } from "react-icons/rx";
import { SocialsContainer } from "./style";

function Socials() {
  return (
    <>
      <SocialsContainer>
        <button>
          <BsTwitter />
        </button>
        <button>
          <SlSocialInstagram />
        </button>
        <button>
          <RxDiscordLogo />
        </button>
      </SocialsContainer>
    </>
  );
}

export default Socials;
