import React from 'react';

const Character = (props) => {
    return (
    <div>
        <h2>Name: {props.name}</h2>
        <p>Birth Year : {props.birth_year}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Skin color: {props.skin_color}</p>
        <p>Hair color: {props.hair_color}</p>
        <p>Eye color: {props.eye_color}</p>
    </div>)
}

export default Character;