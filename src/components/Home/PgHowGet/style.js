import styled from "styled-components";

export const StyledHowGet = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;

  .session {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 50vh;
    padding: 0 20px;

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

  .codes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 50vh;
    gap: 2px;

    div {
      margin: 0 2.5vw;
    }
  }

  @media (min-width: 768px) {
    .session {
      h1 {
        font-size: 6rem;
        margin-bottom: 5vh;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1800px) {
    flex-direction: row;

    .session,
    .codes {
      height: 100vh;
      width: 50vw;
    }

    .session {
      gap: 0;
      height: auto;
      padding: 0;

      h1 {
        font-size: 8rem;
        margin-bottom: 5vh;
      }

      p {
        width: 50%;
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
