import React from 'react'
import { Link } from "react-router-dom";
import { useCard } from '../hooks/useCard';
import { Menu } from './menu/Menu';

export const Header = ({onClickCard}) => {
  const [menuActive, setMenuActive] = React.useState(false)
  const { totalPrice  } = useCard()

  const handelMenu = () => {
    setMenuActive(!menuActive)

  }

    return (
        <header >
          <Link to="/"> 
            <div className="headerLeft">
            <img width={40} height={40} src="/img/Logo.svg"/>
              <div className="headerInfo">
                <h1>CRYPTO MARKET</h1>
                <p>Покупайте криптовалюту у нас</p>
              </div>
          </div>
          </Link>

          <div className="headerRight">
            <ul >
                <li onClick={onClickCard} style={{cursor: 'pointer'}}>
                <img width={18} height={18}  src="/img/cart.svg"/>
                  <span>{totalPrice} $</span>
                </li>
              <li>
                <Link to="/favourites">
                  <img width={18} height={18} src="/img/heart.svg"/>
                </Link>
              
              </li>
              <li>
             <Link to="/orders">
             <img width={18} height={18} src="/img/user.svg"/>
             </Link>
              </li>
            </ul>
          </div>

          <div className="burder_btn" onClick={handelMenu}>
              <span></span>
            </div>
            

          {menuActive === true ? <Menu onClickCard={onClickCard} handelMenu={handelMenu}  header={'Menu'} /> : null}
      </header>
    )
}