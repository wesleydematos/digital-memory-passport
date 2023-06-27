import { BgHowGet } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";

function PgHowGet() {
  return (
    <>
      <BgHowGet>
        <div className="howGetTriangle" />
        <div className="content">
          <session>
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
          </session>
          <aside className="codes">
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
            <SquarePurple />
          </aside>
        </div>
      </BgHowGet>
    </>
  );
}

export default PgHowGet;
