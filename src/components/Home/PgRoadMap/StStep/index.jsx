import pin from "../../../../assets/pin.png";
import { StyledStStep } from "./style";
import { BgBlueOrange } from "../../../Backgrounds/style";

function StStep() {
  return (
    <>
      <BgBlueOrange>
        <StyledStStep>
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div className="stStep">
            <img src={pin} alt="pin" />
            <p>FIRST STEP:</p>
          </div>

          <p>
            Uncover your adventures: a Dashboard that captures your digital
            memories - locations and dates.
          </p>

          <div className="triangle" />
        </StyledStStep>
      </BgBlueOrange>
    </>
  );
}

export default StStep;
