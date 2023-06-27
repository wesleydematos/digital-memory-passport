import { BgYourMemory } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";

function PgYourMemory() {
  return (
    <>
      <BgYourMemory>
        <div className="memoryTriangle" />
        <div className="content">
          <session>
            <p>
              Embark on a captivating journey of nostalgia and exploration by
              acquiring your very own Digital Memory Passport. This innovative
              concept allows you to capture and cherish your most cherished
              moments in a unique and digital format.
            </p>
            <h1>
              MINT <span>YOUR MEMORIE</span>
            </h1>
          </session>
          <aside className="codes">
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
          </aside>
        </div>
      </BgYourMemory>
    </>
  );
}

export default PgYourMemory;
