import React, {useState, useEffect} from 'react';

import style from './Card.module.scss'

export const Card = ({name, price, imageUrl, onClickPlus, onClickFavourite}) => {
  const [isAdded, setIsAdded] = useState(false)
  const handelClickPlus = () => {
    onClickPlus({name, price, imageUrl})
    setIsAdded(!isAdded)
  }
  useEffect(() => {
    /* console.log('return') */
  }, [isAdded])
  return (
        <div className={style.card}>
          <div>
          <img className={style.like} onClick={onClickFavourite}  src='/img/heart-like.svg'/> 
          </div>
          <img className={style.img} width={133} height={112} src={imageUrl}/>
          <p>{name}</p>
          <div className={style.external}>
            <div className={style.inside}>
              <span>Цена:</span><br/>
              <b>{price} uan.</b>
            </div>
            <img className={style.img_bot} onClick={handelClickPlus} src={isAdded === true ? '/img/added-to-card.svg' : '/img/plus.svg'} /> 
          </div>
        </div>  
    )
}