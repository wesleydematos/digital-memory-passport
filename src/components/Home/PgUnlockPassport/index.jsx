import { BgBlueOrange } from "../../Backgrounds/style";
import Socials from "../../Socials";
import pageDown from "../../../assets/pagedown.gif";
import { StyledUnlockPassport } from "./style";
import { useNavigate } from 'react-router-dom';

function PgUnlockPassport() {

  const navigateTo = useNavigate({replace:true});

  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <BgBlueOrange>
        <StyledUnlockPassport>
          <header>
            <div className="socials">
              <Socials />
              <p>JOIN US</p>
            </div>
            <p style={{cursor:'pointer'}} onClick={() => navigateTo('/',{ replace: true })}>SOULFUL</p>
            <button>CONNECT WALLET</button>
          </header>
          <div className="session">
            <h1>UNLOCK YOUR PASSPORT OF DIGITAL MEMORIES</h1>
            <img src={pageDown} alt="Page Down Gif" onClick={scrollDown} />
          </div>
        </StyledUnlockPassport>
        <div className="triangle" />
      </BgBlueOrange>
    </>
  );
}

export default PgUnlockPassport;
