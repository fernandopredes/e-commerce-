import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar />
      <Router />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
