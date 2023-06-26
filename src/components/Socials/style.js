import styled from "styled-components";

export const SocialsContainer = styled.div`
  display: flex;
  gap: 30px;

  button {
    color: var(--white-l);
    background-color: transparent;

    svg {
      font-size: 3rem;

      :last-child {
        font-size: 3.2rem;
      }
    }
  }
`;
