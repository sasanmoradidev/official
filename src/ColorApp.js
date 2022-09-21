import React, { useState } from "react";
import Colordata from "./data/color-data.json";
import Colorlist from "./components/Colorlist";

const ColorApp = () => {
    const [colors, setColors] = useState(Colordata);
    return <Colorlist
        colors={colors}
        onRateColor={(id, rating) => {
            const newColors = colors.map( color =>
                color.id === id ? { ...color, rating } : color
            );
            setColors(newColors);
        }}
        onRemoveColor={id => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors);
        }}
    />
}
export default ColorApp;