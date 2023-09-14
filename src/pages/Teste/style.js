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

    @media (min-width: 768px) {
      height: 250px;
      width: 250px;
    }

    @media (min-width: 1800px) {
      height: 300px;
      width: 300px;
    }

    @media (min-width: 2400px) {
      height: 400px;
      width: 400px;
    }
  }

  //UnlockPassport
  .bg-unlock {
    background-color: var(--blue-l);
    min-height: 100vh;

    .unlock-triangle {
      display: none;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 75%;
      height: 20%;
      background-color: var(--orange-l);
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%);

      @media (min-width: 1800px) {
        display: block;
      }
    }
  }

  .content-unlock {
    display: flex;
    flex-direction: column;
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
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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

    @media (min-width: 768px) {
      h1 {
        margin-top: 5vh;
        font-size: 5rem;
      }
    }
  }

  //HowGet
  .bg-howget {
    background-color: var(--orange-l);
    min-height: 100vh;

    .howget-triangle {
      display: none;
      margin-top: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      width: 25%;
      height: 5%;
      background-color: var(--blue-l);
      clip-path: polygon(100% 100%, 100% 0%, 0% 0%);

      @media (min-width: 1800px) {
        display: block;
      }
    }
  }

  .content-howget {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;
    justify-content: space-around;
    padding: 10px 20px;
    min-height: 100vh;

    .section-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 15px 0;
      gap: 20px;

      h1 {
        text-align: center;
        color: var(--white-l);
        font-size: 2rem;
        line-height: 0.75;
        font-weight: 900;

        span {
          color: var(--blue-l);
        }
      }

      p {
        color: var(--white-l);
        text-align: justify;
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

    @media (min-width: 768px) {
      .section-text {
        h1 {
          font-size: 5rem;
          margin-bottom: 3vh;
        }

        p {
          font-size: 1.6rem;
          padding: 0 20px;
        }
      }
    }

    @media (min-width: 1800px) {
      flex-direction: row;

      .section-text,
      .section-images {
        height: 100vh;
        width: 50vw;
      }

      .section-text {
        gap: 0;
        height: auto;
        padding: 0;

        h1 {
          font-size: 8rem;
          margin-bottom: 5vh;
        }

        p {
          width: 75%;
        }
      }

      .section-images {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 6vh 0;

        div {
          margin: 0;
        }

        .square1 {
          margin: 1vh 6vw;
        }

        .square2 {
          margin-top: 7vh;
        }

        .square3 {
          margin-left: 10vw;
        }

        .square4 {
          margin-top: 4vh;
          margin-left: 4vw;
        }
      }
    }
  }

  //YourMemory
  .bg-yourmemory {
    background-color: var(--orange-l);
    min-height: 100vh;

    .memory-triangle {
      display: none;
      position: absolute;
      top: calc(200vh + 87.2%);
      width: 75%;
      height: 20%;
      background-color: var(--blue-l);
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%);

      @media (min-width: 1800px) {
        display: block;
      }
    }
  }

  .content-yourmemory {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;
    justify-content: space-around;
    padding: 10px 20px;
    min-height: 100vh;

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
        color: var(--blue-l);
        line-height: 0.75;
        font-weight: 900;

        span {
          color: var(--white-l);
        }
      }

      p {
        color: var(--white-l);
        text-align: justify;
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

    @media (min-width: 768px) {
      .section-text {
        h1 {
          font-size: 5rem;
          margin-bottom: 3vh;
        }

        p {
          font-size: 1.6rem;
          padding: 0 20px;
        }
      }
    }

    @media (min-width: 1800px) {
      flex-direction: row;

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
          margin-top: 5vh;
        }

        p {
          width: 75%;
        }
      }

      .section-images {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 6vh 0;

        div {
          margin: 0;
        }

        .square5 {
          margin: 1vh 6vw;
        }

        .square6 {
          margin-top: 7vh;
        }

        .square7 {
          margin-left: 10vw;
        }

        .square8 {
          margin-top: 4vh;
          margin-left: 4vw;
        }
      }
    }
  }
`;
