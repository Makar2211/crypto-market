import React from 'react'
import { Card } from '../components/Card'
import {appContext} from '../App'
import { Link } from "react-router-dom";
export const Favourites = () => {

  const {favourites, onAddToFafourite} = React.useContext(appContext)

  return (
        <div className="content">
        {
          favourites.length > 0 ? (
           <>
            <div className='header'>
          <h2 >Мои закладки</h2>
          
           
        </div>

      <div className="cards">
      {favourites.map((item, index) => {
            return <Card 
              key={index}
              favourited={true}
              onClickFavourite={onAddToFafourite}
              {...item}
            />
        })}
      </div></>
          )  : (
            <div className='fafouriteIsNull'>
              <div className='center'>
                <h2>Закладок нет :(</h2>
                <p>Вы ничего не добавляли в закладки</p>
                <Link to='/'>
                <button  className="greenBotton">Оформить заказ <img src='/img/errow-left.svg'/></button>
                </Link>
              </div>
            </div>
          )
        }
    </div>
  )
}
