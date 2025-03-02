import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import IMG_1531 from '../assets/images/IMG_1531.jpg';
import IMG_3227 from '../assets/images/IMG_3227.jpg';
import IMG_3609 from '../assets/images/IMG_3609.jpg';
import IMG_3622 from '../assets/images/IMG_3622.jpg';
import IMG_3709 from '../assets/images/IMG_3709.jpg';
import IMG_3909 from '../assets/images/IMG_3909.jpg';
import IMG_3992 from '../assets/images/IMG_3992.jpg';
import IMG_4073 from '../assets/images/IMG_4073.jpg';
import IMG_4094 from '../assets/images/IMG_4094.jpg';
import IMG_4171 from '../assets/images/IMG_4171.jpg';
import IMG_4406 from '../assets/images/IMG_4406.jpg';
import IMG_4537 from '../assets/images/IMG_4537.jpg';
import IMG_4598 from '../assets/images/IMG_4598.jpg';
import IMG_9352 from '../assets/images/IMG_9352.jpg';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>My Work</h1>
        <div className="projects-grid">
            <div className="project">
                <a><img src={IMG_3227} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="_blank" target="_blank" rel="noreferrer"><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_3709} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_4537} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_4171} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_3909} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_4598} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_3622} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_3992} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_3609} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
            <div className="project">
                <a><img src={IMG_4094} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2></h2></a>
                <p></p>
            </div>
        </div>
    </div>
    );
}

export default Project;