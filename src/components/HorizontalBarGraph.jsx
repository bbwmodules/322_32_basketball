import './HorizontalBarGraph.css'
import React, { useState, useEffect } from 'react';

const HorizontalBarGraph = ({ value, maxvalue, barwidthpx }) => {
    const [barWidth, setBarWidth] = useState(0);

    //in case the value changes, update the bargraph
    useEffect(() => {
        //value shall be >0 and <=maxValue
        const newValue = value > 0 ? (value < maxvalue ? value : maxvalue) : 0;
        const width = (newValue / maxvalue) * barwidthpx;
        setBarWidth(width);
    }, [value]);

    return (
        <div className="bargraph">
            <div className="bar" style={{width: `${barWidth}px`}}></div>
            <div className="value">{value}</div>
        </div>
    )
}

export default HorizontalBarGraph;