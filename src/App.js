import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import CartProvider from "./context/cartProvider";
import ProductProvider from "./context/productProvider";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import CheckOutPage from "./pages/CheckOutPage";
import SingleProductPage from "./pages/SingleProductPage";
import FavoritePage from "./pages/FavoritePage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-slate-800">
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route
                  path="/login"
                  element={<Navigate replace to="checkout" />}
                />
                <Route
                  path="/signup"
                  element={<Navigate replace to="checkout" />}
                />
                <Route
                  path="/signup"
                  element={<Navigate replace to="/product/:id" />}
                />
                <Route
                  path="/login"
                  element={<Navigate replace to="/product/:id" />}
                />
                <Route path="/product/:id" element={<SingleProductPage />} />
              </Routes>
            </Layout>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
