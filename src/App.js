import { Routes, Route, Navigate } from "react-router-dom";
import SizeProvider from "./store/SizeProvider";
import "./App.css";
import Layout from "./UI/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

function App() {
  return (
    <SizeProvider>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Layout>
    </SizeProvider>
  );
}

export default App;
