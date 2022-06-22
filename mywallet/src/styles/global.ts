import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:#fff;
        --green:#0c4a6e;
        --green-light:#0369a1;
        --shape: #e0f2fe;
        --text-body: #9ca3af;
        --text-title: #0c4a6e;
        --highlight:#fb923c;
        --in:#4ade80;
        --out:#be123c;

;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html{
        @media (max-width:1080px) {
            font-size:93.75%;            
        }
        @media (max-width:720px) {
            font-size:87.5%;            
        }
    }
     p, border-style, input, textarea, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
     }
     h1, h2, h3, h4, h5, h6, strong{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
     }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;

    }
    .react-modal-content{
        width:100%;
        max-width:576px;
        background: var(--background); 
        padding:3rem;
        position: relative;
        border-radius: 0.25rem;
   
    }
    .react-modal-close{
        position: absolute;
        right:1.5rem;
        top:1.5rem;
        border:0;
        background: transparent;
        transition: 0.3s;

        &:hover{
            filter: brightness(0.8);
        }

    }
    .react-overlay-modal{
        background-color: rgba( 0, 0, 0, 0.5);
        position:fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;

        display:flex;
        align-items: center;
        justify-content: center;
    }
`