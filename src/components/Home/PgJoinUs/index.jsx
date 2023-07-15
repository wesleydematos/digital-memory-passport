import { BgJoinUs } from "../../Backgrounds/style";
import Socials from "../../Socials";
import { SquarePurple } from "../../Square/style";
import { StyledJoinUs } from "./style";
import img9 from "../../../assets/img9.jpg";
import img10 from "../../../assets/img10.jpg";
import img11 from "../../../assets/img11.jpg";
import img12 from "../../../assets/img12.jpg";

function PgJoinUs() {
  return (
    <>
      <BgJoinUs>
        <div className="joinUsTriangle" />
        <StyledJoinUs>
          <div className="session">
            <p>
              Embrace the advantages of owning a Digital Memory Passport and
              unlock a world of exclusive experiences, discounts, and
              connections. Join the community and let your passport become a
              gateway to unforgettable adventures and meaningful interactions.
            </p>
            <h1>
              JOIN <br />
              <span>US</span>
            </h1>
            <Socials />
          </div>
          <aside className="codes">
            <SquarePurple className="square1">
              <img src={img9} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square2">
              <img src={img10} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square3">
              <img src={img11} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square4">
              <img src={img12} alt="imagem" />
            </SquarePurple>
          </aside>
        </StyledJoinUs>
      </BgJoinUs>
    </>
  );
}

export default PgJoinUs;
