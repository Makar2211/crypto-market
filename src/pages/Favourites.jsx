import React from 'react'
import { Card } from '../components/Card'
import {appContext} from '../App'
export const Favourites = () => {

  const {favourites, onAddToFafourite} = React.useContext(appContext)

  return (
        <div className="content">
        <div className='header'>
          <h2>Мои закладки</h2>
          
           
        </div>

      <div className="cards">
      {favourites.map((item, index) => {
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
