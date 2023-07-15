import { BgYourMemory } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";
import { StyledYourMemory } from "./style";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";

function PgYourMemory() {
  return (
    <>
      <BgYourMemory>
        <div className="memoryTriangle" />
        <StyledYourMemory>
          <div className="session">
            <p>
              Embark on a captivating journey of nostalgia and exploration by
              acquiring your very own Digital Memory Passport. This innovative
              concept allows you to capture and cherish your most cherished
              moments in a unique and digital format.
            </p>
            <h1>
              MINT <br />
              <span>YOUR MEMORIE</span>
            </h1>
          </div>
          <aside className="codes">
            <SquarePurple className="square1">
              <img src={img5} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square2">
              <img src={img6} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square3">
              <img src={img7} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square4">
              <img src={img8} alt="imagem" />
            </SquarePurple>
          </aside>
        </StyledYourMemory>
      </BgYourMemory>
    </>
  );
}

export default PgYourMemory;
