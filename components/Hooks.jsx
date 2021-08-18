import React, {useEffect, useState} from 'react'


const Hooks = () => {
    const [count, setCount] = useState(0);
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
}