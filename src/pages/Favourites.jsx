
import { Card } from '../components/Card'
import React from 'react'
export const Favourites = ({items, onAddToFafourite}) => {
  return (
        <div className="content">
        <div className='header'>
          <h2>Мои закладки</h2>
          
           
        </div>

      <div className="cards">
      {items.map((item, index) => {
            return <Card 
              key={index}
              favourited={true}
              onClickFavourite={onAddToFafourite}
              {...item}
            />
        })}
      </div>
    </div>
  )
}
