import React from "react";
import { Fade } from "react-reveal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
export default function Projects() {
    return (
        <Box className='projects' sx={{ paddingTop: 5 }}>
            <Fade right>
                <div className="geek7"></div>
                <div className="geek5"></div>
            </Fade>
            <Fade up>
                <Typography variant="h1" sx={{ fontFamily: "Cardo, serif", color: "rgb(27, 99, 61)", mb: 0, fontStyle: "italic" }} gutterBottom>Recent Projects</Typography>
                <Typography variant="h2" sx={{ fontFamily: "Poiret One, cursive", color: "rgb(27, 99, 61)", mt: 0 }} gutterBottom>***</Typography>
            </Fade>
            <Grid container columns={2} >
                <Fade left>
                    <Grid item xs={4}>
                        <img className="projImg" src="/projects/Dumpp.png" alt="me"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ width: "36vw", pl:"19vw"}}>
                            <Typography variant="h2" gutterBottom sx={{ mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left" }}>Dump</Typography>
                            <Divider sx={{ background: "rgb(27, 99, 61)", width: "50vh" }} />
                            <Typography variant="body1" sx={{ textAlign: "justify", mt: 1, fontFamily: "Cardo, serif" }} gutterBottom>
                                Imagine if Instagram was anti-curatorial? Anyone could share whatever they wanted without the pressures of making their profile look nice. Dump was created in this vein because that shit is old, man. Dump is a cloud-based image sharing site that bites its thumb at the photo editors and social media managers of the world. If you have authentic content that is ripe for sharing, share it (or dump it) here.
                                <br></br>
                                <br></br>
                                This app was built as my final capstone project at Flatiron School. It is built with a React frontend and a Ruby on Rails backend and incorporates Amazon Web Services, Socket.io, and Active Storage. Custom styling done by Material UI.
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <button className="btn">
                                    Demo
                                </button>
                                <button className="btn">
                                    GitHub
                                </button>
                            </Box>
                        </Box>
                    </Grid>
                </Fade>
                <Fade right>
                    <Grid item xs={4}>
                        <Box sx={{mt: "75px", ml: "5vw", mb: 0, width: "29vw", mr: "25vw" }}>
                            <Typography variant="h2" gutterBottom sx={{ mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left" }}>BlogShare</Typography>
                            <Divider sx={{ background: "rgb(27, 99, 61)", width: "50vh" }} />
                            <Typography variant="body1" sx={{ fontFamily: "Cardo, serif", textAlign: "justify", mt: 1, width: "37vw" }} gutterBottom>
                                Imagine if Instagram was anti-curatorial? Anyone could share whatever they wanted without the pressures of making their profile look nice. Dump was created in this vein because that shit is old, man. Dump is a cloud-based image sharing site that bites its thumb at the photo editors and social media managers of the world. If you have authentic content that is ripe for sharing, share it (or dump it) here.
                                <br></br>
                                <br></br>
                                This app was built as my final capstone project at Flatiron School. It is built with a React frontend and a Ruby on Rails backend and incorporates Amazon Web Services, Socket.io, and Active Storage. Custom styling done by Material UI.
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <button className="btn">
                                    Demo
                                </button>
                                <button className="btn">
                                    GitHub
                                </button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className="projImg2" src="/projects/bshare1.png" alt="me"/>
                    </Grid>
                </Fade>
                <Fade left>
                    <Grid item xs={4}>
                        <img className="projImg3" src="/projects/memeg.png" alt="me"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{paddingLeft: "19vw", pt: "9vh"}}>
                            <Typography variant="h2" gutterBottom sx={{ mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left" }}>Meme Generator.</Typography>
                            <Divider sx={{ background: "rgb(27, 99, 61)", width: "67vh" }} />
                            <Typography variant="body1" sx={{ textAlign: "justify", fontFamily: "Cardo, serif", mt: 1, width: "500px" }} gutterBottom>
                                Imagine if Instagram was anti-curatorial? Anyone could share whatever they wanted without the pressures of making their profile look nice. Dump was created in this vein because that shit is old, man. Dump is a cloud-based image sharing site that bites its thumb at the photo editors and social media managers of the world. If you have authentic content that is ripe for sharing, share it (or dump it) here.
                                <br></br>
                                <br></br>
                                This app was built as my final capstone project at Flatiron School. It is built with a React frontend and a Ruby on Rails backend and incorporates Amazon Web Services, Socket.io, and Active Storage. Custom styling done by Material UI.
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <button className="btn">
                                    Demo
                                </button>
                                <button className="btn">
                                    GitHub
                                </button>
                            </Box>
                        </Box>
                    </Grid>
                </Fade>
            </Grid >
            {/* <Fade right>
            <Box sx={{mt: 10, height: "75vh", display: "flex"}}>
                <Box sx={{ml: "15vh", mb: 0}}>
                    <Typography variant="h2" gutterBottom sx={{mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left"}}>Dump</Typography>
                    <Divider sx={{background: "rgb(27, 99, 61)", width: "50vh"}}/>

                </Box>
                <img className="projImg2" src="/projects/demo1.jpeg" alt="me"></img>
            </Box>
        </Fade> */}
        </Box >

    )
}