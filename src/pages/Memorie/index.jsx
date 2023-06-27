import { BgBlueOrange } from "../../components/Backgrounds/style";
import Socials from "../../components/Socials";
import { SquarePurple } from "../../components/Square/style";
import { MemoryContent } from "./style";
import spin from "../../assets/spin.gif";

function Memorie() {
  return (
    <>
      <BgBlueOrange>
        <MemoryContent>
          <h1>
            YOU HAVE
            <span>MADE YOUR MEMORIE</span>
          </h1>
          <div className="spin">
            <img src={spin} alt="Orange spin" />
            <SquarePurple></SquarePurple>
            <p>Syros</p>
          </div>
          <div className="share">
            <p>Share with friends</p>
            <Socials />
          </div>
        </MemoryContent>
        <div className="triangle" />
      </BgBlueOrange>
    </>
  );
}

export default Memorie;
