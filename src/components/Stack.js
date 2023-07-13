import {React, useState} from "react";
import ReactCardFlip from "react-card-flip";
export default function Stack() {
    const [isFlippedOne, setIsFlippedOne] = useState(false)
    const [isFlippedTwo, setIsFlippedTwo] = useState(false)
    const [isFlippedThree, setIsFlippedThree] = useState(false)

    function handleClickOne(e) {
        e.preventDefault();
        setIsFlippedOne(!isFlippedOne);
    }
    function handleClickTwo(e) {
        e.preventDefault();
        setIsFlippedTwo(!isFlippedTwo);
    }
    function handleClickThree(e) {
        e.preventDefault();
        setIsFlippedThree(!isFlippedThree);
    }
    return (
        <div className="stack">
            <h1>Skills</h1>
            <ReactCardFlip isFlipped={isFlippedOne} flipDirection={"horizontal"}>
                <div onClick={handleClickOne} className="front">
                    <h1>Front End</h1>
                </div>

                <div onClick={handleClickOne} className="back">
                    <h1>Hi</h1>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={isFlippedTwo} flipDirection={"horizontal"}>
                <div onClick={handleClickTwo} className="front">
                    <h1>Back End</h1>
                </div>

                <div onClick={handleClickTwo} className="back">
                    <h1>Hi</h1>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={isFlippedThree} flipDirection={"horizontal"}>
                <div onClick={handleClickThree} className="front">
                    <h1>Other Skills</h1>
                </div>

                <div onClick={handleClickThree} className="back">
                    <h1>Hi</h1>
                </div>
            </ReactCardFlip>
        </div>
    )
}