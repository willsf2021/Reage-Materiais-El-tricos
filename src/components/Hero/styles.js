import styled from "styled-components";

export default styled.aside`
  img {
    width: 100%;
  }

  .slogan {
    margin-top: -8px;
    height: 700px;
    background: url(${(props) => props.rectangle}) no-repeat;
    background-size: 100vw 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 160px;
    .phrase {
      span {
        color: white;
        font-weight: bold;
      }
      font-size: 32px;
      color: white;
      font-weight: normal;
      font-family: "Montserrat", sans-serif;
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 300px;
      line-height: 3rem;
      margin-top: -120px;
    }
    .img {
      height: 100%;
      display: flex;
      align-items: center;
    }
    img {
      width: 600px;
    }
  }
`;
