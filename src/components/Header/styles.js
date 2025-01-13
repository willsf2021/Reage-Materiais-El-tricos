import styled from "styled-components";

export default styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  /* background-color: white; */
  img.logo {
    max-width: 200px;
    margin: 16px;
    z-index: 1;
    background-color: transparent;
    position: absolute;
  }
  .wave {
    width: 100vw;
    position: absolute;
    height: 100px;
    z-index: -1;
  }
  nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    /* border-bottom: 3px solid #f07e01; */
    /* background-color: white; */
    padding-right: 104px;
    ul {
      list-style: none;
      padding-left: 16px;
      display: flex;
      column-gap: 40px;
      align-items: center;
      font-weight: 500;
      height: 100%;
      display: flex;
      li {
        border-bottom: 3px solid transparent;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all ease 0.3s;
        z-index: 3000;
        cursor: pointer;
        font-size: 18px;
        &:hover {
          border-color: ${({ theme }) => theme.colors.darkGray};
        }
      }
    }
  }
  
`;
