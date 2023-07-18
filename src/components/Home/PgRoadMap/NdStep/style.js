import styled from "styled-components";

export const StyledNdStep = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100%;
  padding-bottom: 25vh;

  .memoryTriangle {
    top: calc(500vh + 80%);
    left: 0;
  }

  h1 {
    text-align: center;
    color: var(--white-l);
    position: absolute;
    right: 17vw;
    top: 510vh;
    font-size: 5rem;
    line-height: 0.75;
    font-weight: 900;

    span {
      color: var(--blue-l);
      font-size: 6rem;
    }
  }

  .ndStep {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      z-index: 1;
      height: 200px;
      width: 200px;
    }

    p {
      color: var(--blue-l);
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

    .ndStep,
    > p {
      width: 50vw;
    }

    > p {
      text-align: justify;
      font-size: 2.5rem;
      font-weight: 500;
      padding: 0 2vw;
    }

    .ndStep {
      flex-direction: row;
      padding-bottom: 25vh;

      img {
        z-index: 1;
        height: 300px;
        width: 300px;
      }

      p {
        font-size: 4vw;
      }
    }
  }
`;
