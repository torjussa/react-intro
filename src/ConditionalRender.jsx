import React, {useEffect} from 'react'


export const ConditionalRender = () => {
    const shouldShow = false
    const [isLoading, setIsLoading] = true

    useEffect(() => {
        setTimeout(setIsLoading(false), 400)
    }, []);

    return isLoading ?  <div> loading..</div>: <div>Dette vil jeg egentlig vise</div>
}