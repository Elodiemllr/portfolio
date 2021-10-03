import React from "react";
import HomePicture from "./HomePicture.js";
import SocialLink from "./SocialLink.js";
import TextPresentation from "./TextPresentation.js";

const Home = () => {
    return (
        <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <SocialLink></SocialLink>
                    <HomePicture></HomePicture>
                    <TextPresentation></TextPresentation>
                </div>
            </div>
        </section>
    );
};

export default Home;
