import React from "react";
import Pokemon from "./Pokemon";


class App extends React.Component {
  constructor() {
    super();

    // start with one pokemon on screen
    this.state = {pokemonCount: 3}
  }
    
    decreasePokemonCount(currentCount) {
      if (currentCount > 0) {
        this.setState({pokemonCount: currentCount - 1});
      }
    }

    increasePokemonCount(currentCount) {
        this.setState({pokemonCount: currentCount + 1});
    }

  render(){
    return (
      <div>
        <h1>Pokemon page</h1>
        <button onClick={() => {this.decreasePokemonCount(this.state.pokemonCount)}}>Decrease Pokemon count</button>
        <button onClick={() => {this.increasePokemonCount(this.state.pokemonCount)}}>Increase Pokemon count</button>
        {/* <Pokemon /> */}
        {
          //Array(arraySize).fill(defaultValue).map(() => {return JSX})
          Array(this.state.pokemonCount).fill(null).map((element, index) => <Pokemon key={index}/>)
        }
      </div>
    )
    
  }
}

export default App;
