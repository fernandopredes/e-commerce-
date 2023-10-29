import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./contexts/UserContext";
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
