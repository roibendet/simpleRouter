import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
            home
            </Link>
          </li>
          <li>
            <Link to={'/blogs'}>
            blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
      <Routes>
          <Route index path="/"  element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
      </Routes>
      <footer>
        footer
      </footer>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);