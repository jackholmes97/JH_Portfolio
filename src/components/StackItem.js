import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
export default function StackItem({data}) {

    return (
        <Box className="child" sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <Avatar alt={data.name} src={data.logo} sx={{height: "115px", width: "110px", borderRadius: 0, margin: "3%"}}/>
            <Typography variant="h6" sx={{color: "black", fontSize:"20px", fontFamily: "Cardo, serif"}} gutterBottom>{data.name}</Typography>
        </Box>
        // <Box sx={{background:`${data.color}`, p:5, borderRadius: 50, maxWidth: "100px", textAlign:"center"}}>
        //     <h2>{data.name}</h2>
        // </Box>
    )
}