import React from "react";
import Logo from "../Logo.js";
import NavBar from "../NavBar.js";

const Header = () => {
    return (
        <header className="header" id="header">
            <nav class="nav container">
                <Logo> </Logo>
                <NavBar></NavBar>
            </nav>
        </header>
    );
};

export default Header;
