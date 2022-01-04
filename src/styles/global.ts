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

  body, input, button {
    font-family: 'Heebo', 'Helvetiva', sans-serif;
  }
`;
