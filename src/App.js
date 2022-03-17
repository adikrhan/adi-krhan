import { Routes, Route, Navigate } from "react-router-dom";
import SizeProvider from "./store/SizeProvider";
import "./App.css";
import HeroSection from "./components/hero-section/HeroSection";
import Layout from "./UI/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <SizeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </SizeProvider>
  );
}

export default App;
