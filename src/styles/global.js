import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  --orange-l: #ffd9a0;
  --blue-l: #d2eaf8;
  --purple-l: #c4c0bf;
  --white-l: #ffffff; 
}

* {     
  margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box;  
  border: none;
}

button{
  cursor: pointer;
}
`;
