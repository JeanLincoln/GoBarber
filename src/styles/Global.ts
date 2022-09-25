import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

		html{
        font-size: 62.5%;
    }

    :focus{
        outline:0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-900']};
    }

    body{
        background:${(props) => props.theme['gray-700']};
        color:${(props) => props.theme['gray-500']};
        -webkit-font-smoothing:antialiased;
    }

    border-style, input, textarea, button, span, h2, a {
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
