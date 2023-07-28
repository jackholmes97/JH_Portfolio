import { Typography } from "@mui/material";
import React from "react";
import About from "./About";

export default function Contact() {
    return (
        <div className="contact">
            <Typography variant="body1" sx={{fontFamily:"Cardo, serif", color: "rgb(27,99,61)", t: "500px"}} gutterBottom>© Jack Holmes 2023</Typography>
            <a className="email" href="mailto: jdholmes48@gmail.com">
                <Typography variant="body1" sx={{fontFamily:"Cardo, serif", color: "rgb(27,99,61)", t: "500px"}} gutterBottom>jdholmes48@gmail.com</Typography>
            </a>
        </div>
    )
}