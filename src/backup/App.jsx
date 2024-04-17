import {useState} from 'react'
import './mvp.css'
import Team from "./components/Team.jsx";
import History from "./components/History.jsx";

function App() {
    const [values, setValues] = useState({
        guestName: "Tigers",
        guestPoints: 0,
        guestDisabled: false,
        homeName: "Eagles",
        homePoints: 0,
        homeDisabled: true,
        history: ['Game starts']
    })

    const onReset = (event) => {
        setValues(values => ({...values,
            guestPoints: 0,
            homePoints: 0,
            guestDisabled: false,
            homeDisabled: true,
            history: ['New Game']}));
    }

    const onAddPoints = (newPoints, name) => {
        if (name == values.homeName){
            setValues(values => ({...values,
                homePoints: newPoints,
                guestDisabled: !values.guestDisabled,
                homeDisabled: !values.homeDisabled
            }));
        }else{
            setValues(values => ({...values,
                guestPoints: newPoints,
                guestDisabled: !values.guestDisabled,
                homeDisabled: !values.homeDisabled
            }));
        }

        if(newPoints >= 12){
            setValues(values => ({...values,
                history: [...values.history, name + ' win'],
                guestDisabled: true,
                homeDisabled: true
            }))
        }
    }

    return (
        <>
            <h1>Basketball</h1>
            <section>
                <aside>
                    <Team
                        name={values.guestName}
                        label="Guest-Team"
                        handleChange={e => {setValues(values => ({...values, guestName: e.target.value}))}}
                        points={values.guestPoints}
                        labelp="Guest-Points"
                        disabled={values.guestDisabled}
                        setPoints = {onAddPoints}
                        setHistory={addHistory => {setValues(values => ({...values, history: [...values.history, addHistory]}))}}
                    />
                </aside>
                <aside>
                    <History
                        label="History"
                        history={values.history}
                        reset = {onReset}
                    />
                </aside>
                <aside>
                    <Team
                        name={values.homeName}
                        label="Home-Team"
                        handleChange={e => {setValues(values => ({...values, homeName: e.target.value}))}}
                        points={values.homePoints}
                        labelp="Home-Points"
                        disabled={values.homeDisabled}
                        setHistory={addHistory => {setValues(values => ({...values, history: [...values.history, addHistory]}))}}
                        setPoints = {onAddPoints}
                        setHistory={addHistory => {setValues(values => ({...values, history: [...values.history, addHistory]}))}}
                    />
                </aside>
            </section>
        </>
    )
}

export default App
