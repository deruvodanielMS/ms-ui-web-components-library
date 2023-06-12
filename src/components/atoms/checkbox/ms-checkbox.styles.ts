import { css } from 'lit';

//@TODO: modify styles with var on style-dictionary & theme

export const msCheckboxStyles = css`

:host {
        display: flex;
        flex-direction: row;
    }

    input[type=checkbox] {
        margin-right: 8px;
        accent-color: #6237D7;
        width: 16px;
        height: 16px;
        outline: none;
    }

    input:hover {
        accent-color: #5932C3;
    }
    
    input[type=checkbox]:disabled+div > * {
        color:#D9D8DC;
    }


`