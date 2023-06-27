import styled from "styled-components";

export const StyledRoadMap = styled.div`
  h1 {
    color: var(--white-l);
    position: absolute;
    right: 10vw;
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
    top: 410vh;
    width: 80vw;
    height: 80vh;
    z-index: 4000000;
  }
`;
