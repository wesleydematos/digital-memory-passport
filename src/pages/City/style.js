import styled from "styled-components";

export const CityContent = styled.div`
  background-color: var(--orange-l);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  color: var(--white-l);

  > p {
    font-family: "Barrio", sans-serif;
    font-size: 2rem;
    margin-bottom: 2vh;
  }

  main {
    width: 100vw;
    height: calc(93vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90%;
    gap: 5vh;

    h1 {
      font-size: 2rem;
      text-align: center;
      line-height: 0.6;
      font-weight: 900;
    }

    h1 > span {
      color: var(--blue-l);
      font-size: 2.2rem;
    }

    button {
      align-content: center;
      background-color: transparent;
      height: fit-content;
      color: white;
      font-size: 1.3rem;
      font-weight: 900;
    }

    p {
      font-weight: 700;
    }
  }

  .code {
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: row;

    #sun,
    #cloud {
      height: 120px;
      width: 120px;
    }

    #sun {
      z-index: 10;
      align-self: flex-start;
    }

    div {
      position: absolute;
      align-self: center;
      margin-left: 45px;
      z-index: 100;
    }

    #cloud {
      transform: rotate(-25deg);
      z-index: 110;
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .code {
      height: 600px;
      width: 600px;

      #cloud,
      #sun {
        height: 250px;
        width: 250px;
      }

      .square {
        height: 350px;
        width: 350px;
        margin-left: 125px;
      }

      #cloud {
        margin-left: 85px;
      }

      #sun {
        margin: 20px 0 0 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    > p {
      font-size: 4.5rem;
    }

    main {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .content,
    .code {
      width: 50vw;
    }

    .code {
      height: 500px;
      width: 500px;

      #cloud,
      #sun {
        height: 200px;
        width: 200px;
      }

      .square {
        margin-left: 100px;
      }

      #sun {
        margin: 15px 0 0 15px;
      }

      #cloud {
        margin-left: 100px;
      }
    }

    .content {
      padding-left: 5vw;
      align-items: center;

      h1,
      h1 > span {
        font-size: 6rem;
      }
    }

    .fact {
      width: 59%;
      font-size: 1.5rem;
      text-align: left;
    }

    button {
      width: 80%;
      font-size: 1rem;
    }
  }

  @media (min-width: 1440px) {
    .code {
      height: 750px;
      width: 720px;

      .square {
        height: 430px;
        width: 430px;
        margin-left: 155px;
      }

      #cloud,
      #sun {
        height: 300px;
        width: 320px;
      }
    }
  }
`;
