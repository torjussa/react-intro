import React, {useState} from 'react';
import {Box} from "../components/StyleComponents"

const Form = () => {

    return (
        <Box>

        </Box>
    )
}
export default Form;


/*
Fra submitting til controlled components.

I HTML vil elementene i seg selv typisk holde state, mens i React vil vi heller holde det i komponentens state. (Single source of truth)

Vi vil holde input feltet og staten lik.

Submit
prev default

 */


/*
const Form = () =>  {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Submitting" + name )
    }

    const handleChange = (evt) => {
        console.log(evt.target.value)
        setName(evt.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default Form
* */