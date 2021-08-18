import React from 'react';
import {Box} from "./StyleComponents"


export const ReactComponent = () => {
    return (
        <>
            <Box>
                <Box>Hello React</Box>
                <Box>Hello React</Box>
            </Box>
            <Box>
                Hello
                <Box>More stuff</Box>
            </Box>
        </>
    )

};

const MyComponent = () => <div> comp</div>

function fc () {
    return <p>Hello</p>
}

/*

Hva er React - JS bibliotek for å lage brukergrensesnitt.
Det hjelper oss å bygge komplekse frontendløsninger med små kdoeblokker som vi kaller komponenter.

Xml tags bestemmer hva vi skal se. Hva er markup? Hva er det som vises, hva er det som er logikk-kode
Når dataen vår endres hjelper React oss til å automatisk endre UI et



It's like XML that gets translated to React.createElement() calls.

JSX må ha én parent

Dynamiske verdier i templates, ulike variabler, ikke objekter

Arrow functions eller ikke er valgfritt


// Vanilla
// const Foo = (props) => React.createElement("div", props, props.children);
// const Bar = (props) => React.createElement(Foo, props, <div>child</div>);

// class Foo extends React.Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

//  JSX
// const Foo = (props) => <div>{props.children}</div>;
// const Bar = (props) => (
//   <Foo>
//     <div>child</div>
//   </Foo>
// );

*/
