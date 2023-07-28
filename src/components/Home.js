import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
export default function Home() {
    return (
        <div className="home">
            <div className="geeks2"></div>
            <div className="geeks3"></div>
            <div className="geeks"></div>
            <Box >
                <Bounce bottom>
                    <img className="me" src="Me2.JPG" alt="me"></img>
                </Bounce>
            </Box>
            <Box sx={{width: "500px", mt: 20}}>
            <Slide left>
            <Typography variant="h1" gutterBottom sx={{fontSize: "180px",fontFamily: "Poiret One, cursive", mb: 0, textAlign: "right", color: "rgb(27, 99, 61)", ml: "450px"}}>JACK</Typography>
            </Slide>
            <br/>
            <Slide right>
            <Typography variant="h1" gutterBottom className="inverted-text" sx={{fontSize: "180px",fontFamily: "Poiret One, cursive", mb: 0, textAlign: "right", color: "rgb(27, 99, 61)", ml: "240px", mixBlendMode:"lighten"}}>HOLMES*</Typography>
            </Slide>
            <Fade in={true} timeout={10000}>
            <Typography variant="h6" gutterBottom sx={{mt: 2, ml: "200px", fontFamily: "Cardo, serif",fontStyle:"italic", textAlign: "left", fontSize: "25px", color: "rgb(27, 99, 61)"}}>* Front End & UX Developer</Typography>
            </Fade>
            <button className="btn2">
                <DownloadIcon sx={{mr: 1}}/>
                Download my Resume
            </button>
            {/* <Box sx={{backgroundColor: "rgb(27, 99 , 61)", padding: "15px", boxShadow: 15}}>
                <Typography variant="body1" gutterBottom sx={{textAlign: "left", color: "white", fontFamily: "CormorantSC, serif"}}>
                    An enthusiastic Software Developer with a passion for solving complex problems and creating unique digital experiences. Possesses strong communication skills and creativity that help cultivate an efficient, synchronous, and fun work environment. Has an extensive background in the performing arts working as a professional actor, to which he can attribute his composure under-pressure and his affinity for creative collaboration.
                </Typography>
            </Box> */}
            </Box>
            <div className="another-div"></div>
            <div className="another-div2"></div>
            <div className="another-div3"></div>
        </div>
    )
}