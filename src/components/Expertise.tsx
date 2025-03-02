import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <h3>Precision Linework & Detailed Artistry</h3>
                        <p>I focus on bold, clean linework with fine details that make designs sharp and lasting, whether classic or modern.</p>
                    </div>

                    <div className="skill">
                        <h3>Mastery in Color & Black-and-Gray Techniques</h3>
                        <p>I’m skilled in both color tattoos and black-and-gray work. I create vibrant color tattoos and deep, realistic black-and-gray pieces with expert shading and contrast.</p>
                    </div>

                    <div className="skill">
                        <h3>Tailored Custom Designs</h3>
                        <p>I design custom tattoos that capture your vision and tell your personal story.</p>
                    </div>
                </div>
            </div>

            {/* My Story Section */}
            <div className="my-story" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '50px', maxWidth: '800px' }}>
                <h1>My Story</h1>
                <p>
                Hey, I’m Johnny, a Texas native and tattoo artist with 9 years of experience. Growing up as a military brat, I was always around art, from drawing cereal box characters to advanced art classes in school. My interest in tattoos grew watching my dad get inked, and after moving to El Paso, I decided to pursue tattooing. After refining my portfolio, I landed a spot at Pricks Tattoo, and the rest is history. I specialize in bold line work, color, black and gray tattoos, and realistic designs.
                </p>
            </div>
        </div>
    );
}

export default Expertise;