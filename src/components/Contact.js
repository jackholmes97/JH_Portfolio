import { Typography } from "@mui/material";
import React from "react";
import StraightIcon from '@mui/icons-material/Straight';

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
    return (
        <div className="contact">
            <div className="copy">
            <Typography variant="body1" sx={{fontFamily:"Cardo, serif", color: "rgb(27,99,61)", t: "500px"}} gutterBottom>© 2023 Jack Holmes</Typography>
            <a className="email" href="mailto:jdholmes48@gmail.com?subject=Hello!">
                jdholmes48@gmail.com
            </a>
            </div>
            <button className="scroll" onClick={scrollToTop}>
                <StraightIcon/>
                Top
            </button>
        </div>
    )
}