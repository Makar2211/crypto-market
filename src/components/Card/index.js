import React from 'react';
import style from './Card.module.scss'

export const Card = ({name, price, imageUrl}) => {
  const clickOnPlus =  () => {
    return alert(name)
  }
  return (
        <div className={style.card}>
          <div>
          <img className={style.like}  src='/img/heart-like.svg'/> 
          </div>
          <img className={style.img} width={133} height={112} src={imageUrl}/>
          <p>{name}</p>
          <div className={style.external}>
            <div className={style.inside}>
              <span>Цена:</span><br/>
              <b>{price} uan.</b>
            </div>
            <button  onClick={clickOnPlus}>
              <img  width={11} height={11}src="/img/plus.svg" /> 
            </button>
          </div>
        </div>  
    )
}