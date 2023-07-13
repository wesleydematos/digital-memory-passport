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
  }

  .code {
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;

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
      z-index: 110;
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) {
    .code {
      height: 340px;
      width: 340px;
    }

    #cloud,
    #sun {
      height: 210px;
      width: 210px;
    }

    #cloud {
      margin-left: 220px;
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
      height: 390px;
      width: 390px;
    }

    #cloud,
    #sun {
      height: 260px;
      width: 260px;
    }

    #cloud {
      margin-left: 270px;
    }

    .content {
      padding-left: 5vw;
      align-items: center;
      gap: 15vh;

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

  @media (min-width: 2400px) {
    .code {
      height: 490px;
      width: 490px;
    }

    #cloud,
    #sun {
      height: 360px;
      width: 360px;
    }

    #cloud {
      margin-left: 370px;
    }
  }
`;
