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
                        <Box sx={{ width: "36vw", pl:"18vw"}}>
                            <Typography variant="h2" gutterBottom sx={{ mb: 0, color: "rgb(27, 99, 61)", fontFamily: "Cormorant SC, serif", textAlign: "left" }}>Dump</Typography>
                            <Divider sx={{ background: "rgb(27, 99, 61)", width: "50vh" }} />
                            <Typography variant="body1" sx={{ textAlign: "justify", mt: 1, fontFamily: "Cardo, serif" }} gutterBottom>
                                Content curation is everywhere. While some curation helps to organize our digital world, the danger of over curation exists. What if there was a place people could share their latest vacation photos without needing professional-level photography,  the latest filter, and a photoshopped jawline? Dump was created for just this purpose. Dump is the first iteration of an image sharing site based on the recent rise in popularity of the “photo dump” trend on sites like Instagram. If you have authentic content that is ripe for sharing, just login, share it (or dump it) here.
                                <br/>
                                <br/>
                                 This is site is built with React (Frontend) and Ruby on Rails (Backend). It offers cloud-based storage through Amazon Web Services and Active Storage, real-time notification technology with Socket.io and user authentication and authorization through BCrypt. Custom styling done with Material UI.

                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <a className="btn" href="https://vimeo.com/792335061" target="_blank" rel="noreferrer">
                                    Demo
                                </a>
                                <a className="btn" href="https://github.com/jackholmes97/Dump" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
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
                                Documentation and learning resources for self-taught coders are everywhere, but aren't always accessible, digestible, or easy to find. While studying at Flatiron, we needed a quick way to find and categorize the articles our fellow students were writing so we could better understand difficult concepts through various perspectives and learn from each other. BlogShare is  meant to do just that: help students explore different perspectives on a wide variety of topics covered in coding bootcamps (specifically Flatiron School).
                                This is a Frontend project built with React.js, React Router 6, and Material UI.
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <a className="btn" href="https://vimeo.com/792350600" target="_blank" rel="noreferrer">
                                    Demo
                                </a>
                                <a className="btn" href="https://github.com/jackholmes97/blogShare" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className="projImg2" src="./bshare1.png" alt="me"/>
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
                            This project was born out of a desire to explore the integration of external APIs in JavaScript applications. It's a Single Page Application dedicated to sharing and generating the latest memes. Simply log in, create your meme on the fly, and send it to your friends or pin it to your favorites. This project was built with Vanilla JavaScript, HTML, and CSS plus the implementation of SMTP.js and an Elastic Email SMTP server to allow for email sending capabilities. User account information is stored as JSON data and the memes are sourced using the IMGFlip API.

                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <a className="btn" href="https://vimeo.com/792355062" target="_blank" rel="noreferrer">
                                    Demo
                                </a>
                                <a className="btn" href="https://github.com/jackholmes97/phase-1-project" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Fade>
            </Grid >
        </Box >

    )
}