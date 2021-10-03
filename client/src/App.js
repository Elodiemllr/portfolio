import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Qualification></Qualification>
            <Portfolio></Portfolio>
            <Contact> </Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
