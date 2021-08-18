import '../styles/index.css';
import '../styles/App.css';
import React from "react"
import Head from "next/head"

function MyApp({Component, pageProps}) {
    return (
        <div className="App">
            <Head>
                <title>React - Bredvid</title>
            </Head>
            <header className="App-header">
                <Component {...pageProps} />
            </header>
        </div>
    )
}

export default MyApp