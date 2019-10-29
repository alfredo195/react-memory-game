import React, { Component } from "react";
import NavBar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
    state = {
      characters,
      count: 0,
      high: 0
    };

    handleIncrement = (cardId) => {
      this.state.characters.find((character, el) => {
        if (character.id === cardId) {
          if (characters[el].chosen === false) {
            this.setState({ count: this.state.count + 1 });
            characters[el].chosen = true;
            this.shuffleCharacters(characters);
            return true;
          }
          else {
            this.newGame();
          }
        }
      });
    };


    shuffleCharacters = array => {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    newGame = () => {
      if (this.state.high < this.state.count) {
        this.setState({ high: this.state.count })
      }
      this.state.characters.forEach(character => character.chosen = false)
      this.setState({ count: 0 });
      return true;
    }
  
  
    // Map over this.state.characters and render a characterCard component for each character object
    render() {
      return (
        <Wrapper>
          <NavBar />
          <div>count={this.state.count} high={this.state.high}</div>
          <Title>Dragon Ball Memory Game</Title>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </Wrapper>
      );
    }
  }

export default App;
