import { Global } from '@emotion/react';

const Fonts = () => {
  <Global
    styles={`
    @font-face {
        font-family: 'NeoDunggeunmoPro-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    `}
  />;
};

export default Fonts;