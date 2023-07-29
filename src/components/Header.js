import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Header() {   

    return (
        <Box className="side-btns" sx={{zIndex: "10001", position: "fixed", ml: 2.5, mt: 15}}>
            <a href="mailto: jdholmes48@gmail.com?subject=Hello!">
            <Avatar sx={{mb: 1, borderRadius: 0, boxShadow: 5, background: "rgb(27,99,61)", cursor: "pointer"}}>
                <EmailIcon/>
            </Avatar>
            </a>
            <a href="https://github.com/jackholmes97" target="_blank" rel="noreferrer">
            <Avatar sx={{mb: 1, borderRadius: 0, boxShadow: 5, background: "rgb(27,99,61)", cursor: "pointer"}}>
                <GitHubIcon/>
            </Avatar>
            </a>
            <a href="https://www.linkedin.com/in/jackholmes97/" target="_blank" rel="noreferrer">
            <Avatar sx={{mb: 1, borderRadius: 0, boxShadow: 5, background: "rgb(27,99,61)", cursor: "pointer"}}>
                <LinkedInIcon/>
            </Avatar>
            </a>
        </Box>
    );
}