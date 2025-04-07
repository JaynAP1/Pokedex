import React from 'react'
import {Buttons} from './buttons';
import { Sprite } from './sprite';


export const Pokedex = () => {
  return (
    <div className='PokedexImg'>
      <div className='boxbuttons'>
        <Buttons/>
        <Buttons/>
      </div>
      <Sprite/>

    </div>
  )
}
