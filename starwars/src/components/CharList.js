import React, { Component } from 'react';
import './StarWars.css';
import Character from './Character.js';
import starwarsChars from '../App';


function CharList (props) {

    return (
        <div className = "characters">
            {props.char.map(characters => (
                <Character 
                char={characters} 
                created={characters.created}
                name={characters.name} 
                gender={characters.gender}

                />
            ))}
        </div>
    )
    return (null);
}

export default CharList;

