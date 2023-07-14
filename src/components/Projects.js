import React from "react";
import {Fade} from "react-reveal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
export default function Projects() {
    return (
        <>
        <Fade left>
            <Box sx={{mt: 10, height: "75vh", display: "flex"}}>
                <img className="projImg" src="/Dumpp.png" alt="me"></img>
                <Box sx={{ml: "10vh", mb: 0}}>
                    <Typography variant="h2" gutterBottom sx={{mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left"}}>Dump</Typography>
                    <Divider sx={{background: "rgb(27, 99, 61)", width: "50vh"}}/>
                </Box>
            </Box>
        </Fade>
        <Fade right>
            <Box sx={{mt: 10, height: "75vh", display: "flex"}}>
                <Box sx={{ml: "15vh", mb: 0}}>
                    <Typography variant="h2" gutterBottom sx={{mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left"}}>BlogShare</Typography>
                    <Divider sx={{background: "rgb(27, 99, 61)", width: "50vh"}}/>
                </Box>
                <img className="projImg2" src="/bshare1.png" alt="me"></img>
            </Box>
        </Fade>
        <Fade left>
            <Box sx={{mt: 10, height: "75vh", display: "flex"}}>
                <img className="projImg" src="/memeg.png" alt="me"></img>
                <Box sx={{ml: "10vh", mb: 0}}>
                    <Typography variant="h2" gutterBottom sx={{mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left"}}>Meme Generator.</Typography>
                    <Divider sx={{background: "rgb(27, 99, 61)", width: "50vh"}}/>
                </Box>
            </Box>
        </Fade>
        <Fade right>
            <Box sx={{mt: 10, height: "75vh", display: "flex"}}>
                <Box sx={{ml: "15vh", mb: 0}}>
                    <Typography variant="h2" gutterBottom sx={{mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left"}}>Dump</Typography>
                    <Divider sx={{background: "rgb(27, 99, 61)", width: "50vh"}}/>
                </Box>
                <img className="projImg2" src="/demo1.jpeg" alt="me"></img>
            </Box>
        </Fade>
        </>
       
    )
}