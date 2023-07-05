import styled from "styled-components";

export const StyledJoinUs = styled.div`
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
      color: var(--orange-l);
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 50vh;

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

      p {
        margin-bottom: 5vh;
        width: 50%;
        font-size: 1.5rem;
      }

      h1 {
        font-size: 7rem;
        margin-bottom: 5vh;
      }
    }

    .codes {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 8vh 0;

      div {
        margin: 0;
      }

      .square1 {
        margin-top: 1vh;
        margin-inline: 8vw;
      }

      .square2,
      .square4 {
        margin-top: 8vh;
      }

      .square3 {
        margin-bottom: 20vh;
        margin-right: 8vw;
      }
    }
  }
`;
