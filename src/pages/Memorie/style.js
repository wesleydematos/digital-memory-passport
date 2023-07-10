import styled from "styled-components";

export const MemoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h1,
  .spin,
  .share {
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1,
  .spin {
    height: calc(30vh);

    @media (min-width: 1024px) {
      height: calc(42.5vh);
    }
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    padding-top: calc(8vh);
    color: var(--white-l);
    line-height: 0.9;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

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

    img {
      position: absolute;
      top: calc(30vh);
      height: 20px;
      width: 20px;

      @media (min-width: 768px) {
        height: 550px;
        width: 550px;
      }
    }
  }

  .share {
    height: calc(20vh);
    color: var(--white-l);
    gap: 10px;

    p {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      height: calc(15vh);
    }
  }
`;
