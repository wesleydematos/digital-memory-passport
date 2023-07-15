import styled from "styled-components";

export const StyledTerms = styled.div`
  background-color: var(--blue-l);
  color: var(--white-l);

  .pageOne,
  .pageTwo,
  .pageThree {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
  }
`;
