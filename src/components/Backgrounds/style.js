import styled from "styled-components";

const BgAllOrange = styled.div`
  background-color: var(--orange-l);
  height: 100vh;
`;

const BgOrangeBlue = styled.div`
  background-color: var(--orange-l);
  height: 100vh;
`;

const BgBlueOrange = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .triangle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 20%;
    background-color: var(--orange-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }
`;

export { BgAllOrange, BgBlueOrange, BgOrangeBlue };
