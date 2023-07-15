import { StyledFooter } from "./style";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
      <StyledFooter>
        <div className="triangleFooter" />
        <div className="content">
          <p>© 2023 - Some rights reserved</p>
          <div className="developers">
            <div className="marcelo">
              <p>Mercelo Filho</p>
              <div>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/marcelofilho6/"
                >
                  <BsLinkedin />
                </a>
                <a target="blank" href="https://github.com/M4RCELO">
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className="divisor" />
            <div className="wesley">
              <p>Wesley Matos</p>

              <div>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/wesley-matos/"
                >
                  <BsLinkedin />
                </a>
                <a target="blank" href="https://github.com/wesleydematos">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}
export default Footer;
