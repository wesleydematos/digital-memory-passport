import styled from "styled-components";

const BgHowGet = styled.div`
  background-color: var(--orange-l);
  height: 100vh;

  .howGetTriangle {
    display: none;
    margin-top: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 5%;
    background-color: var(--blue-l);
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

const BgYourMemory = styled.div`
  background-color: var(--orange-l);
  height: 100vh;

  .memoryTriangle {
    display: none;
    position: absolute;
    top: calc(200vh + 80%);
    width: 75%;
    height: 20%;
    background-color: var(--blue-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

const BgJoinUs = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .joinUsTriangle {
    display: none;
    margin-top: 300vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 5%;
    background-color: var(--orange-l);
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

const BgBlueOrange = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .triangle {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 20%;
    background-color: var(--orange-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

const BgRoadMap = styled.div`
  background-color: var(--blue-l);
  height: 100vh;

  .roadMapTriangle {
    display: none;
    position: absolute;
    top: calc(400vh + 80%);
    left: 0;
    width: 75%;
    height: 20%;
    background-color: var(--orange-l);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%);

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

export { BgHowGet, BgYourMemory, BgBlueOrange, BgJoinUs, BgRoadMap };
