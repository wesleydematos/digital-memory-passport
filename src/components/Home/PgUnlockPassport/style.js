import styled from "styled-components";

export const StyledUnlockPassport = styled.div`
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

      > button {
        margin-top: 2vh;
      }
    }

    .session {
      h1 {
        margin-top: 5vh;
        font-size: 8rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .session {
      h1 {
        margin-top: 7vh;
        font-size: 8rem;
      }
    }
  }
`;
