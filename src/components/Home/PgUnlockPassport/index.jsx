import { BgBlueOrange } from "../../Backgrounds/style";
import Socials from "../../Socials";
import pageDown from "../../../assets/pagedown.gif";
import { StyledUnlockPassport } from "./style";

function PgUnlockPassport() {
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
            <p>SOULFUL</p>
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
