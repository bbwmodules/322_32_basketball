export default function Team({label, name, handleChange, labelp, disabled, points, setPoints, setHistory}) {

    function onClickButtonEvent(e) {
        const value = Math.floor(Math.random() * 3) + 1;
        setHistory(name + " throw " + value + " points");
        setPoints(points + value, name);
    }

    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                value={name}
                onChange={(e) => handleChange(e)}
            />
            <label>{labelp}</label>
            <input
                type="number"
                value={points}
                readOnly
            />
            <input type="button"
                   value="Throw"
                   disabled = {(disabled)? "disabled" : ""}
                   onClick = { () => onClickButtonEvent() } />
        </>
    )
}
