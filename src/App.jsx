import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("Home");

  const pageMap = {
    Home: <HomePage navigate={setPage} />,
    Service: <ServicePage />,
    Portfolio: <PortfolioPage />,
    Courses: <CoursesPage />,
    About: <AboutPage />,
    Contact: <ContactPage />,
  };

  return (
    <div
      style={{
        fontFamily: "'Exo 2', Segoe UI, sans-serif",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <Navbar current={page} navigate={setPage} />
      {pageMap[page]}
      <Footer navigate={setPage} />
    </div>
  );
}
