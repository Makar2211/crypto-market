import React from 'react'

export const Header = () => {
    return (
        <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg"/>
            <div className="headerInfo">
              <h1>REACT SNEAKERS</h1>
              <p>Магазин лучших кроссовок</p>
            </div>
        </div>

          <div className="headerRight">
            <ul >
              <li>
              <img width={18} height={18} src="/img/cart.svg"/>
                <span>1205 uan.</span>
              </li>
              <li>
              <img width={18} height={18} src="/img/heart.svg"/>
              </li>
              <li>
              <img width={18} height={18} src="/img/user.svg"/>
              </li>
            </ul>
          </div>
      </header>
    )
}