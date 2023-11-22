import React from "react";

export default class Pokemon extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemonData: {}
        }
    }

    async componentDidMount() {
        let randomPokemonNumber = Math.floor(Math.random() * 151);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
        let data = await response.json();

        this.setState({pokemonData: data})
    }

    render() {
        return this.state.pokemonData.name ?
            (
                <div>
                    <h1>{this.state.pokemonData.name}</h1>
                    <img src={this.state.pokemonData.sprites.front_default} alt="Pokemon random"></img>
                </div>
            )
            :
            (
                <div>
                    <h1>Loading... </h1>
                </div>
            )
    }
}

