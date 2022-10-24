import React from 'react'

export const Drawer = () => {
  return (
<div style={{display: "block"}} className="overrlay">  
    <div className="drawer">
   
        <div className="cartTop">
        <div><h2>Корзина</h2></div>
        <div><img className="minus" src="/img/btn-remove.svg"/> </div>
        </div>

      <div className="items">
      <div className="cartItem">
        <img className="soker" src="/img/sneaker1.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Blazer Mid Suede</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>

      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>

      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>


      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>


      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>


      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>

      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>

      <div className="cartItem">
        <img className="soker" src="/img/sneaker2.jpg" alt='sneakers'/>
        <div>
          <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
          <b>12 999 uan.</b>
        </div>
          
        <img className="minus" src="/img/btn-remove.svg"/> 
      </div>

      
      
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
