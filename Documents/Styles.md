## Center aligning just below Page

```js
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;
```

## Apply 'GlobalStyles'

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
```

## Reusing CSS styles with Theme

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

## Switching components according to variable

```js
export default ({
  action,
  setAction
}) => (
  <Wrapper>
    {action === "logIn" && (<div />)}
    {action === "signUp" && (<div />)}
    {action === "confirm" && (<div />)}
  </Wrapper>
)
```

## Using hooks structuredly

`./src/Hooks/useInput.js`
```js
import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};
```

`./src/index.js`
```js
import useInput from "../../Hooks/useInput";

export default () => {
  const id = useInput("");
  const password = useInput("");
  
  return (
    <Input placeholder="Paste your id" required {...id} />
    <Input placeholder="Paste your password" required {...password} />
  )
}
```