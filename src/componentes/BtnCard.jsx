import React from 'react'
import App from '../App'
import colors from '../utils/colors'
import CardUsers from './CardUsers'



const BtnCard = ({ getRandomAll, objectBgStyle}) => {



    
  return (
    <button onClick={getRandomAll} className='card_btn' style={objectBgStyle}><i class="fa-solid fa-dice"></i></button>
  )
}

export default BtnCard