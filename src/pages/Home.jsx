import React from 'react'
import { Card } from '../components/Card'
export const Home = ({items, searchValue, setSearchValue, onChangeInput, onAddToFafourite, onAddToCard}) => {
  return (
        <div className="content">
        <div className='header'>
          <h2>Все кроссовки</h2>
          <div className="search">
          
            <img src="/img/search.svg" alt="search"/> 
            <input onChange={onChangeInput} value={searchValue} placeholder="Поиск..." />
            {searchValue && ( <img  onClick={() => setSearchValue('')} className="close" src="/img/btn-remove.svg"/>)}
            </div>
           
        </div>

      <div className="cards">
      {items
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => {
            return <Card 
              key={index}

              onClickFavourite={(obj) => onAddToFafourite(obj) }
              onClickPlus={(obj) => onAddToCard(obj)}
              {...item}
            />
        })}
      </div>
    </div>
  )
}
