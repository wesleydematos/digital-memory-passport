import { BgBlueOrange } from "../../Backgrounds/style";
import Socials from "../../Socials";
import pageDown from "../../../assets/pagedown.gif";

function PgUnlockPassport() {
  return (
    <>
      <BgBlueOrange>
        <div className="content">
          <header>
            <div className="socials">
              <Socials />
              <p>JOIN US</p>
            </div>
            <p>SOULFUL</p>
            <button>CONNECT WALLET</button>
          </header>
          <session>
            <h1>UNLOCK YOUR PASSPORT OF DIGITAL MEMORIES</h1>
            <img src={pageDown} alt="Page Down Gif" />
          </session>
        </div>
        <div className="triangle" />
      </BgBlueOrange>
    </>
  );
}

export default PgUnlockPassport;
