/*
React rammeverk

Netflix, Uber, or Twitch

Static site generation & Server side rendering
- Bra SEO
- Prerendering. Raskt!
- Prefetching. Link vs href

Html

Enkelt å forholde seg til ruter. Hver side har en fil i 'pages'


*/
import React from "react"
import {Box} from "../components/StyleComponents"
import Link from "next/link"

const Next = () => {

    return (
        <Box>
            <a href={"/next/child"}>En klassisk lenke til annen side i appen.</a>
            <Link href={"/next/child"}> klikk meg</Link>
        </Box>
    )
}
export default Next;

