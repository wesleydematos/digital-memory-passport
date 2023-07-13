import { CityContent } from "../City/style";
import { useNavigate } from 'react-router-dom';

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

function Nfts() {

    const images = [
        'https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za',
        'https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'
    ];

    const navigateTo = useNavigate({replace:true});

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <div>
            <p style={{cursor:'pointer'}} onClick={() => navigateTo('/',{ replace: true })}>SOULFUL</p>
            <main>
                <div >
                    <div >
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                        <img style={{width:'200px',height:'200px'}}src='https://gateway.pinata.cloud/ipfs/QmSwQb4R9TdHzj1SJNUxSUa2iXE9cSRxaP277LftitR4za'></img>
                    </div>
                </div>
            </main>
        </div>
    );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 250px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export default Nfts;
