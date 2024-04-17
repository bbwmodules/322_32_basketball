//import {useState} from "react";

import HorizontalBarGraph from "./HorizontalBarGraph.jsx";

export default function Team({label, name, setName, points, setPoints, disabled}) {

    //const [points, setPoints] = useState(0);
    //const [name, setName] = useState("");

    function onClickButtonEvent(e) {
        const value = Math.floor(Math.random() * 4);
        setPoints(points + value);
    }

    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value)
                }}
            />
            <label>Points</label>
            <input
                type="number"
                value={points}
                readOnly
            />
            <input type="button"
                   value="Throw"
                   disabled={(disabled) ? "disabled" : ""}
                   onClick={() => onClickButtonEvent()}/>
            <HorizontalBarGraph
                value={points}
                maxvalue={12}
                barwidthpx={200}
            />
        </>
    )
}
