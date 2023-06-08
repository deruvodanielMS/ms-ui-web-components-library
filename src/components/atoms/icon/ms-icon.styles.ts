import { css } from 'lit'

export const msIconStyles = css`
  @font-face {
    font-family: 'icomoon';
    src: url('./fonts/icomoon.eot?8r4an6');
    src: url('./fonts/icomoon.eot?8r4an6#iefix') format('embedded-opentype'),
      url('./fonts/icomoon.ttf?8r4an6') format('truetype'),
      url('./fonts/icomoon.woff?8r4an6') format('woff'),
      url('./fonts/icomoon.svg?8r4an6#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  .icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-bike .path1:before {
    content: '\\e900';
    color: rgb(192, 234, 255);
  }
  .icon-bike .path2:before {
    content: '\\e901';
    margin-left: -1em;
    color: rgb(31, 135, 221);
  }
  .icon-bike .path3:before {
    content: '\\e902';
    margin-left: -1em;
    color: rgb(31, 135, 221);
  }
  .icon-bike .path4:before {
    content: '\\e903';
    margin-left: -1em;
    color: rgb(31, 135, 221);
  }
  .icon-bike .path5:before {
    content: '\\e904';
    margin-left: -1em;
    color: rgb(31, 135, 221);
  }
`
