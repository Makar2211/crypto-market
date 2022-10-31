import React, {useState, useEffect} from 'react';

import style from './Card.module.scss'

export const Card = ({id, name, price, imageUrl, onClickPlus, onClickFavourite, favourited = false}) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavourite, setIsFavourite] = useState(favourited)
  const handelClickPlus = () => {
    onClickPlus({name, price, imageUrl})
    setIsAdded(!isAdded)
    
  }
  const handelLike = () => {
    onClickFavourite({id, name, price, imageUrl})
    setIsFavourite(!isFavourite)
  }
  useEffect(() => {
  }, [isAdded])
  return (
        <div className={style.card}>
          <div>
          <img className={style.like} onClick={handelLike}  src={isFavourite ? '/img/heart-like.svg' : '/img/heart-unlike.svg'} alt='like'/> 
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