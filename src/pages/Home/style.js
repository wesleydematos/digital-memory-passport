import styled from "styled-components";

export const StyledHome = styled.main`
  //estilos gerais
  .square {
    height: 160px;
    width: 160px;
    z-index: 10;

    img {
      border-radius: 5%;
      height: 100%;
      width: 100%;
    }
  }

  .text {
    font-size: 1.2rem;
  }

  .bg {
    min-height: 100vh;
  }

  .bg-blue {
    background-color: var(--blue-l);
  }

  .bgsteps {
    padding: 30px 0;
  }

  .bg-orange {
    background-color: var(--orange-l);
  }

  //triangulos
  .triangle {
    display: none;
    position: absolute;
  }

  .unlock-triangle,
  .memory-triangle,
  .ststep-triangle,
  .ndstep-triangle,
  .rdstep-triangle {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }

  .unlock-triangle,
  .ststep-triangl,
  .rdstep-triangle,
  .memory-triangle,
  .ndstep-triangle {
    width: 75%;
    height: 20%;
  }

  .howget-triangle,
  .joinus-triangle {
    top: 0;
    right: 0;
    width: 25%;
    height: 5%;
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
  }

  .unlock-triangle {
    bottom: 0;
    left: 0;
  }

  .howget-triangle {
    margin-top: 100vh;
  }

  .memory-triangle {
    top: calc(200vh + 80%);
  }

  .joinus-triangle {
    margin-top: 300vh;
  }

  .ststep-triangle {
    top: calc(400vh + 80%);
  }

  .ndstep-triangle {
    top: calc(500vh + 80%);
  }

  .rdstep-triangle {
    top: calc(600vh + 80%);
  }

  //sections
  .section-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    gap: 20px;

    h1 {
      text-align: center;
      font-size: 2rem;
      line-height: 0.75;
      font-weight: 900;
    }

    p {
      color: var(--white-l);
      text-align: center;
    }
  }

  .section-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  //conteudos
  .content,
  .dropdown-unlock {
    display: flex;
    flex-direction: column;
  }

  .content-unlock {
    height: 100vh;
    overflow: hidden;

    header {
      height: 30vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 2%;

      .socials {
        min-width: 250px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          color: var(--orange-l);
          font-size: 1.3rem;
          font-weight: 900;
        }
      }

      .soulful > p {
        font-family: "Barrio", sans-serif;
        color: var(--white-l);
        font-size: 3.5rem;
      }

      .soulful > div {
        display: flex;
        justify-content: space-between;
        color: var(--white-l);
        margin-bottom: 30px;

        a {
          text-decoration: none;
          font-family: "Barrio", sans-serif;
          color: var(--white-l);
        }
      }

      > button {
        align-content: center;
        background-color: transparent;
        height: fit-content;
        color: var(--orange-l);
        font-size: 1.3rem;
        font-weight: 900;
      }

      @media (min-width: 768px) {
        justify-content: space-between;
        > button {
          margin-top: 2vh;
        }
      }
    }
  }

  .dropdown-unlock {
    height: 80vh;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-top: 15vh;
      text-align: center;
      font-family: "Barrio", sans-serif;
      color: var(--white-l);
      font-size: 2rem;
    }

    img {
      cursor: pointer;
      z-index: 1000;
      height: 200px;
      width: 130px;
      padding-bottom: 8vh;
    }
  }

  .content-howget {
    .section-text {
      h1 {
        color: var(--white-l);

        span {
          color: var(--blue-l);
        }
      }
    }
  }

  .content-yourmemory {
    .section-text {
      h1 {
        color: var(--blue-l);

        span {
          color: var(--white-l);
        }
      }
    }
  }

  .content-joinus {
    .section-text {
      h1 {
        color: var(--orange-l);

        span {
          color: var(--white-l);
        }
      }
    }
  }

  .content-howget,
  .content-yourmemory,
  .content-joinus {
    font-family: "Open Sans", sans-serif;
    justify-content: space-around;
    padding: 10px 20px;
    min-height: 100vh;
  }

  .content-ststep,
  .content-ndstep,
  .content-rdstep {
    align-items: center;
    justify-content: end;
    height: 100%;
    padding-top: 30px;

    h1 {
      text-align: center;
      color: var(--white-l);
      font-size: 5rem;
      line-height: 0.55;
      font-weight: 900;

      span {
        font-size: 5.5rem;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      > p {
        width: 90%;
        margin-top: 3vh;
        text-align: center;
        align-self: center;
        color: var(--white-l);
      }
    }
  }

  .content-ststep {
    h1 > span {
      color: var(--orange-l);
    }

    .stStep > p {
      color: var(--orange-l);
    }
  }

  .content-ndstep {
    h1 > span {
      color: var(--blue-l);
    }

    .ndStep > p {
      color: var(--blue-l);
    }
  }

  .content-rdstep {
    h1 > span {
      color: var(--orange-l);
    }

    .rdStep > p {
      color: var(--orange-l);
    }
  }

  .stStep,
  .ndStep,
  .rdStep {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      z-index: 1;
      height: 200px;
      width: 200px;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 900;
    }

    div > p {
      width: 90%;
      margin-top: 3vh;
      text-align: center;
      align-self: center;
      color: var(--white-l);
    }
  }

  //breakpoints
  @media (min-width: 768px) {
    .square {
      height: 250px;
      width: 250px;
    }

    .text {
      font-size: 2rem;
    }

    .content-ststep,
    .content-ndstep,
    .content-rdstep {
      h1 {
        font-size: 6rem;
      }

      p {
        font-size: 2rem;
      }
    }

    .stStep > img,
    .ndStep > img,
    .rdStep > img {
      height: 250px;
      width: 250px;
    }

    #drop {
      margin-top: 5vh;
      font-size: 5rem;
    }

    .section-text {
      h1 {
        font-size: 5rem;
        margin-bottom: 3vh;
      }

      p {
        padding: 0 20px;
      }
    }
  }

  @media (min-width: 1800px) {
    .square {
      height: 300px;
      width: 300px;
    }

    .text {
      font-size: 2.5rem;
    }

    .triangle {
      display: block;
    }

    .bg,
    .bgsteps {
      height: 100vh;
    }

    .bgsteps {
      padding: 0;
    }

    .content-ststep,
    .content-ndstep,
    .content-rdstep {
      justify-content: center;

      h1 {
        position: absolute;
        right: 17vw;
        font-size: 12rem;
        line-height: 0.4;

        span {
          font-size: 10rem;
        }
      }

      > div {
        flex-direction: row;

        p {
          width: 50vw;
          align-self: center;
          padding-right: 30px;
          font-weight: 500;
        }
      }
    }

    .stStep,
    .ndStep,
    .rdStep {
      width: 50vw;
      align-items: center;
      justify-content: center;

      img {
        z-index: 1;
        height: 400px;
        width: 450px;
      }

      p {
        margin: 0;
        font-size: 5rem;
      }
    }

    .content-ststep > h1 {
      top: 425vh;
    }

    .content-ndstep > h1 {
      top: 525vh;
    }

    .content-rdstep > h1 {
      top: 625vh;
    }

    .content-howget,
    .content-yourmemory,
    .content-joinus {
      flex-direction: row;
    }

    .section-text,
    .section-images {
      height: 100vh;
      width: 50vw;
    }

    .section-text {
      gap: 0;
      padding: 0;

      h1 {
        font-size: 8rem;
      }

      p {
        width: 75%;
      }
    }

    .mt {
      margin-top: 5vh;
    }

    .mb {
      margin-bottom: 5vh;
    }

    .section-images {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 6vh 0;

      div {
        margin: 0;
      }

      .square1,
      .square5,
      .square9 {
        margin: 1vh 6vw;
      }

      .square2,
      .square6,
      .square10 {
        margin-top: 7vh;
      }

      .square3,
      .square7,
      .square11 {
        margin-left: 10vw;
      }

      .square4,
      .square8,
      .square12 {
        margin-top: 4vh;
        margin-left: 4vw;
      }
    }
  }

  @media (min-width: 2400px) {
    .square {
      height: 400px;
      width: 400px;
    }
  }
`;
