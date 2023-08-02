import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Fade from "@mui/material/Fade";
import DownloadIcon from '@mui/icons-material/Download';
export default function Home() {
    return (
        <div className="home">
            <div className="geeks2"></div>
            <div className="geeks3"></div>
            <div className="geeks"></div>
            <div className="inner-home">
            <Box >
                <Bounce bottom>
                    <img className="me" src="Me2.JPG" alt="me"></img>
                </Bounce>
            </Box>
            <Box sx={{ width: "50vw", mt: "15vh",position: "absolute", ml: "42vh"}}>
                <Slide left>
                    <Typography variant="h1" gutterBottom sx={{ fontSize: "25vmin", fontFamily: "Poiret One, cursive", mb: 0, textAlign: "right", color: "rgb(27, 99, 61)", ml: "31vw" }}>JACK</Typography>
                </Slide>
                <br />
                <Slide right>
                    <Typography variant="h1" gutterBottom className="inverted-text" sx={{ fontSize: "25vh", fontFamily: "Poiret One, cursive", mb: 0, textAlign: "right", color: "rgb(27, 99, 61)", ml: "16vw", mixBlendMode: "lighten" }}>HOLMES*</Typography>
                </Slide>
                <Fade in={true} timeout={8000}>
                    <Typography variant="h2" gutterBottom sx={{ml: "16vw",width: "25vw" , fontFamily: "Cardo, serif", fontStyle: "italic", textAlign: "left", fontSize: "3.5vh", color: "rgb(27, 99, 61)" }}>* Front End & UX Developer</Typography>
                </Fade>
                {/* <Slide right>
                    <a className="btn2" href="./jack-resume.pdf" download="jack-resume.pdf">
                        <DownloadIcon fontSize="2vh" sx={{mr:"1vh"}}/>
                        Download my Resume
                    </a>
                </Slide> */}
            </Box>
            </div>
            <div className="another-div"></div>
            <div className="another-div2"></div>
            <div className="another-div3"></div>
        </div>
    )
}