import styled from "styled-components";

export default styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: #e3e3e3;
  .copy {
    margin-top: 160px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    p a {
      font-weight: 600;
    }
    p {
      text-align: center;
    }
  }
  .container {
    background-color: ${({ theme }) => theme.colors.darkGray};
    padding: 64px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 160px;
    .logo {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      align-items: center;
    }
    .logo img {
      width: 200px;
    }

    .socialMedia {
      display: flex;
      column-gap: 16px;
      transition: all 0.3 ease-in;
      svg {
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
