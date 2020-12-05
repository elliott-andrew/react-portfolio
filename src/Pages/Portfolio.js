import React from 'react';
import GOOGLE_HOMEPAGE from '../images/Portfolio-1_0000_Screen Shot 2020-09-29 at 5.59.33 PM.png.jpg';
import INTRO_PAGE from '../images/Portfolio-1_0001_Screen Shot 2020-09-29 at 5.59.40 PM.png.jpg';
import HORSEON from '../images/Portfolio-1_0002_Screen Shot 2020-09-29 at 6.00.29 PM.png.jpg';
import TRIBUTE from '../images/Portfolio-1_0003_Screen Shot 2020-09-29 at 6.04.28 PM.png.jpg';
import CHOPCHEESE from '../images/Screen Shot 2020-10-16 at 7.49.28 PM.png';
import CODEQUIZ from '../images/Screen Shot 2020-10-19 at 5.24.58 PM.png';
import WEATHERDASHBOARD from '../images/Screen Shot 2020-10-19 at 5.30.07 PM.png';
import EMPLOYEESUMMARY from '../images/Screen Shot 2020-12-02 at 3.22.11 PM.png';
import BROWNBAG from '../images/Screen Shot 2020-12-02 at 3.30.59 PM copy.png';
import Project from "../Components/Project"

const Projects = () => {
    const projects = [
        {
            name: "Tribute Page",
            src: TRIBUTE,
            description: "Band tribute page built for bootcamp prework.",
            github: "https://elliott-andrew.github.io/tribute-page/"
        },
        {
            name: "Horiseon Refactoring",
            src: HORSEON,
            description: "Refactored a marketing agency website.",
            github: "https://elliott-andrew.github.io/Code-Refractor/"
        },
        {
            name: "Introduction Page",
            src: INTRO_PAGE,
            description: "Introduction page built for bootcamp prework.",
            github: "https://elliott-andrew.github.io/prework-about-me/"
        },
        {
            name: "Google Homepage",
            src: GOOGLE_HOMEPAGE,
            description: "Rebuild of the Google homepage.",
            github: "https://elliott-andrew.github.io/google-homepage/"
        },
        {
            name: "Code Quiz",
            src: CODEQUIZ,
            description: "Code quiz exercise.",
            github: "https://github.com/elliott-andrew/Code-Quiz"
        },
        {
            name: ".chopCheese",
            src: CHOPCHEESE,
            description: "Content aggregation app.",
            github: "https://mikevitelli.github.io/chopCheese/"
        },
        {
            name: "Weather Dashboard",
            src: WEATHERDASHBOARD,
            description: "Weather forecasting app.",
            github: "https://github.com/elliott-andrew/weather-dashboard"
        },
        {
            name: "Employee Tracker",
            src: EMPLOYEESUMMARY,
            description: "Easily organize your employees.",
            github: "https://github.com/elliott-andrew/Employee-Tracker"
        },
        {
            name: "Brown Bag",
            src: BROWNBAG,
            description: "An online ordering app for local restaurants.",
            github: "https://foodappbcs.herokuapp.com/"
        },
    ]
    return (
        // <!-- main portfolio -->
        <main className="container" id="main">
            <div className="row">
                <div className="col">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className="row">
                <Project
                    src={projects[0].src}
                    name={projects[0].name}
                    github={projects[0].github}
                    description={projects[0].description} />
                <Project
                    src={projects[1].src}
                    name={projects[1].name}
                    github={projects[1].github}
                    description={projects[1].description} />
                <Project
                    src={projects[2].src}
                    name={projects[2].name}
                    github={projects[2].github}
                    description={projects[2].description} />
            </div>
            <div className="row">
                <Project
                    src={projects[3].src}
                    name={projects[3].name}
                    github={projects[3].github}
                    description={projects[3].description} />
                <Project
                    src={projects[4].src}
                    name={projects[4].name}
                    github={projects[4].github}
                    description={projects[4].description} />
                <Project
                    src={projects[5].src}
                    name={projects[5].name}
                    github={projects[5].github}
                    description={projects[5].description} />
            </div>
            <div className="row mb-5">
                <Project
                    src={projects[6].src}
                    name={projects[6].name}
                    github={projects[6].github}
                    description={projects[6].description} />
                <Project
                    src={projects[7].src}
                    name={projects[7].name}
                    github={projects[7].github}
                    description={projects[7].description} />
                <Project
                    src={projects[8].src}
                    name={projects[8].name}
                    github={projects[8].github}
                    description={projects[8].description} />
            </div>
        </main>
    )
}

export default Projects