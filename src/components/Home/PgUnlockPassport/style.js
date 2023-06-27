import styled from "styled-components";

export const StyledUnlockPassport = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2%;

    .socials {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: var(--orange-l);
        font-size: 1.3rem;
        font-weight: 900;
      }
    }

    > p {
      font-family: "Barrio", sans-serif;
      color: var(--white-l);
      font-size: 3.5rem;
    }

    > button {
      align-content: center;
      background-color: transparent;
      color: var(--orange-l);
      font-size: 1.3rem;
      font-weight: 900;
    }
  }

  .session {
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
      z-index: 10000;
      height: 200px;
      width: 130px;
      padding-bottom: 8vh;
    }
  }

  @media (min-width: 768px) {
    header {
      justify-content: space-between;
    }

    .session {
      h1 {
        margin-top: 7vh;
        font-size: 10rem;
      }
    }
  }
`;
