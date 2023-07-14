import styled from "styled-components";

export const StyledStStep = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100%;
  padding-bottom: 25vh;

  .triangle {
    top: calc(400vh + 80%);
  }

  h1 {
    text-align: center;
    color: var(--white-l);
    position: absolute;
    right: 17vw;
    top: 410vh;
    font-size: 5rem;
    line-height: 0.75;
    font-weight: 900;

    span {
      color: var(--orange-l);
      font-size: 6rem;
    }
  }

  .stStep {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 100px;
      width: 150px;
    }

    p {
      color: var(--orange-l);
      font-size: 1.5rem;
      font-weight: 900;
    }
  }

  > p {
    width: 90%;
    margin-top: 3vh;
    text-align: center;
    color: var(--white-l);
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: row;
    padding-bottom: 25vh;

    h1 {
      right: 10vw;
      font-size: 6.5rem;
      line-height: 0.6;

      span {
        font-size: 9rem;
      }
    }

    .stStep,
    > p {
      width: 50vw;
    }

    > p {
      text-align: justify;
      font-size: 2.5rem;
      font-weight: 500;
      padding: 0 2vw;
    }

    .stStep {
      flex-direction: row;
      margin-bottom: 25vh;

      img {
        height: 250px;
        width: 300px;
      }

      p {
        font-size: 4vw;
      }
    }
  }
`;
