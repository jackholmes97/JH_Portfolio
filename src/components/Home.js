import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bounce from "react-reveal/Bounce";
export default function Home() {
    return (
        <div className="home">
            <div className="geeks2"></div>
            <div className="geeks3"></div>
            <div className="geeks"></div>
            <Box >
                <Bounce bottom>
                    <img className="me" src="Me_home.PNG" alt="me"></img>
                </Bounce>
            </Box>
            <Box sx={{width: "500px", ml: 35, mt: 20}}>
            <Typography variant="h2" gutterBottom sx={{fontFamily: "Cormorant SC, serif", mb: 0, textAlign: "left", color: "rgb(27, 99, 61)"}}>Jack Holmes</Typography>
            <Typography variant="h6" gutterBottom sx={{mt: 0, ml: 2, textAlign: "left"}}>Front End & UX Developer</Typography>
            <Box sx={{backgroundColor: "rgb(27, 99 , 61)", padding: "15px", boxShadow: 15}}>
                <Typography variant="body1" gutterBottom sx={{textAlign: "left", color: "white", fontFamily: "CormorantSC, serif"}}>
                    An enthusiastic Software Developer with a passion for solving complex problems and creating unique digital experiences. Possesses strong communication skills and creativity that help cultivate an efficient, synchronous, and fun work environment. Has an extensive background in the performing arts working as a professional actor, to which he can attribute his composure under-pressure and his affinity for creative collaboration.
                </Typography>
            </Box>
            </Box>
            <div className="another-div"></div>
            <div className="another-div2"></div>
            <div className="another-div3"></div>
        </div>
    )
}