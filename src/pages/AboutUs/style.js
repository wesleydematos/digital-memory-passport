import styled from "styled-components";

export const StyledAboutUs = styled.div`
  color: var(--white-l);
  overflow: hidden;

  .pageOne,
  .pageTwo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    height: 100vh;
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
  }

  .triangle,
  .triangleTwo {
    display: none;
    position: absolute;
    background-color: var(--blue-l);

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
`;
