import React from "react";

const NavBar = () => {
    return (
        <>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav_item">
                        <a href="#home" class="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#about" class="nav__link">
                            <i class="uil uil-user nav__icon"></i> About me
                        </a>
                    </li>

                    <li class="nav_item">
                        <a href="#skills" class="nav__link">
                            <i class="uil uil-file-info-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#qualification" class="nav__link">
                            <i class="uil uil-analysis nav__icon"></i>
                            Qualification
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#portfolio" class="nav__link">
                            <i class="uil uil-files-landscapes nav__icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#contact" class="nav__link">
                            <i class="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>
            <div class="nav__btns">
                <i class="uil uil-moon change-theme" id="theme-button"></i>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </div>
        </>
    );
};
export default NavBar;
