import { css } from 'lit';

export const msCheckboxStyles = css`

:host {
        display: flex;
        flex-direction: row;
    }
    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 15px;
        line-height: 24px;
    }

    label {
        color: #37363B;
        font-size: 17px;
        line-height: 24px;
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