import styled from "styled-components";

const color = "var(--white-l)";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.primaryColor || "var(--orange-l)"};
  min-height: 14vh;

  .content {
    position: absolute;
    align-self: center;
    color: ${color};
    font-weight: 600;
    font-size: 20px;
    top: ${(props) => props.contentTopValue || "700vh"};

    > p {
      margin: 5px 0;
    }
  }

  .developers {
    display: flex;
    height: 8vh;
    gap: 10px;

    .divisor {
      margin-top: 0.5vh;
      width: 5px;
      height: 5vh;
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
    height: 12vh;
  }
`;
