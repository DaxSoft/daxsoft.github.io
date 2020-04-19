/*
:--------------------------------------------------------------------------
: Style Guide CSS <Default Theme>
:--------------------------------------------------------------------------
:
: This is the default and general guide for the website's theme. 
*/

import * as THEME from './default'
export { THEME }

/*
:--------------------------------------------------------------------------
: Primary Color
:--------------------------------------------------------------------------
*/

export const PWA_PRIMARY = '#333333'

/*
:--------------------------------------------------------------------------
: Constats for a solid design
:--------------------------------------------------------------------------
*/

export { default as CONSTANTS } from './constant'

/*
:--------------------------------------------------------------------------
: General Document Style for overall application
:--------------------------------------------------------------------------
*/

export const DOCUMENT_STYLE = `
    html, body {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }


    ::-webkit-scrollbar-thumb {
        background: ${THEME.NEUTRAL_COLOR.neutralSecondary};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${THEME.NEUTRAL_COLOR.neutralTransition};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: ${THEME.THEME_COLOR.secondary.main} !important;
    }
`
