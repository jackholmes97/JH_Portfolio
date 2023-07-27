import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fade, Bounce } from "react-reveal";

export default function About() {
    return (
        <Box sx={{height: "75vh", display: "flex",position:"relative", paddingTop: 5, boxShadow: 10, zIndex: 2, backgroundColor:"white"}}>
            <Box sx={{position: "absolute"}}>
            <Fade top>
                <Typography variant="h2" sx={{fontFamily: "Cormorant SC, serif", color: "rgb(27, 99, 61)"}} gutterBottom>About Me</Typography>
            </Fade>
            <Fade bottom>
                <Box sx={{ ml: "25vh", mr: "25vh", padding: 5, background: "rgb(27, 99, 61)", boxShadow: 10, zIndex: 0}}>
                    <Typography variant="body1" sx={{ textAlign: "left", color: "white", fontFamily: "CormorantSC, serif" }} gutterBottom>
                        Growing up in Bellevue, WA where the massive presence of global tech giants like Amazon, Microsoft, T-Mobile and Adobe is undeniable, the tech industry has always been in my periphery. I didn't start to seriously consider coding as a passion until I took AP Computer Science in high school, which I loved a lot but ultimately went on to go to school for acting. Fast forward to 2020, I was feeling professionally and intellectually plateaued and was looking to make a career shift. I remembered the excitement I felt for coding in high school and decided to enroll in a Software Engineering Bootcamp. Attending this bootcamp, reinvigorated my zeal for continual learning and made me excited to craft unique digital experiences in an online landscape.
                    </Typography>
                    <br></br>
                    <Typography variant="body1" sx={{ textAlign: "left", color: "white", fontFamily: "CormorantSC, serif"}} gutterBottom>
                        I believe in a growth-centric approach to development. With new technology being introduced everyday, I understand the necessity of curiosity and exploration within the tech world. From my training as an actor and my experience in hospitality, I have picked up a unique skill set that aid this approach. I am an exceptionally quick-learner, an adept communicator, and a thoughtful collaborator. My goal is to bring these skills, coupled with my passion for code, to exciting work that will have a positive impact on the world.
                    </Typography>
                </Box>
            </Fade>
            </Box>
        </Box>
    )
}