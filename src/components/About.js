import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fade } from "react-reveal";

export default function About() {
    return (
        <Box className="about" sx={{ height: "95vh", display: "flex", position: "relative", paddingTop: 1, zIndex: 2, backgroundColor: "transparent" }}>
            <Box sx={{ position: "absolute" }}>
                <Fade top>
                    <Typography variant="h2" sx={{ fontFamily: "Cardo, serif", fontStyle: "italic", color: "rgb(27, 99, 61)", mb: 0 }} gutterBottom>About Me</Typography>
                    <Typography variant="h4" sx={{ fontFamily: "Poiret One, cursive", color: "rgb(27,99,61)", mt: 0, }} gutterBottom>***</Typography>
                </Fade>
                <Fade bottom>
                    <Box sx={{ ml: "20vw", mr: "20vw", maxHeight: "60vh", padding: 5, background: "rgb(27, 99, 61)", boxShadow: 10, zIndex: 0 }}>
                        <Typography variant="body1" sx={{ textAlign: "justify", color: "white", fontFamily: "Cardo, serif", mb: "15px" }} gutterBottom>
                            Growing up in Bellevue, WA, where the massive presence of global tech giants like Amazon, Microsoft, T-Mobile and Adobe is undeniable, the tech industry has always been in my periphery. Early on I took a computer science class and discovered I had a knack for coding. However, instead, I pursued a career in theatre, got my Bachelors degree in Acting, and moved to New York. While living in New York and struggling through the pandemic, I re-evaluated my direction and career path. I refocused my creative energy from the stage to learning to code.
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: "justify", color: "white", fontFamily: "Cardo, serif" }} gutterBottom>
                            Here's 3 things you should know about me:
                        </Typography>
                        <ul className="web-copy">
                            <li>
                                <strong>I believe in a growth-centric approach to development.</strong> Breakthroughs in innovation start with curiosity, sometimes failure, but always result in learning.
                            </li>
                            <br/>
                            <li>
                                <strong>I'm a life-long learner.</strong> From new methodologies to new languages, technology is constantly changing. I am passionate about maintaining and supporting curiosity throughout my career.
                            </li>
                            <br/>
                            <li>
                                <strong>I work well with others.</strong> I am an adept communicator and a thoughtful collaborator. My training as an actor and my experience in hospitality has made me agile and adaptable with a customer-first mindset.
                            </li>
                        </ul>
                        <Typography variant="body1" sx={{ textAlign: "justify", color: "white", fontFamily: "Cardo, serif" }} gutterBottom>
                            My goal is to bring these skills together with my passion for code, to create unique digital experiences that have a positive impact.
                        </Typography>
                    </Box>
                </Fade>
            </Box>
        </Box>
    )
}