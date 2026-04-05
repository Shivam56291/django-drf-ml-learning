import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PublicRoute from "./PublicRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header />

          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
