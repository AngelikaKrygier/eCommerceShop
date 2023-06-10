import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html {
        box-sizing: border-box;
    };

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    };

    body {
        background-color: ${({ theme }) => theme.colors.background};
        margin: 0px;
        font-family: 'Work Sans', sans-serif;
        display: grid;
    }
`;
