import styled from "styled-components";

export const StyledYourMemory = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;

  .session {
    gap: 20px;
    height: 50vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

  .codes {
    gap: 2px;
    justify-content: center;
    align-items: center;
    height: 50vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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
        font-size: 7rem;
      }

      p {
        margin-bottom: 5vh;
        width: 50%;
        font-size: 1.5rem;
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
