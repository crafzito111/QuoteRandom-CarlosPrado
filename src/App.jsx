import { useState } from 'react'
import './App.css'
import users from './json/users.json'
import CardUsers from './componentes/CardUsers'
import colors from './utils/colors'



function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

 let userRandom = getRandomElement(users)
  let coloRandom = getRandomElement(colors)


  const [randomUser, setrandomUser] = useState(userRandom)
 const [randomColors, setrandomColors] = useState(coloRandom)

const objStyle = {
  backgroundColor: randomColors
}

  const objectBgStyle = {
    backgroundColor: randomColors
  }

const getRandomAll = () => {

  userRandom = getRandomElement(users)
   coloRandom = getRandomElement(colors)

  setrandomUser(userRandom)
  setrandomColors(coloRandom)
}


  return (
    <div className="App" style={objStyle}>
      <CardUsers randomUser={randomUser} randomColors={randomColors} getRandomAll={getRandomAll} objectBgStyle={objectBgStyle}/>
      
    </div>
  )
}

export default App
