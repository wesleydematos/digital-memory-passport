import pin from "../../../../assets/pin.png";
import { BgBlueOrange } from "../../../Backgrounds/style";
import { StyledRdStep } from "./style";

function RdStep() {
  return (
    <>
      <BgBlueOrange>
        <StyledRdStep>
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div className="rdStep">
            <img src={pin} alt="" />
            <p>THIRD STEP:</p>
          </div>

          <p>
            Empower memory holders and partners to create their own digital
            passports and unlock the profits from your personal adventures.
          </p>

          <div className="triangle" />
        </StyledRdStep>
      </BgBlueOrange>
    </>
  );
}

export default RdStep;
