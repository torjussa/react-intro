import React, {useEffect, useState} from "react"
import styled from 'styled-components'

/*
Hvordan henter vi data?

* */


const Fetch = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const fetchItems =  () => {
            setIsLoading(true)
            setIsError(false)
            fetch("api/items")
                .then(r => r.json())
                .then(data => {
                    setItems(data)
                    setIsLoading(false)
                    setIsError(false)
                })
                .catch(e => {
                    console.log(e)
                    setIsLoading(false)
                    setIsError(true)   
                }
                )
     };

    useEffect(() => {
        fetchItems()
     }, []);

    return (
        <div>
          { isLoading ? 
            <div>Loading..</div> 
            : 
            isError ?
                <div>noe gikk galt</div>
                : items.map( i => <Item item={i}/>)}
        </div>)
}
export default Fetch;

const Item = (props) => {
    const {item} = props
    return (
        <ItemWrapper>
            <p>{item.id}</p>
            <p>{item.label}</p>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div
`
display: flex;
justify-content: space-between;
`


