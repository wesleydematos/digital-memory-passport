import styled from "styled-components";

const color = "var(--white-l)";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.primaryColor || "var(--orange-l)"};

  .content {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    color: ${color};

    > p {
      margin: 5px 0;
    }
  }

  .developers {
    display: flex;
    gap: 10px;

    .divisor {
      margin-top: 0.5vh;
      width: 5px;
      border-left: ${`1px solid ${color}`};
    }
  }

  .wesley,
  .marcelo {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      align-self: center;
      gap: 10px;

      a {
        color: ${color};
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      font-size: 20px;
    }
  }
`;
