import styled from "styled-components";

export const StyledAboutUs = styled.div`
  color: var(--white-l);
  min-height: 100vh;
  background-color: var(--orange-l);

  .pageOne,
  .pageTwo {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: justify;
    color: var(--white-l);
    background-color: var(--orange-l);
    padding: 0 10px;
    gap: 10px;

    span {
      color: var(--blue-l);
    }

    a {
      color: var(--white-l);
    }

    p {
      font-weight: 600;
      z-index: 1000;
    }
  }

  .soulful {
    margin-top: 2.2vh;
    font-family: "Barrio", sans-serif;
    align-self: center;
  }

  .triangle,
  .triangleTwo {
    display: none;
    position: absolute;
    background-color: var(--blue-l);
  }

  .triangle {
    width: 60vw;
    height: 15vh;
    top: 0;
    right: 0;
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
  }

  .triangleTwo {
    height: 25vh;
    width: 75vw;
    left: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }

  .pageOne {
    h1 {
      align-self: center;
      text-align: center;
      line-height: 0.6;
      font-weight: 900;
      margin: 10px 0 30px 0;

      span {
        font-size: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.7rem;
    }

    .pageOne,
    .pageTwo {
      padding: 0 5vw;
    }

    .pageOne {
      h1 {
        font-size: 3.8rem;

        span {
          font-size: 6.8rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .soulful {
      top: 0;
    }

    p {
      font-size: 1.7rem;
    }

    .pageOne {
      margin-bottom: 100px;
      h1 {
        font-size: 4.85rem;

        span {
          font-size: 14.85rem;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .soulful {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 2560px) {
    .triangle,
    .triangleTwo {
      display: block;
    }
  }
`;
