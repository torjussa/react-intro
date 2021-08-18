import React, {useState} from 'react'
import {ChildComponent} from "../components/ChildComponent"
import {Box} from "../components/StyleComponents"


/*
* Props, eller properties handler om å sende data mellom componenter.
*
* Vi kan sende både data og funskjoner nedover i treet.
*
* Vi kan mappe props.
*
* endre state i Child
*
*
*
*  */

const Props = () => {
    const [counter, setCounter] = useState(0)

    return <div onClick={() => setCounter(counter+1) }>{counter}</div>
       
    

}

export default Props;

