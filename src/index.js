import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import GlobalStyles from "./config/globalStyles.js";
import { Main } from "./components";

const cssRule = `
  font-size: 40px;
  color: rgb(249, 162, 34);
  font-weight: bold;
  text-shadow: 1px 1px 5px rgb(249, 162, 34);
  filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);
`;

const secondRule = `
  font-size: 20px;
  color: black;
`;

setTimeout(
  console.log.bind(
    console,
    "%cWhat are you looking for? \n %cJust hire me: vega-maximiliano@outlook.com",
    cssRule,
    secondRule
  ),
  8
);

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Main />
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
