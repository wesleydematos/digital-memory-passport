import { BgJoinUs } from "../../Backgrounds/style";
import Socials from "../../Socials";
import { SquarePurple } from "../../Square/style";

function PgJoinUs() {
  return (
    <>
      <BgJoinUs>
        <div className="joinUsTriangle" />
        <div className="content">
          <session>
            <p>
              Embrace the advantages of owning a Digital Memory Passport and
              unlock a world of exclusive experiences, discounts, and
              connections. Join the community and let your passport become a
              gateway to unforgettable adventures and meaningful interactions.
            </p>
            <h1>
              JOIN <span>US</span>
            </h1>
            <Socials />
          </session>
          <aside className="codes">
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
          </aside>
        </div>
      </BgJoinUs>
    </>
  );
}

export default PgJoinUs;
