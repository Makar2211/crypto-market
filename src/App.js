import React, {useState} from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = useState([])
  const [cardItems, setCardItems] = useState([])
  const [cartOpened, setCardOpened] = useState(false);


  React.useEffect(() => {
    fetch('https://635934bbff3d7bddb99be8d1.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  
  const handelOnCard = () => {
    setCardOpened(!cartOpened)
  }

  const onAddToCard = (obj) => {
    setCardItems([...cardItems, obj])
  }
  return (
    
    
    <div className="wrapper">
      
      {cartOpened === true ? <Drawer items={cardItems} onClickCard={handelOnCard}/> : null }

      <Header onClickCard={handelOnCard} />

    

      <div className="content">
        <div className='header'>
          <h2>Все кроссовки</h2>
          <div className="search">
            <img src="/img/search.svg" alt="search"/> 
            <input placeholder="Поиск..."/>
            </div>
        </div>

      <div className="cards">
      {items.map((item) => {
          return <Card 
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickFavourite={() => console.log('добавили закладки')}
            onClickPlus={(obj) => onAddToCard(obj)}
          />
        })}
      </div>
    </div>


    </div>
  );
}

export default App;
