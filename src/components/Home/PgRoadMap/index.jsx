import { BgRoadMap } from "../../Backgrounds/style";
import road from "../../../assets/road.png";

function PgRoadMap() {
  return (
    <>
      <BgRoadMap>
        <div className="content">
          <h1>
            ROAD <span>MAP</span>
          </h1>
          <img src={road} alt="Road Map" className="road" />
        </div>
        <div className="roadMapTriangle" />
      </BgRoadMap>
    </>
  );
}

export default PgRoadMap;
