import React from 'react';


export const Card = () => {
  return (
        <div className="card">
          <div>
          <img className="like"  src='/img/heart-like.svg'/> 
          </div>
          <img className="img" width={133} height={112} src="/img/sneaker1.jpg"/>
          <p>Мужские Кроссовки <br/> Nike Blazer Mid Suede</p>
          <div className="external">
            <div className="inside">
              <span>Цена:</span><br/>
              <b>12 999 uan</b>
            </div>
            <button>
              <img  width={11} height={11}src="/img/plus.svg" /> 
            </button>
          </div>
        </div>  
    )
}