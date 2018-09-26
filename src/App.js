import React, { Component } from 'react';
import './App.css';
import Who from "./who.json";
import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    message: "Click a tile to begin the game!",
    Score: 0,
    TopScore: 0,
    Who: Who,
    unselectedWho: Who
  }


  shuffle = array => {
    for (let i = array.length -1; i > 0; i --) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = id => { 
    const findItem = this.state.unselectedWho.find(item => item.id === id);

    if (findItem === undefined) {
      this.setState({
        message: "Sorry, incorrect!",
        TopScore: (this.state.Score > this.state.TopScore) ? this.state.Score : this.state.TopScore,
        Score: 0,
        Who: Who,
        unselectedWho: Who
      });
    } else {
      const newWho = this.state.unselectedWho.filter(item => item.id !== id)

      this.setState({
        message: "Good Guess!",
        Score: this.state.Score + 1,
        Who: Who,
        unselectedWho: newWho
      });
    }
    this.shuffle(Who);
  }

  render() {
    return(
      <Wrapper>
      <Title 
      Score={this.state.Score}
      TopScore={this.state.TopScore}
      message={this.state.message}
      />
      {this.state.Who.map(who => (
        <Tile 
        name={who.name}
        image={who.image}
        id={who.id}
        handleClick={this.handleClick}
        />
      ))}
      </Wrapper>
    )
  }
}

export default App;
