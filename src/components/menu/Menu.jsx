import React from 'react'
import style from './Menu.module.scss'
import { Link } from "react-router-dom";
import { useCard } from '../../hooks/useCard';

export const Menu = ({header, handelMenu, onClickCard}) => {
  const { totalPrice, handelOnCard} = useCard()
  return (
    <div className={style.menu}>
        <div className={style.blur}>
            <div className={style.menu__content}>
            <div onClick={handelMenu} ><img className={style.minus} src="/img/btn-remove.svg"/> </div>
            <div className={style.menu__header}>{header}</div>
                <div className="menu">
                <ul >
                <li onClick={() => {handelMenu(); onClickCard()}} style={{cursor: 'pointer'}}>
                    
                <img width={18} height={18}  src="/img/cart.svg"/>
                    <span style={{"marginLeft": 10 }}>Корзина</span>
                    <span>{totalPrice} $</span>
                </li>
                <li>
                    <Link to="/favourites" onClick={handelMenu}>
                    <img width={18} height={18} src="/img/heart.svg"/>
                    <span style={{"marginLeft": 10 }}>Закладки</span>
                    </Link>
                
                </li>
                <li onClick={handelMenu}>
                <Link to="/orders" >
                <img width={18} height={18} src="/img/user.svg"/>
                 <span style={{"marginLeft": 10 }}>Ордера</span>
                </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>        
    </div>
  )
}
