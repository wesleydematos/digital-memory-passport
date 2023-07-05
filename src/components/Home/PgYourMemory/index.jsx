import { BgYourMemory } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";
import { StyledYourMemory } from "./style";

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
            <SquarePurple className="square1" />
            <SquarePurple className="square2" />
            <SquarePurple className="square3" />
            <SquarePurple className="square4" />
          </aside>
        </StyledYourMemory>
      </BgYourMemory>
    </>
  );
}

export default PgYourMemory;
