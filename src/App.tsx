import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
     <Toaster position="top-right" richColors />
    <div className="min-h-screen">
      <Header />
      <Toaster />

<main className="pt-[100px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />   
      </Routes>
      </main>
    <Footer />
    </div>
    </>
  );
}