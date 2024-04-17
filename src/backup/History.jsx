import court from "../Court.jpg"

export default function History({label, history, reset}) {

    return (
        <>
            <img src={court} width="400" alt="Basketballfeld"/>
            <label>{label}</label>
            {/* eslint-disable-next-line react/prop-types */}
            <ul >{history.map((value, index) => <li key={index}>{value}</li>)} </ul>
            <input type="button" value="reset" onClick = { () => reset() } />
        </>
    )
}
