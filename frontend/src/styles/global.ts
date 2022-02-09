import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --brand-blue: #115D8C;
    --brand-orange: #F25D27;
    --textos-títulos: #123952;
    --textos: #617480;
    --textos-complemento: #A0ACB3;
    --shapes-01: #FFFFFF;
    --shapes-02: #DCE2E6;
    --others-excluir: #DE3838;
    --others-green: #51B853;
    --others-green-low: #DCF5DD;
    --others-orange-low: #FFA585;
    --others-yellow: #EFB866;
    --background: #F5F8FA;

    /* Override React Toastify CSS variables */

    --toastify-color-info: var(--brand-blue);
    --toastify-color-success: var(--others-green);
    --toastify-color-warning: var(--others-yellow);
    --toastify-color-error: var(--others-excluir);

    --toastify-font-family: 'Heebo', 'Helvetiva', sans-serif;

    --toastify-text-color-light: var(--textos);
    --toastify-text-color-dark: var(--shapes-01);

    /* Used only for colored theme */
    --toastify-text-color-info: var(--shapes-01);
    --toastify-text-color-success: var(--shapes-01);
    --toastify-text-color-warning: var(--shapes-01);
    --toastify-text-color-error: var(--shapes-01);

    --toastify-spinner-color: var(--textos);
    --toastify-spinner-color-empty-area: var(--textos-complemento);
  }

  html {
    /* each 1rem will be considered 10px */
    font-size: 62.5%;
  }


  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
    text-decoration: none;
	}

  body {
		background: var(--background);
		-webkit-font-smoothinh: antialiased;
	}

  body, input, button, textarea {
    font-family: 'Heebo', 'Helvetiva', sans-serif;
  }
`;
