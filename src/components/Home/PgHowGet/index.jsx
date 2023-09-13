import { BgHowGet } from "../../Backgrounds/style";
import { SquarePurple } from "../../Square/style";
import { StyledHowGet } from "./style";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";

function PgHowGet() {
  return (
    <>
      <BgHowGet>
        <div className="howGetTriangle" />
        <StyledHowGet>
          <section>
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
          </section>
          <aside className="codes">
            <SquarePurple className="square1">
              <img src={img1} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square2">
              <img src={img2} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square3">
              <img src={img3} alt="imagem" />
            </SquarePurple>
            <SquarePurple className="square4">
              <img src={img4} alt="imagem" />
            </SquarePurple>
          </aside>
        </StyledHowGet>
      </BgHowGet>
    </>
  );
}

export default PgHowGet;
