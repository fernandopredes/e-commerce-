import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./contexts/UserContext";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

function App() {

  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </Provider>
  )
}

export default App
