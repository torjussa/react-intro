import React, {useEffect, useState} from 'react'

export const Hooks = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = "Hello " + counter
    }, [counter])

    return(
        <div className="App">
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1) }> knapp</button>
        </div>
    )

}
export  class NoHooks extends React.Component {
    constructor(){
        super({});
        this.state = {
            counter: 0
        }
    }
    render(){
    return(
        <div className="App">
            <p>{this.state.counter}</p>
            <button onClick={() => this.setState(prevState => ({counter: prevState.counter + 1}))}> knapp</button>
        </div>
    );
}}






/*
Introdusert med react 16.8  høsten 2019(?)
Med hooks trenger man ikke lenger å bruke klasser for å kunne holde en internal state.
Dette er det mest spennende med hooks.Hooks har potensialet til å erstatte klasser i de aller fleste tilfeller.
Klasser er forvirrende både for maskin og menneske, når skal man bruke funksjoner, når skal man bruke klasser.
Hva krever at man bruker this.

Med klasser er deling av stateful logikk vanskelig. => Custom hooks

useEffects kan minne om component has mounted, og lar oss utføre side effects etter en komponent har rendret

*   const [count, setCount] = useState(0);
    const [text, setText] = useState("Animal");
    useEffect(() => {
            document.title = text;
            console.log("Changed text")
        },[text]
    );

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.input.value);
    };


    return(
        <div className="App">
            <p>{count}</p>
            <button onClick={() => setCount(count +1)}>Increment by one</button>
            <button onClick={() => setCount(count**2)}>Square</button>
            <p>{text}</p>
            <form onSubmit={handleChange}>
                <input id="input"/>
                <button>ok</button>
            </form>
        </div>
    );
    *
    * */