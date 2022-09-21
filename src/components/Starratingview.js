import React from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({ selected = false, onSelect = f => f }) => (
    <AiFillStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
const createarray = length => [...Array(length)];
export default function Starratingview({
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f
}) {

    return (
        <>
            {createarray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>selected {selectedStars} of {totalStars} stars.</p>
        </>
    );
}