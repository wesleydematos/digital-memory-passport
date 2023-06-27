import styled from "styled-components";

export const StyledYourMemory = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;

  .session {
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .session,
    .codes {
      height: 100vh;
      width: 50vw;
    }

    .session {
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
      justify-content: center;
      align-items: center;
      gap: 100px;
    }
  }
`;