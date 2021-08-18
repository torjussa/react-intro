import React, {useState} from "react";
import styled, {keyframes} from 'styled-components'

/*
Automatic critical css: Styled Components keeps track of which components
are rendered on a page and injects their styles and nothing else, fully automatically.
Combined with code splitting, this means your users load the least amount of code necessary.

    No class name bugs: Styled Components generates unique class names for your styles.
    You never have to worry about duplication, overlap or misspellings.

    Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase.
     Styled Components makes it obvious, as every bit of styling is tied to a specific component.
      If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

    Simple dynamic styling: adapting the styling of a component based on its props or
    a global theme is simple and intuitive without having to manually manage dozens of classes.

    Painless maintenance: you never have to hunt across different files to find the styling
     affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

    Automatic vendor prefixing: write your CSS to the current standard and let Styled Components handle the rest.

    gjenbruk
    state og props
*/


export const StyledComponents = () => {
  return <My color={"red"}>this ia a para</My>

}


export const My = styled.p`
background-color: ${p => p.color};
height: 200px;
width: 200px;


`












const rotate = keyframes`
  from {
  transform: rotate(0deg)
  }
  to {
  transform: rotate(360deg)
  }
`
export const Rotate = styled.div`
display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;

`





/*
const Button = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  min-width: 150px;
  margin-left: 20px;
  
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const getRandomColor = () =>  "#" + ((1<<24)*Math.random() | 0).toString(16)*/
