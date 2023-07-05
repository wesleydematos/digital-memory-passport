import { BgJoinUs } from "../../Backgrounds/style";
import Socials from "../../Socials";
import { SquarePurple } from "../../Square/style";
import { StyledJoinUs } from "./style";

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
            <SquarePurple className="square1" />
            <SquarePurple className="square2" />
            <SquarePurple className="square3" />
            <SquarePurple className="square4" />
          </aside>
        </StyledJoinUs>
      </BgJoinUs>
    </>
  );
}

export default PgJoinUs;
