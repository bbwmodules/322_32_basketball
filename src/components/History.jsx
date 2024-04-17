import court from "../Court.jpg"

export default function History({history, onReset}) {

    return (
        <>
            <img src={court} width="400" alt="Basketballfeld"/>
            <label>History</label>

            <ul>{history.map((value, index) => <li key={index}>{value}</li>)} </ul>

            <input type="button" value="reset" onClick={() => onReset()}/>
        </>
    )
}
