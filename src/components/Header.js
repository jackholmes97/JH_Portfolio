import react from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box"
export default function Header() {   

    return (
        <Box className="side-btns" sx={{zIndex: "10001", position: "fixed", ml: 2.5, mt: 15}}>
            <Avatar sx={{mb: 1, borderRadius: 0}}>
                E
            </Avatar >
            <Avatar sx={{mb: 1, borderRadius: 0}}>
                G
            </Avatar>
            <Avatar sx={{mb: 1, borderRadius: 0}}>
                L
            </Avatar>
        </Box>
    );
}