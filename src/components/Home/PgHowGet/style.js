import styled from "styled-components";

export const StyledHowGet = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  justify-content: space-around;
  min-height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    h1 {
      text-align: center;
      color: var(--white-l);
      font-size: 2rem;
      line-height: 0.75;
      font-weight: 900;
      margin: 5vh 0;

      span {
        color: var(--blue-l);
      }
    }

    p {
      color: var(--white-l);
      text-align: justify;
      font-size: 1.2rem;
    }
  }

  .codes {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    gap: 2px;
    padding: 0 5px;
    margin-top: 20px;
    min-height: 30vh;

    div {
      margin: 0 2.5vw;
      height: 200px;
      min-width: 200px;
    }
  }

  @media (min-width: 768px) {
    section {
      h1 {
        font-size: 5rem;
        /* margin-bottom: 5vh; */
      }

      p {
        font-size: 2rem;
      }
    }
    .codes {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 15px;
      overflow: hidden;

      div {
        min-width: 320px;
      }
    }
  }

  @media (min-width: 1800px) {
    flex-direction: row;

    section,
    .codes {
      height: 100vh;
      width: 50vw;
    }

    section {
      padding: 0;

      h1 {
        font-size: 8rem;
        margin-bottom: 5vh;
      }

      p {
        width: 85%;
      }
    }

    .codes {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 6vh 0;

      div {
        margin: 0;
      }

      .square1 {
        margin: 2vh 6vw;
      }

      .square2 {
        margin-top: 10vh;
      }

      .square3 {
        margin-left: 10vw;
      }

      .square4 {
        margin-top: 6vh;
        margin-left: 6vw;
      }
    }
  }
`;
