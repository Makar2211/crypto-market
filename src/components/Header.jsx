import React from 'react'
import { Link } from "react-router-dom";
import {appContext} from '../App'

export const Header = ({onClickCard}) => {
  const {cardItems} = React.useContext(appContext)
  const totalPrice = cardItems.reduce((sum, obj) => obj.price + sum, 0)

    return (
        <header>
          <Link to="/"> 
            <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.svg"/>
              <div className="headerInfo">
                <h1>CRYPTO MARKET</h1>
                <p>Магазин лучших кроссовок</p>
              </div>
          </div>
          </Link>

          <div className="headerRight">
            <ul >
              <li onClick={onClickCard} style={{cursor: 'pointer'}}>
              <img width={18} height={18}  src="/img/cart.svg"/>
                <span>{totalPrice} uan.</span>
              </li>
              <li>
                <Link to="/favourites">
                  <img width={18} height={18} src="/img/heart.svg"/>
                </Link>
              
              </li>
              <li>
              <img width={18} height={18} src="/img/user.svg"/>
              </li>
            </ul>
          </div>
      </header>
    )
}