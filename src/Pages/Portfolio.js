import React from 'react';
import GOOGLE_HOMEPAGE from '../images/Portfolio-1_0000_Screen Shot 2020-09-29 at 5.59.33 PM.png.jpg';
import INTRO_PAGE from '../images/Portfolio-1_0001_Screen Shot 2020-09-29 at 5.59.40 PM.png.jpg';
import HORSEON from '../images/Portfolio-1_0002_Screen Shot 2020-09-29 at 6.00.29 PM.png.jpg';
import TRIBUTE from '../images/Portfolio-1_0003_Screen Shot 2020-09-29 at 6.04.28 PM.png.jpg';
import CHOPCHEESE from '../images/chopcheese.png';
import CODEQUIZ from '../images/Screen Shot 2020-10-19 at 5.24.58 PM.png';
import WEATHERDASHBOARD from '../images/Screen Shot 2020-10-19 at 5.30.07 PM.png';
import EMPLOYEESUMMARY from '../images/Screen Shot 2020-12-02 at 3.22.11 PM.png';
import BROWNBAG from '../images/Screen Shot 2020-12-02 at 3.30.59 PM copy.png';

const Projects = () => {
    return (
        // <!-- main portfolio -->
        <main className="container" id="main">
            <div className="row">
                <div className="col">
                    <h1>Portfolio</h1>
                </div>
            </div>
            {/* <!-- first row of images --> */}
            <div className="row">
                <article className="col-md-4">
                    {/* <!-- Tribute page --> */}
                    <a href="https://elliott-andrew.github.io/tribute-page/" target="_blank" rel="noreferrer">
                        <img src={TRIBUTE}
                            className="img-fluid portfolio-images" alt="Cibo Matto - Tribute Page" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Tribute Page</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Band tribute page built for bootcamp prework.</p>
                            <a href="https://elliott-andrew.github.io/tribute-page/">Band Tribute Page</a>
                        </div>
                    </div>
                </article>
                <article className="col-md-4">
                    {/* <!-- Horseoin Refactoring --> */}
                    <a href="https://elliott-andrew.github.io/Code-Refractor/" target="_blank" rel="noreferrer">
                        <img src={HORSEON}
                            className="img-fluid portfolio-images" alt="Horiseon - Website Refractor" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Horiseon Refactoring</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Refactored a marketing agency website.</p>
                            <a href="https://elliott-andrew.github.io/Code-Refractor/">Horiseon Refactoring</a>
                        </div>
                    </div>
                </article>
                <article className="col-md-4">
                    {/* <!-- Prework Bio page --> */}
                    <a href="https://elliott-andrew.github.io/prework-about-me/" target="_blank" rel="noreferrer">
                        <img src={INTRO_PAGE}
                            className="img-fluid portfolio-images" alt="Andrew Elliott - Bio" />
                    </a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Introduction Page</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <p>Introduction page built for bootcamp prework.</p>
                            <a href="https://elliott-andrew.github.io/prework-about-me/">Introduction Page</a>
                        </div>
                    </div>
                </article>
            </div>
            {/* <!-- second row of images --> */}
            <div className="row">
                {/* <!-- Google Homepage --> */}
                <article className="col-md-4"><a href="https://elliott-andrew.github.io/google-homepage/" target="_blank" rel="noreferrer"><img
                    src={GOOGLE_HOMEPAGE}
                    className="img-fluid portfolio-images" alt="Google Homepage Mock Up" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Google Homepage</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Rebuild of the Google homepage.</p>
                            <a href="https://elliott-andrew.github.io/google-homepage/">Google Homepage</a>
                        </div>
                    </div>
                </article>
                {/* <!-- chopCheese --> */}
                <article className="col-md-4"><a href="https://github.com/elliott-andrew/Code-Quiz" target="_blank" rel="noreferrer"><img
                    src={CODEQUIZ} className="img-fluid portfolio-images"
                    alt="Code Quiz Homepage" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Code Quiz</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Code quiz exercise.</p>
                            <a href="https://github.com/elliott-andrew/Code-Quiz">Code Quiz</a>
                        </div>
                    </div>
                </article>
                {/* <!-- Code Quiz --> */}
                <article className="col-md-4"><a href="https://mikevitelli.github.io/chopCheese/" target="_blank" rel="noreferrer"><img
                    src={CHOPCHEESE} className="img-fluid portfolio-images"
                    alt="chopCheese Homepage" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>.chopCheese</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Content aggregation app.</p>
                            <a href="https://mikevitelli.github.io/chopCheese/">.chopCheese</a>
                        </div>
                    </div>
                </article>
            </div>
            <div className="row">
                {/* <!-- Weather Dashboard --> */}
                <article className="col-md-4"><a href="https://github.com/elliott-andrew/weather-dashboard" target="_blank" rel="noreferrer"><img
                    src={WEATHERDASHBOARD} className="img-fluid portfolio-images"
                    alt="Weather Dashboard Homepage" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Weather Dashboard</h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col  mb-4">
                            <p>Weather forecasting app.</p>
                            <a href="https://github.com/elliott-andrew/weather-dashboard">Weather Dashboard</a>
                        </div>
                    </div>
                </article>
                <article className="col-md-4"><a href="https://github.com/elliott-andrew/Employee-Tracker" target="_blank" rel="noreferrer"><img
                    src={EMPLOYEESUMMARY} className="img-fluid portfolio-images"
                    alt="Weather Dashboard Homepage" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Employee Tracker</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>Easily organize your employees.</p>
                            <a href="https://github.com/elliott-andrew/Employee-Tracker">Employee Tracker</a>
                        </div>
                    </div>
                </article>
                <article className="col-md-4"><a href="https://foodappbcs.herokuapp.com" target="_blank" rel="noreferrer"><img
                    src={BROWNBAG} className="img-fluid portfolio-images"
                    alt="Weather Dashboard Homepage" /></a>
                    <div className="row mt-3">
                        <div className="col">
                            <h2>Brown Bag</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  mb-4">
                            <p>An online ordering app for local restaurants.</p>
                            <a href="https://foodappbcs.herokuapp.com">Employee Tracker</a>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default Projects