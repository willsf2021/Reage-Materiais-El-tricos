import { createGlobalStyle } from "styled-components";
import { theme } from "./constants/theme";

export const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing:border-box;
}

body {
    height: 100vh;
    font-family: "Montserrat", sans-serif;
    color: ${theme.colors.darkGray};
    background-color: #e3e3e3;
}
a {
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }
}
`;
