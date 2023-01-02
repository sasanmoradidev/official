import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Color from "./Color"

export default function Colorlist({
    colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    const Main = () => {
        let o = { x: 1, y: 2, b: () => 'test', c: 4, xc: { xa: 1, xb: 2 }, "salam sasan": 88 };
        let a = ["x", 2, o.b(), 4, 5, (c) => ({ a: c, b: a[2].toUpperCase() })]
        let log = console.log;
        let error = console.error;
        let clear = console.clear;


        let uniqueInteger = (function () {
            let count = 0;
            return function () { return count++; }
        }())


        console.log(uniqueInteger());
        console.log(uniqueInteger());
        console.log(uniqueInteger());

        // function count(n){
        //     return {
        //         get m(){return ++n},
        //         set m(m){if (Number.isInteger(m)) n=m; else error("test")}
        //     }
        // }
        // let val = count(20);
        // log(val.m);
        // log(val.m = "8");
        // log(val.m);
        // log(val.m);


        clear();
        let obj = {
            met: (i) => i + 2
        }
        // Replace the method named m of the object o with a version that logs
        // messages before and after invoking the original method.
        function trace(o, m) {
            let original = o[m]; // Remember original method in the closure.
            o[m] = function (...args) { // Now define the new method.
                console.log(new Date(), "Entering:", m); // Log message.
                let result = original.apply(o, args); // Invoke original.
                console.log(new Date(), "Exiting:", m); // Log message.
                return result; // Return result.
            };
        }
        trace(obj, "met");
        log(obj["met"](10))
    };
    if (!colors.length) return <div>There is no color in the list.</div>
    return (
        <div>
            {
                colors.map(color =>
                    <Color
                        key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                )

            }
            <Main />
        </div>
    );

}