import React from 'react'
import {appContext} from '../App'

        <img src="/img/basketNull.png" alt="" />
export const Info = ( {image,title, description}) => {
    const {handelOnCard} = React.useContext(appContext)
 
  return (
    <div className="itemsIsNull"> 
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="greenBotton" onClick={() => handelOnCard()}><img src='/img/errow-left.svg'/> Оформить заказ </button>
      </div> 
  )
}
