import styled from "styled-components";

export const MemoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;

  h1,
  .spin,
  .share {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 100;
  }

  h1,
  .spin {
    height: 30vh;

    @media (min-width: 1024px) {
      height: 42.5vh;
    }
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: center;
    color: var(--white-l);
    line-height: 0.9;
    font-size: 2rem;
    padding-top: 8vh;

    span {
      color: var(--orange-l);
    }

    @media (min-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 1024px) {
      font-size: 6rem;
    }

    @media (min-width: 1440px) {
      font-size: 8rem;
    }
  }

  .spin {
    p {
      color: var(--white-l);
      font-size: 1.5rem;
    }

    > img {
      position: absolute;
      top: calc(30vh);
      height: 20px;
      width: 20px;

      @media (min-width: 768px) {
        height: 550px;
        width: 550px;
      }
    }

    div {
      height: 160px;
      width: 160px;
      z-index: 10;

      > img {
        border-radius: 5%;
        height: 100%;
        width: 100%;
      }

      @media (min-width: 768px) {
        height: 250px;
        width: 250px;
      }

      @media (min-width: 1024px) {
        height: 300px;
        width: 300px;
      }
    }
  }

  .share {
    height: 20vh;
    color: var(--white-l);
    gap: 10px;

    p {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      height: 15vh;
    }
  }
`;
