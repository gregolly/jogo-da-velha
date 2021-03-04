import React from 'react'
import Card from './objects/Card/index'
import Player from './objects/Player'
import Header from './components/Header'



function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="o" />
        <Player player="x" />
        <Player player="x" />

        <Player player="o" />
        <Player player="x" />
        <Player player="0" />

        <Player player="x" />
        <Player player="0" />
        <Player player="x" />
      </Card>
      
    </>
  )
}

export default App
