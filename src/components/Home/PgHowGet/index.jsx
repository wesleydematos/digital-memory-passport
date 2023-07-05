import { BgHowGet } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";
import { StyledHowGet } from "./style";

function PgHowGet() {
  return (
    <>
      <BgHowGet>
        <div className="howGetTriangle" />
        <StyledHowGet>
          <div className="session">
            <h1>
              HOW TO GET <span>YOUR&#39;S?</span>
            </h1>
            <p>
              To obtain your Digital Memory Passport, simply navigate through
              our partnered cities and keep an eye out for special QR codes
              scattered throughout. These QR codes serve as gateways to a world
              of memories waiting to be unlocked. Scan the QR codes using your
              smartphone, and instantly transport yourself to the time and place
              where those memories were created.
            </p>
          </div>
          <aside className="codes">
            <SquarePurple className="square1" />
            <SquarePurple className="square2" />
            <SquarePurple className="square3" />
            <SquarePurple className="square4" />
          </aside>
        </StyledHowGet>
      </BgHowGet>
    </>
  );
}

export default PgHowGet;
