import React from "react";
import StackItem from "./StackItem";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import "../myStack.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Fade } from "react-reveal";
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
        <Box sx={{background: "white", height: "100vh", pt: 5, mb: 25}}>
            <Fade left>
            <div className="geek4"></div>
            <div className="geek6"></div>
            </Fade>
            <Typography variant="h1" sx={{fontFamily: "Cardo, serif", fontStyle: "italic", color:"rgb(27,99,61)", ml:1, mb: 0}} gutterBottom>Technical Skills</Typography>
            <Typography variant="h2" sx={{fontFamily: "Poiret One, cursive", color:"rgb(27,99,61)", ml:1, mt: 0}} gutterBottom>***</Typography>
            <Box sx={{paddingLeft: 30}}>
                <BubbleUI options={options} className="myBubbleUI">
                    {itemlist}
                </BubbleUI>
            </Box>
        </Box>
    )
}