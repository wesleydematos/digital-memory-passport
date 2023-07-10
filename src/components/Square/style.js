import styled from "styled-components";

export const SquarePurple = styled.div`
  height: 160px;
  width: 160px;
  z-index: 10;

  img{
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

  @media (min-width: 2400px) {
    height: 400px;
    width: 400px;
  }
`;
