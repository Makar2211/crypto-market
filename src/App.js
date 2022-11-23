import React, {useState} from 'react'
import axios from 'axios'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './pages/Home.jsx'
import {Favourites} from './pages/Favourites.jsx'
import { Orders } from './pages/Orders';

export const appContext = React.createContext({})



function App() {
  const [items, setItems] = useState([])
  const [cardItems, setCardItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [cartOpened, setCardOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  

  React.useEffect(() => {
      async function fetchData() {
        //TODO: TO DO TRY CATCH AND PROMISEALL
        try {
          const cardReaponse = await axios.get('https://635934bbff3d7bddb99be8d1.mockapi.io/card')
          const favouriteReaponse = await axios.get('https://635934bbff3d7bddb99be8d1.mockapi.io/favourite')
          const itemsReaponse  = await axios.get('https://635934bbff3d7bddb99be8d1.mockapi.io/items')

        setCardItems(cardReaponse.data)
        setFavourites(favouriteReaponse.data)
        setItems(itemsReaponse.data)
        setIsLoading(false)
        }catch(err) {
          alert('ошибка при добавлении в корзину')
        }
      } 
      fetchData()
  }, [])

  const onAddToCard = async (obj) => {
    try{
      const findItem = cardItems.find((item) => Number(item.parentId) === Number(obj.id))
      if(findItem) {
        setCardItems((prev) => prev.filter((item) =>  Number(item.parentId) !== Number(obj.id))) 
        await axios.delete(`https://635934bbff3d7bddb99be8d1.mockapi.io/card/${findItem.id}`)
        
      } else {
       setCardItems((prev) => [...prev, obj] )
       const { data } =  await axios.post('https://635934bbff3d7bddb99be8d1.mockapi.io/card', obj)
       setCardItems((prev) =>  prev.map(item => {
        if(item.parentId === data.parentId) {
          return {
            ...item,
            id: data.id
          }
        } else {
          return item
        }
       }))
        
      }
    } catch(error) {
      console.error(error)
    }
  }

  const onAddToFafourite = async (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://635934bbff3d7bddb99be8d1.mockapi.io/favourite/${obj.id}`)
        setFavourites((prev) => prev.filter((item) =>  Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://635934bbff3d7bddb99be8d1.mockapi.io/favourite', obj)
        setFavourites(prev => [...prev, data] )
      }
      
    } catch (error) {
      alert('ошибка при добавении в закладки')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://635934bbff3d7bddb99be8d1.mockapi.io/card/${id}`)
      setCardItems(prev => prev.filter( item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('ошибка при удалении из корзины')
      console.error(error)
    }
  }

  const handelOnCard = () => {
    setCardOpened(!cartOpened)
  }

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
   return cardItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  

  return (
    <appContext.Provider value={ {cardItems, favourites, items, isItemAdded, onAddToFafourite, handelOnCard, setCardItems, onAddToCard, cartOpened, setCardOpened }}>
      <div className="wrapper">
      
      {cartOpened === true ? <Drawer onRemove={onRemoveItem}  items={cardItems} onClickCard={handelOnCard}/> : null}

      <Header onClickCard={handelOnCard} />
        <Switch>
          <Route exact  path="/favourites"> 
                <Favourites
              />
          </Route>
          <Route exact  path="/"> 
          
              <Home  
              items={items}  
              cardItems={cardItems}
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChangeInput={onChangeInput}
              onAddToFafourite={onAddToFafourite}
              onAddToCard={onAddToCard} 
              isLoading={isLoading}
            />
          </Route>
          <Route exact  path="/orders">
            <Orders/>
          </Route>
        </Switch>

    </div>
    </appContext.Provider>
  );
}
export default App;
