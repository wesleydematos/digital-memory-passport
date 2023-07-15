import React, { useState, useEffect } from "react";
import { BgBlueOrange } from "../../Backgrounds/style";
import Socials from "../../Socials";
import pageDown from "../../../assets/pagedown.gif";
import { StyledUnlockPassport } from "./style";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { BsPersonLinesFill } from "react-icons/bs";
import ProfileDropdown from "../../Dropdown";

const clientId =
  "511396642771-raoickmie1u15a6o61j9ig70oqt9f9ik.apps.googleusercontent.com";

function PgUnlockPassport() {
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
    <>
      <BgBlueOrange>
        <StyledUnlockPassport>
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
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
              />
            ) : (
              <ProfileDropdown user={user} email={email}></ProfileDropdown>
            )}
          </header>
          <div className="session">
            <h1>UNLOCK YOUR PASSPORT OF DIGITAL MEMORIES</h1>
            <img src={pageDown} alt="Page Down Gif" onClick={scrollDown} />
          </div>
        </StyledUnlockPassport>
        <div className="triangle" />
      </BgBlueOrange>
    </>
  );
}

export default PgUnlockPassport;
