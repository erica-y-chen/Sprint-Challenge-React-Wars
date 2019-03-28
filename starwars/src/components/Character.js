import React, { Component } from 'react';
import './StarWars.css';
import moment from 'moment';

const Character = (props) => {
    return (
        <div className="characterStyle">

            <div class="information">
                <h1>{props.char.name}</h1>
                <h3>{moment(props.char.created).format('dddd MMM D, YYYY')}</h3>
                <h2>{props.char.gender}</h2>
     
            </div>
        </div>
    ) 

}

export default Character; 

