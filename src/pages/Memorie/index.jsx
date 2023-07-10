import React, { useState, useEffect } from "react";
import { BgBlueOrange } from "../../components/Backgrounds/style";
import Socials from "../../components/Socials";
import { SquarePurple } from "../../components/Square/style";
import { MemoryContent } from "./style";
import spin from "../../assets/spin.gif";

function Memorie() {

  const [nome, setNome] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    setNome(localStorage.getItem("nome"))
    setImage(localStorage.getItem("image"))
  }, []);

  return (
    <>
      <BgBlueOrange>
        <MemoryContent>
          <h1>
            YOU HAVE
            <span>MADE YOUR MEMORIE</span>
          </h1>
          <div className="spin">
            <img src={spin} alt="Orange spin" />
            <SquarePurple>
              {/* <img src={image}/> */}
              <img src="https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za"/>
            </SquarePurple>
            {/* <p>{nome}</p> */}
            <p>Syros</p>
          </div>
          <div className="share">
            <p>Share with friends</p>
            <Socials />
          </div>
        </MemoryContent>
        <div className="triangle" />
      </BgBlueOrange>
    </>
  );
}

export default Memorie;
