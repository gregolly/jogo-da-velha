import React from 'react'
import playerX from '../../image/X.png'
import playerO from '../../image/Circle.png'
import './styles.css'

function Player({ player }) {
  const players = []
  players['x'] = playerX
  players['o'] = playerO

  return (
    <button className="player">
      <img 
      src={players[player]} 
      alt={`Jogador X ${player.toUpperCase()}`}/>
    </button>
  )
}

export default Player
