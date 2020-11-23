import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --gray-100: #FFFFFF;
    --gray-200: #F7FAFF;
    --gray-300: #DAE1ED;
    --gray-400: #9BA7BB;
    --gray-500: #2B2E33;
    --primary-color: #D9A566;
    --danger-color: #FF5757;
    --danger-complementary-color: #FFDDDD;
  }

  :root {
    --bg-color: var(--gray-200);
    --bg-card: var(--gray-100);
    --bg-card-alt: var(--gray-500);
    --text-card: var(--gray-500);
    --text-card-alt: var(--gray-100);
    --text-color: var(--gray-500);
    --bg-btn: var(--primary-color);
    --text-btn: var(--gray-100);
    --input-border: var(--gray-300);
    --input-hover-border: var(--gray-400);
    --input-focus-border: var(--primary-color);
    --bg-alert: var(--gray-100);
    --fill-color-icon-alert: var(--danger-color);
    --bg-icon-alert: var(--danger-complementary-color);
  }

  @font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 100;
  font-display: swap;
  src: url("/fonts/Inter-Thin.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Thin.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 100;
    font-display: swap;
    src: url("/fonts/Inter-ThinItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-ThinItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 200;
    font-display: swap;
    src: url("/fonts/Inter-ExtraLight.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-ExtraLight.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 200;
    font-display: swap;
    src: url("/fonts/Inter-ExtraLightItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-ExtraLightItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/Inter-Light.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Light.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/Inter-LightItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-LightItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Inter-Regular.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Regular.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Inter-Italic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Italic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url("/fonts/Inter-Medium.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Medium.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 500;
    font-display: swap;
    src: url("/fonts/Inter-MediumItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-MediumItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Inter-SemiBold.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-SemiBold.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Inter-SemiBoldItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-SemiBoldItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/Inter-Bold.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Bold.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/Inter-BoldItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-BoldItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 800;
    font-display: swap;
    src: url("/fonts/Inter-ExtraBold.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-ExtraBold.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 800;
    font-display: swap;
    src: url("/fonts/Inter-ExtraBoldItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-ExtraBoldItalic.woff?v=3.15") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 900;
    font-display: swap;
    src: url("/fonts/Inter-Black.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-Black.woff?v=3.15") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 900;
    font-display: swap;
    src: url("/fonts/Inter-BlackItalic.woff2?v=3.15") format("woff2"),
        url("/fonts/Inter-BlackItalic.woff?v=3.15") format("woff");
  }

  /* -------------------------------------------------------
  Variable font.
  Usage:

    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
      html { font-family: 'Inter var', sans-serif; }
    }
  */
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url("/fonts/Inter-roman.var.woff2?v=3.15") format("woff2");
  }
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: 'Italic';
    src: url("/fonts/Inter-italic.var.woff2?v=3.15") format("woff2");
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter var', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  h3,
  h4,
  h5 {
    font-weight: 600;
  }

  input,
  button {
    outline: 0;
    border: 0;
    font-size: 0.875rem;
    font-family: 'Inter var', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
