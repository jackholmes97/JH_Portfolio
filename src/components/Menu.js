import React from "react";
import Box from "@mui/material/Box";
export default function Menu() {
    const handleAboutScroll = () => {
        const about = document.getElementsByClassName('about')[0];
        if (about) {
            about.scrollIntoView({behavior: "smooth"});
        }
    }

    const handleSkillsScroll = () => {
        const skills = document.getElementsByClassName('skills')[0];
        if (skills) {
            skills.scrollIntoView({behavior: "smooth"});
        }
    }
    const handleProjectsScroll = () => {
        const projects = document.getElementsByClassName('projects')[0];
        if (projects) {
            projects.scrollIntoView({behavior: "smooth"});
        }
    }
    return(
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", height: "10vh", justifyContent: "space-evenly"}}>
            <button className="menu-btn" onClick={handleAboutScroll}>About</button>
            <button className="menu-btn" onClick={handleSkillsScroll}>Skills</button>
            <button className="menu-btn" onClick={handleProjectsScroll}>Projects</button>
            <a className="menu-btn" href="./jack-resume.pdf" download="jack-resume.pdf">Resume</a>
        </Box>
    )
}