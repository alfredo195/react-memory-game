import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
    state = {
      characters
    };
  
  
    // Map over this.state.characters and render a characterCard component for each character object
    render() {
      return (
        <Wrapper>
          <Title>Dragon Ball Memory Game</Title>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      );
    }
  }

export default App;
