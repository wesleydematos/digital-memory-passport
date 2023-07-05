import styled from "styled-components";

export const CityContent = styled.div`
  background-color: var(--orange-l);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  }

  @media (min-width: 1024px) {
    > p {
      font-size: 4.5rem;
    }

    main {
      flex-direction: row;
      align-items: flex-start;
    }

    .content,
    .code {
      width: 50vw;
    }

    .content {
      gap: 15vh;

      h1,
      h1 > span {
        font-size: 6rem;
      }
    }

    .fact {
      width: 59%;
      align-self: center;
      font-size: 2rem;
      text-align: left;
    }

    .scan {
      background-color: #d9bb8d;
      width: 59%;
      font-size: 1.8rem;
      align-self: center;
    }
  }
`;
