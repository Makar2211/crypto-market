import React, {useState} from 'react';
import {appContext} from '../../App'

import ContentLoader from "react-content-loader"
import style from './Card.module.scss'

export const Card = ({id, name, price, imageUrl, onClickPlus, onClickFavourite, favourited = false ,   loading = false}) => {
  const {isItemAdded} = React.useContext(appContext)
  const [isFavourite, setIsFavourite] = useState(favourited)
  const obj = {id, parentId: id, name, price, imageUrl}


  const handelClickPlus = () => {
    onClickPlus(obj)
    
  }
  const handelLike = () => {
    onClickFavourite(obj)
    setIsFavourite(!isFavourite)
  }

  return (
        <div className={style.card}>
          {
            loading ? (<ContentLoader 
              speed={2}
              width={230}
              height={200}
              viewBox="0 0 230 205"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="30" y="30" rx="0" ry="0" width="150" height="89" /> 
              <rect x="30" y="109" rx="5" ry="5" width="150" height="15" /> 
              <rect x="30" y="136" rx="0" ry="0" width="100" height="15" /> 
              <rect x="30" y="181" rx="17" ry="17" width="80" height="24" /> 
              <rect x="140" y="174" rx="10" ry="10" width="32" height="32" /> 
              <rect x="30" y="158" rx="0" ry="0" width="83" height="15" />
            </ContentLoader>) : (
              <>
                <div>
                 {
                  onClickFavourite && 
                   <img className={style.like} onClick={handelLike}  src={isFavourite ? '/img/heart-like.svg' : '/img/heart-unlike.svg'} alt='like'/> 
                 }
                  </div>
                    <img className={style.img} width={133} height={112} src={imageUrl}/>
                  <p>{name}</p>
                  <div className={style.external}>
                    <div className={style.inside}>
                      <span>Цена:</span><br/>
                      <b>{price} $</b>
                    </div>
                    {
                      onClickPlus &&
                      <img className={style.img_bot} onClick={handelClickPlus} src={isItemAdded(id)  ? '/img/added-to-card.svg' : '/img/plus.svg'} /> 
                    }
              </div>            
               </>
            )
          }
          
        </div>  
    )
}