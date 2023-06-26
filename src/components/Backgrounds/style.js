import styled from "styled-components";

const BgHowGet = styled.div`
  background-color: var(--orange-l);
  height: 100vh;

  .howGetTriangle {
    margin-top: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 5%;
    background-color: var(--blue-l);
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
  }
`;

const BgYourMemory = styled.div`
  background-color: var(--orange-l);
  height: 100vh;

  .memoryTriangle {
    position: absolute;
    top: calc(200vh + 80%);
    width: 75%;
    height: 20%;
    background-color: var(--blue-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }
`;

const BgJoinUs = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .joinUsTriangle {
    margin-top: 300vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 5%;
    background-color: var(--orange-l);
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
  }
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

const BgRoadMap = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .roadMapTriangle {
    position: absolute;
    top: calc(400vh + 80%);
    left: 0;
    width: 75%;
    height: 20%;
    background-color: var(--orange-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  }
`;

export { BgHowGet, BgYourMemory, BgBlueOrange, BgJoinUs, BgRoadMap };
