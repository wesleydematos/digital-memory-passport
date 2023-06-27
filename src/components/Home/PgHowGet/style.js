import styled from "styled-components";

export const StyledHowGet = styled.div`
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
      color: var(--white-l);

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
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .session {
      height: 100vh;
      width: 50vw;

      h1 {
        font-size: 8rem;
        margin-bottom: 5vh;
      }

      p {
        width: 50%;
        font-size: 1.5rem;
      }
    }

    .codes {
      width: 50vw;
      justify-content: center;
      align-items: center;
      gap: 100px;
    }
  }
`;
