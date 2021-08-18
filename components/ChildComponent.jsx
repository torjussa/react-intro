import React from "react"
import {Box} from "./StyleComponents"
import {Link} from "./Link"

export const ChildComponent = props => {

    const {fruits, food, vegetable, squaringFunction} = props

    

    return (
        <Box>
            {squaringFunction(9)}
        </Box>
    )


}

const Fruit = props => <Box>{props.fruit}</Box>