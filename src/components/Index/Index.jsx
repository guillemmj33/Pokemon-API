import React, { useEffect, useState } from 'react';
import './Index.scss';
import pokemonLogo from '../../assets/Images/pokemonLogo.png';
import { allPokemons } from '../../functions/functions';

const Index = () => {

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    allPokemons(setPokemons);
  }, [])
  
  return (
    <div className="container">
      <img src={pokemonLogo} className="pokemon--logo" alt="pokemon logo" />
      <div className="pokedex--box">
          {pokemons != null ? (
            pokemons.map(pokemon => (
              <div key={pokemon.id} className="pokeCard">
                <div className="pokeCard--box">
                  <a href={`/character/${pokemon.name}`}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png`} alt="Pokemon" />
                  <h3>{pokemon.name}</h3>
                  </a>
                </div>
              </div>
            ))
          ) : ('Oups! There are no pokemons')}
      </div>
      <div className="btn--box">
        <button className="btnPrev">Prev</button>
        <button className="btnNext">Next</button>
      </div>
    </div>
  )
};

export default Index;