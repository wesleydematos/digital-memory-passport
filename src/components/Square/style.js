import styled from "styled-components";

export const SquarePurple = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 5%;
  background-color: var(--purple-l);
  z-index: 10;

  @media (min-width: 768px) {
    height: 250px;
    width: 250px;
  }

  @media (min-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;
