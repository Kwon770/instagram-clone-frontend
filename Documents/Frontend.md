## useEffect

[Documentation](https://ko.reactjs.org/docs/hooks-effect.html)

`useEffect`는 `componentDidMount`와 `componentDidUpdate`, `componentWillUnmount`가 합쳐진 것으로 생각해도 좋다. _다만, 이해하는 과정에서 다음과 같이 생각하는 것이지 완전히 같은 존재는 아니다._
`useEffect(fn, [])` 을 통해 `componentDidMount`와 똑같이 동작하게 만들 수 있다.

# useEffect(fn, [variable])

# fn: the function will be execute

# variable: the variable to control loop of useEffect

```js
// currentItem이 2000 마다 바뀐다.
import React, { useState, useEffect } from "react";

const [currentItem, setCurrentItem] = useState(0);
const comment = useInput("");
const slide = () => {
  const totalFiles = files.length;
  if (currentItem === totalFiles - 1) {
    setTimeout(() => setCurrentItem(0), 3000);
  } else {
    setTimeout(() => setCurrentItem(currentItem + 1), 3000);
  }
};

useEffect(() => {
  slide();
}, [currentItem]);
```

## Remake the style of component with styled-component

We can only remake the style of component what support the prob, 'className'

```js
import TextareaAutosize from "react-autosize-textarea";

// if the component have 'class name', prob, we can use with styled-component
const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
```