import React from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";

const App = () => {
    return (
        <main className="h-screen">
            <LandingPage />
            <AboutPage />
            <WorkPage />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
