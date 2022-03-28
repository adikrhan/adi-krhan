import { Routes, Route, Navigate } from "react-router-dom";
import SizeProvider from "./store/SizeProvider";
import "./App.css";
import Layout from "./UI/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Gallery from "./pages/Gallery";
import Blog from './pages/Blog';

function App() {
  return (
    <SizeProvider>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
      <Footer />
    </SizeProvider>
  );
}

export default App;
