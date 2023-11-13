import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./contexts/UserContext";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const initialOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "BRL",
  intent: "capture",
};

function App() {

  return (
    <PayPalScriptProvider options={initialOptions}>
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
    </PayPalScriptProvider>
  )
}

export default App
