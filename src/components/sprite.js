import React, { useEffect, useState } from 'react';
import { getPokemon } from '../services/api';


export const Sprite = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
      getPokemon().then(setPokemon);
    }, []);

  return (
    <div>
        {pokemon ? (
            <>
            <h2>{pokemon.name}</h2>
            </>
        ):(
            <p>Cargando pokemon...</p>
        )}
    </div>
  );
};
