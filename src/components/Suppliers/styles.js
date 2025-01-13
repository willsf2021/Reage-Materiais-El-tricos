import styled from "styled-components";

export default styled.div`
margin-top: 64px;
display: flex;
flex-direction: column;
row-gap: 64px;
  h2 {
    font-size: 40px;
    text-align: center;
  }
  .container {
    max-width: 75vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }
  .item {
    background-color: white;
    border-radius: 6px;
    margin: 10px;
    padding: 10px;
    width: 200px;
    /* background-color: red; */
    img {
      width: 80px;
      object-fit: cover;
    }
  }
  .buttons {
    width: 100%;
    text-align: center;
    display: flex;
    column-gap: 24px;
    justify-content: center;
  }
  .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 32px;
    }
  }
`;
