import { BgBlueOrange } from "../../components/Backgrounds/style";
import Socials from "../../components/Socials";
import { SquarePurple } from "../../components/Square/style";
import { MemoryContent } from "./style";

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
