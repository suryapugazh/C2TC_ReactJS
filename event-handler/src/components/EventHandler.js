import React, { useState } from 'react'

const EventHandler = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [colour, setColour] = useState('green');

    function handleCount(){
        setCount(count + 1);
    }

    function handleHover(){
        setColour("red");
    }

  return (
    <>
    <h2>Button click event handler with Seperate Function</h2>
    <button onClick={handleCount}> Click to count: {count}</button>
    <br />

    <h2>Mouse hover event hanfler with Arrow function</h2>
    <button style={{color: colour}} onMouseOver={handleHover} onMouseOut={() => setColour("green")}>Hover to change color</button>
    <br />

    <h2>On change event handler with input and Inline function</h2>
    <input type='text' placeholder="Type Here" onChange={(e) => setText(e.target.value)}/>
    <h3>Text you typing: {text}</h3>
    <br />

    <h2>Onclick event handler with passing arguments</h2>
    <button onClick={() => alert(`Hello, ${text || "User"}!`)}>Greet</button>
    </>
  )
}

export default EventHandler