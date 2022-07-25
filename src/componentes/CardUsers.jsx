import React from 'react'
import BtnCard from './BtnCard'




const CardUsers = ({ randomUser, randomColors, objStyle, getRandomAll,  }) => {

  const objectStyle = {
    color: randomColors
  }



  return (
    <article className="card" style={objectStyle}>
      
      <div className="card_container">
        <h2 className='card_quote'>{`${randomUser.quote}`}</h2>
        <p className='card_item'><b>Author: </b>{randomUser.author}</p>
        <BtnCard objStyle={objStyle} getRandomAll={getRandomAll}  />
      </div>
   </article>
  )
}

export default CardUsers