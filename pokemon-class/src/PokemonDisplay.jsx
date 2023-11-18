import React from "react";

export default class PokemonDisplay {
    constructor(props) {
        super(props);

        this.state = {
            pokemonName: null
        }
    }

    render() {
        return(
            <h2>Pokemon Name</h2>
        )
    }
}