import styled from "styled-components";

export const StyledRoadMap = styled.div`
  overflow: hidden;

  h1 {
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

  img {
    position: absolute;
    right: 10vw;
    top: 435vh;
    width: 80vw;
    height: 45vh;
    z-index: 4000000;
  }
  @media (min-width: 1024px) {
    h1 {
      right: 10vw;
    }

    img {
      height: 80vh;
      top: 410vh;
    }
  }
`;
