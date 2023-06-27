import { BgRoadMap } from "../../Backgrounds/style";
import road from "../../../assets/road.png";
import { StyledRoadMap } from "./style";

function PgRoadMap() {
  return (
    <>
      <BgRoadMap>
        <StyledRoadMap>
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <img src={road} alt="Road Map" className="road" />
        </StyledRoadMap>
        <div className="roadMapTriangle" />
      </BgRoadMap>
    </>
  );
}

export default PgRoadMap;
