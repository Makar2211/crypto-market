import React, {useState} from 'react'
import { Info } from './Info'
import axios from 'axios'

import { useCard } from '../hooks/useCard'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const Drawer = ({onClickCard,onRemove,  items = [], opened}) => {
  const {cardItems, setCardItems, totalPrice} = useCard()
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplited, setIsOrderComplited] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  
  
  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://635934bbff3d7bddb99be8d1.mockapi.io/orders', {
        items: cardItems,
      })
      
      setOrderId(data.id)
      setIsOrderComplited(true)
      setCardItems([])

      for(let i = 0; i < cardItems.length; i++) {
        const item = cardItems[i]
        await axios.delete('https://635934bbff3d7bddb99be8d1.mockapi.io/card/' + item.id)
        await delay(1000)
      }
    
      
    } catch (error) {
      console.error('Ошибка при создании заказа')
    }
    setIsLoading(false)
  }
  return (
<div className="overrlay">  
    <div className="drawer">
   
        <div className="cartTop">
        <div><h2>Корзина</h2></div>
        <div onClick={onClickCard}><img className="minus" src="/img/btn-remove.svg"/> </div>
        </div>

        {
          items.length > 0 ?  (<>
              <div className="items">
          {
            items.map(obj => (
              <div key={obj.id}>
                  <div className="cartItem">
                      <img className="soker" src={obj.imageUrl} alt='sneakers'/>
                      <div style={{paddingLeft: 20}}>
                        <p>{obj.name}</p>
                        <b>{obj.price} $</b>
                      </div>
                        
                      <img onClick={() => onRemove(obj.id)}  className="minus" src="/img/btn-remove.svg"/> 
              </div>

              
              
          </div>
            ))
          }
        </div>
        <div className="footerDrawer">
        <ul >
            <li className="footerDrawerLi">
            <span>Итого </span>
            <div> </div>
            <b>{totalPrice} $</b>
            </li>
            <li className="footerDrawerLi"> 
            <span>Налог 5%</span>
            <div></div>
            <b>{Math.floor(totalPrice * 0.05)} $</b>
            </li>
        </ul>
        <button disabled={isLoading} onClick={onClickOrder} className="greenBotton">Оформить заказ <img src='/img/errow.svg'/></button>
        </div>           
      </>) : (
      <Info 
        title={isOrderComplited ? 'Заказ оформлен!'  : 'Корзина пустая'} 
        description={isOrderComplited ? `Ваш заказ #${orderId} успешно оформлен` : 'Добавьте хотя бы одну крипту, чтобы сделать заказ.'} image={isOrderComplited ? "/img/orderIdAdd.jpg" : "/img/basketNull.png"}
      />
      )
    }
      
      

        
    </div>
</div>
  )
}


{/* <div className="itemsIsNull"> 
        <img src="/img/basketNull.png" alt="" />
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя бы одну пару <br /> кроссовок, чтобы сделать заказ.</p>
        <button className="greenBotton" onClick={onClickCard}><img src='/img/errow-left.svg'/> Оформить заказ </button>
      </div>  */}