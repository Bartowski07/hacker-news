import React, { useState, useEffect } from "react";

function Article() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
  }, []);

  return (
    <div>
      <ol>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <h4>{pokemon.name}</h4>
            <h4>{pokemon.url}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Article;
