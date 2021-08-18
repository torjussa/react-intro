import React, {useEffect, useState} from 'react'
import { Box } from '../components/StyleComponents'


/*
* Handler om å bestemme hva du skal vise gitt conditions.
*
* Kan gjøres med tradisjonell if/else eller in line if setninger.
*
*
* */
const ConditionalRender = () => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000)
    }, []);

    const getLoading = () => isLoading 
        ? <div>dloading--</div>
        : <div>det vi skulle vise</div>
        
    
    

    return getLoading()
    
}
export default ConditionalRender;



/*

const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
}, []);
*/
