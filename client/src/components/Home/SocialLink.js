import React from "react";

const SocialLink = () => {
    return (
        <div className="home__social">
            <a
                href="https://www.linkedin.com/in/elodie-muller-09846417b/"
                targer="_blank"
                className="home__social-icon"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href="https://dribbble.com/elodie-js"
                targer="_blank"
                className="home__social-icon"
            >
                <i className="uil uil-dribbble"></i>
            </a>
            <a
                href="https://github.com/Elodiemllr"
                targer="_blank"
                className="home__social-icon"
            >
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default SocialLink;
