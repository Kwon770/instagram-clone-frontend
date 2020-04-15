# Instagram Clone | Frontend

## Setup

```bash
    $ yarn add styled-components graphql apollo-boost react-apollo-hooks react-router-dom react-helmet styled-reset react-toastify
```

----

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

----
`./src/Components/App.js`
```js
export default () => {
  return (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
    </ThemeProvider>
  );
};

```

`./src/styles/GlobalStyles.js`
```js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.blackColor};
        font-size: 14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        color: ${(props) => props.theme.blueColor};
        text-decoration: none;
    }
`;

`./src/styles/Theme.js`
```js
const BOX_BORDER = "1px solid #e6e6e6";
const BOX_RADIUS = "4px";

export default {
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  blueColor: "#3897f0",
  boxBorder: "1px solid #e6e6e6",
  borderRadius: "4px",
  whiteBox: `
  border-radius: ${BOX_RADIUS};
  border: ${BOX_BORDER};
  background-color:white;
  `,
};

```
---