import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import TheForce from './components/theForce';
import Character from './components/characters';



const AppDiv = styled.div `
  font-family:sans-serif;
  text-align:center
`;
const Header1Style = styled.h1 `
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,setcharacters] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data)
        setcharacters(res.data.results)
      })
      .catch(err => console.log(err))
    },[])

  return (
    <AppDiv>
      <Header1Style className="Header">React Wars</Header1Style>
    
    
    <div style={{display:'flex', flexWrap:'wrap'}}>{characters.map(characters => ( 
        <TheForce type='theForce' key={characters.name}>
        <Character
          name={characters.name}
          birth_year={characters.birth_year}
          gender={characters.gender}
          height={characters.height}
          skin_color={characters.skin_color}
          hair_color={characters.hair_color}
          eye_color={characters.eye_color}/>
        </TheForce>))}</div>
    </AppDiv>)
}

export default App;
