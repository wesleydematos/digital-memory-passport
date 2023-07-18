import pin2 from "../../../../assets/pin2.png";
import { BgYourMemory } from "../../../Backgrounds/style";
import { StyledNdStep } from "./style";

function NdStep() {
  return (
    <>
      <BgYourMemory>
        <StyledNdStep>
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div className="ndStep">
            <img src={pin2} alt="" />
            <p>SECOND STEP:</p>
          </div>

          <p>
            Unite with fellow memory holders and partners to create a community
            where you can share tips and experiences.
          </p>
        </StyledNdStep>
        <div className="memoryTriangle" />
      </BgYourMemory>
    </>
  );
}

export default NdStep;
