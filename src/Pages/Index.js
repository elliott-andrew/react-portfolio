import React from 'react';
import IMG_3549 from "../images/IMG_3549.png"

const Index = () => {
    return (
        <main className="container" id="main">
            <div className="row">
                <div className="col">
                    <h1>About Me</h1>
                </div>
            </div>
            <article className="row">
                <section className="col-md-4">
                    <img src={IMG_3549} alt="Andrew Elliott" className="img-fluid" />
                </section>
                <section className="col-md-8" id="about-me-bio">
                    <p id="bio-big">I'm Andrew Elliott. A graphic designer producing <span className="emphasis">brand identities</span> <i className="fas fa-fingerprint"></i>, <span className="emphasis">packaging</span> <i className="fas fa-box-open"></i>, and <span className="emphasis">websites</span> <i className="fas fa-mouse-pointer"></i>.</p> <p>Passionate about design for both print and screen. I have been fortunate to work with a mix of brands, including Brooklyn Roasting Company, Oreo, Chips Ahoy, William Greenberg, and VOSS.</p>
                </section>
            </article>
        </main>
    )
};

export default Index