import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import styled from 'styled-components';
import ProductDetails from "./pages/ProductDetails/ProducDetails";
import { CategoryPage } from "./pages/Category/CategoryPage";
import Checkout from "./pages/Checkout/Checkout";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Router = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/cart" element={<Checkout />} />
      </Routes>
    </Container>
  )
}
