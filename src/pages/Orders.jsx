import React,{useState} from 'react'
import { Card } from '../components/Card'
import axios from 'axios'
import {appContext} from '../App'
import { Link } from "react-router-dom";
export const Orders = () => {
    const {onAddToCard, onAddToFafourite} = React.useContext(appContext)
    const [orders, setorders] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect( () => {
        (async() => {
            try{
                const { data }  = await axios.get('https://635934bbff3d7bddb99be8d1.mockapi.io/orders')
                setorders(data.map(obj => obj.items).flat())
                setIsLoading(false)
            } catch(error) {
                alert('ошибка при запросе заказа')
                console.error(error)
            }
            /* console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []).flat()) */

        })()
    }, [])
  
return (
        <div className="content">
        {
          orders.length > 0 ? (
            <>
            <div className='header'>
          <h2>Мои заказы</h2>
        </div>

      <div className="cards">
      {(isLoading ? [...Array(8)] : orders).map((item, index) => {
            return <Card 
                key={index}
                loading={isLoading}
                {...item}
            />
        })}
      </div></>
          ) : (
            (
              <div className='fafouriteIsNull'>
                <div className='center'>
                  <h2>У вас нет заказов</h2>
                  <p style={{"textAlign": "center" }}>Вы нищеброд? <br/> Оформите хотя бы один заказ.</p>
                  <Link to='/'>
                  <button  className="greenBotton">Оформить заказ <img src='img/errow-left.svg'/></button>
                  </Link>
                </div>
              </div>
            )
          )
        }
    </div>
  )
  
}
