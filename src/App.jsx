import './mvp.css'
import Team from "./components/Team.jsx";
import History from "./components/History.jsx";
import {useState} from "react";

function App() {
    const [guestName, setGuestName] = useState("eagles");
    const [homeName, setHomeName] = useState("wasps");
    const [guestPoints, setGuestPoints] = useState(0);
    const [homePoints, setHomePoints] = useState(0);
    const [guestDisabled, setGuestDisabled] = useState(false);
    const [homeDisabled, setHomeDisabled] = useState(true);

    //Array of history texts
    const [history, setHistory] = useState(['Game starts']);

    const onAddHomePoints = (newPoints) => {
        setHomePoints(newPoints);
        history.push("Home throws, new points: " + newPoints);
        setHomeDisabled(true);
        if(newPoints >= 12){
            history.push("Home wins");
        } else {
            setGuestDisabled(false);
        }
    }

    const onAddGuestPoints = (newPoints) => {
        setGuestPoints(newPoints);
        history.push("Guests throws, new points: " + newPoints);
        setGuestDisabled(true);
        if(newPoints >= 12){
            history.push("Guest wins");
        }else{
            setHomeDisabled(false);
        }
    }

    const onReset = () => {
        setGuestPoints(0);
        setHomePoints(0)
        setHistory(["new Game"]);
        setGuestDisabled(false);
    }

    return (
        <>
            <h1>Basketball</h1>
            <section>
                <aside>
                    <Team
                        label="Home team"
                        name={homeName}
                        setName={setHomeName}
                        points={homePoints}
                        setPoints={onAddHomePoints}
                        disabled={homeDisabled}
                    />
                </aside>
                <aside>
                    <History
                        history={history}
                        onReset={onReset}
                    />
                </aside>
                <aside>
                    <Team
                        label="Guest team"
                        name={guestName}
                        setName={setGuestName}
                        points={guestPoints}
                        setPoints={onAddGuestPoints}
                        disabled={guestDisabled}
                    />
                </aside>
            </section>
        </>
    )
}

export default App
