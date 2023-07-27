import React from "react";
import StackItem from "./StackItem";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import "../myStack.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Stack(items) {
    const options = {
		size: 180,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 200,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}

    console.log(items)

    const itemlist = items.items.map((data) => {
        return <StackItem data={data} className="child" key={data.name}/>
    })


    return (
        <Box sx={{background: "rgb(27, 99, 61)", height: "100vh", pt: 5}}>
            <Typography variant="h1" sx={{fontFamily: "Cormorant SC, serif", color:"white", ml:1}} gutterBottom>Technical Skills</Typography>
            <Box sx={{paddingLeft: 30}}>
                <BubbleUI options={options} className="myBubbleUI">
                    {itemlist}
                </BubbleUI>
            </Box>
        </Box>
    )
}