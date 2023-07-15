import styled from "styled-components";

export const StyledTerms = styled.div`
  background-color: var(--blue-l);
  color: var(--white-l);

  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      list-style: none;
      padding: 0 5px;
    }
  }

  .pageOne,
  .pageTwo,
  .pageThree {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    min-height: 100vh;
    padding: 0 10px;
    gap: 10px;

    span {
      color: var(--orange-l);
    }

    a {
      color: var(--white-l);
    }

    p,
    li {
      font-weight: 600;
      z-index: 1000;
    }
  }

  .triangle,
  .triangleTwo {
    display: none;
    position: absolute;
    background-color: var(--orange-l);

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .triangle {
    width: 60vw;
    height: 15vh;
    top: 0;
    right: 0;
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
  }

  .triangleTwo {
    margin-top: 75vh;
    height: 25vh;
    width: 75vw;
    left: 0;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }

  .pageOne {
    h1 {
      z-index: 1000;
      align-self: center;
      text-align: center;
      line-height: 0.6;
      font-weight: 900;
      margin-bottom: 30px;

      span {
        font-size: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    p,
    li {
      font-size: 1.75rem;
    }

    .pageOne,
    .pageTwo,
    .pageThree {
      padding: 0 5vw;
    }

    .pageOne {
      h1 {
        font-size: 4rem;

        span {
          font-size: 7rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    p,
    li {
      font-size: 2rem;
    }

    .pageOne {
      h1 > span {
        font-size: 10rem;
      }
    }
  }

  @media (min-width: 1440px) {
    p,
    li {
      font-size: 2rem;
    }
  }
`;
