import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
<main className="pt-[100px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />   
      </Routes>
      </main>
    <Footer />
    </div>
  );
}