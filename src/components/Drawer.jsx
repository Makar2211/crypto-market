import React from 'react'

export const Drawer = ({onClickCard, items = []}) => {
  return (
<div className="overrlay">  
    <div className="drawer">
   
        <div className="cartTop">
        <div><h2>Корзина</h2></div>
        <div onClick={onClickCard}><img className="minus" src="/img/btn-remove.svg"/> </div>
        </div>

      <div className="items">
      {
        items.map(obj => (
          <>
              <div className="cartItem">
                  <img className="soker" src={obj.imageUrl} alt='sneakers'/>
                  <div style={{paddingLeft: 20}}>
                    <p>{obj.name}</p>
                    <b>{obj.price} uan.</b>
                  </div>
                    
                  <img className="minus" src="/img/btn-remove.svg"/> 
          </div>
          
      </>
        ))
      }


      
      
    </div>

        <div className="footerDrawer">
        <ul >
            <li className="footerDrawerLi">
            <span>Итого </span>
            <div> </div>
            <b>21 498 uan.</b>
            </li>
            <li className="footerDrawerLi"> 
            <span>Налог 5%</span>
            <div></div>
            <b>1074 uan.</b>
            </li>
        </ul>
        <button className="greenBotton">Оформить заказ <img src='/img/errow.svg'/></button>
        </div>
    </div>
</div>
  )
}
