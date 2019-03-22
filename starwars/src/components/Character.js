import React, { Component } from 'react';
import './StarWars.css';



const Character = (props) => {
    return (
        <div className="characterStyle">
            <h1>{props.char.name}</h1>
        </div>
    ) 

}

export default Character; 

