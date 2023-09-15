import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { StyledHome } from "./style";
import Socials from "../../components/Socials";
import ProfileDropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";

import pageDown from "../../assets/pagedown.gif";
import pin from "../../assets/pin.png";
import pin2 from "../../assets/pin2.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";

const clientId =
  "511396642771-raoickmie1u15a6o61j9ig70oqt9f9ik.apps.googleusercontent.com";

function Home() {
  const navigateTo = useNavigate({ replace: true });
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser["name"]);
      setEmail(foundUser["email"]);
    }
  }, []);

  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  const onSuccess = async (res) => {
    const token = res.credential;
    const decoded = jwt_decode(token);
    setUser(decoded["name"]);
    setEmail(decoded["email"]);
    localStorage.setItem("user", JSON.stringify(decoded));
  };

  const onFailure = () => {
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <StyledHome>
      <div className="bg-unlock">
        <div className="unlock-triangle triangle" />
        <div className="content-unlock">
          <header>
            <div className="socials">
              <Socials />
              <p>JOIN US</p>
            </div>
            <div className="soulful">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => navigateTo("/", { replace: true })}
              >
                SOULFUL
              </p>

              <div>
                <Link to="/about-us">ABOUT US</Link>
                <Link to="/terms">TERMS OF USE</Link>
              </div>
            </div>
            {user == "" ? (
              <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                theme="filled_black"
                text="continue_with"
                shape="circle"
              />
            ) : (
              <ProfileDropdown user={user} email={email}></ProfileDropdown>
            )}
          </header>
          <div className="dropdown-unlock">
            <h1>UNLOCK YOUR PASSPORT OF DIGITAL MEMORIES</h1>
            <img src={pageDown} alt="Page Down Gif" onClick={scrollDown} />
          </div>
        </div>
      </div>
      <div className="bg-howget">
        <div className="howget-triangle triangle" />
        <div className="content-howget">
          <section className="section-text">
            <h1>
              HOW TO GET <span>YOUR&#39;S?</span>
            </h1>
            <p className="text">
              To obtain your Digital Memory Passport, simply navigate through
              our partnered cities and keep an eye out for special QR codes
              scattered throughout. These QR codes serve as gateways to a world
              of memories waiting to be unlocked. Scan the QR codes using your
              smartphone, and instantly transport yourself to the time and place
              where those memories were created.
            </p>
          </section>
          <section className="section-images">
            <div className="square square1">
              <img src={img1} alt="imagem" />
            </div>
            <div className="square square2">
              <img src={img2} alt="imagem" />
            </div>
            <div className="square square3">
              <img src={img3} alt="imagem" />
            </div>
            <div className="square square4">
              <img src={img4} alt="imagem" />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-yourmemory">
        <div className="memory-triangle triangle" />
        <div className="content-yourmemory">
          <section className="section-text">
            <p className="text">
              Embark on a captivating journey of nostalgia and exploration by
              acquiring your very own Digital Memory Passport. This innovative
              concept allows you to capture and cherish your most cherished
              moments in a unique and digital format.
            </p>
            <h1>
              MINT <br />
              <span>YOUR MEMORIE</span>
            </h1>
          </section>
          <section className="section-images">
            <div className="square square5">
              <img src={img5} alt="imagem" />
            </div>
            <div className="square square6">
              <img src={img6} alt="imagem" />
            </div>
            <div className="square square7">
              <img src={img7} alt="imagem" />
            </div>
            <div className="square square8">
              <img src={img8} alt="imagem" />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-joinus">
        <div className="joinus-triangle triangle" />
        <div className="content-joinus">
          <section className="section-text">
            <p className="text">
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
          </section>
          <section className="section-images">
            <div className="square square9">
              <img src={img9} alt="imagem" />
            </div>
            <div className="square square10">
              <img src={img10} alt="imagem" />
            </div>
            <div className="square square11">
              <img src={img11} alt="imagem" />
            </div>
            <div className="square square12">
              <img src={img12} alt="imagem" />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-ststep">
        <div className="ststep-triangle triangle" />
        <div className="content-ststep">
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div>
            <div className="stStep">
              <img src={pin} alt="pin" />
              <p>FIRST STEP:</p>
            </div>

            <p className="text">
              Uncover your adventures: a Dashboard that captures your digital
              memories - locations and dates.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-ndstep">
        <div className="ndstep-triangle triangle" />
        <div className="content-ndstep">
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div>
            <div className="ndStep">
              <img src={pin2} alt="pin" />
              <p>SECOND STEP:</p>
            </div>

            <p className="text">
              Unite with fellow memory holders and partners to create a
              community where you can share tips and experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-rdstep">
        <div className="rdstep-triangle triangle" />
        <div className="content-rdstep">
          <h1>
            ROAD <br />
            <span>MAP</span>
          </h1>

          <div>
            <div className="rdStep">
              <img src={pin} alt="pin" />
              <p>THIRD STEP:</p>
            </div>

            <p className="text">
              Empower memory holders and partners to create their own digital
              passports and unlock the profits from your personal adventures.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </StyledHome>
  );
}

export default Home;
