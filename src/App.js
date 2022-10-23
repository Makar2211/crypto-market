
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg"/>
            <div className="headerInfo">
              <h1>REACT SNEAKERS</h1>
              <p>Магазин лучших кроссовок</p>
            </div>
        </div>

          <div className="headerRight">
            <ul >
              <li>
              <img width={18} height={18} src="/img/cart.svg"/>
                <span>1205 uan.</span>
              </li>
              <li>
              <img width={18} height={18} src="/img/heart.svg"/>
              </li>
              <li>
              <img width={18} height={18} src="/img/user.svg"/>
              </li>
            </ul>
          </div>
      </header>

      <div className="content">
        <h2>Все кроссовки</h2>


        <div className="cards">
        <div className="card">
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

        <div className="card">
          <img className="img" width={133} height={112} src="/img/sneaker2.jpg"/>
          <p>Мужские Кроссовки Nike <br/> Air Max 270</p>
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

        <div className="card">
          <img className="img" width={133} height={112} src="/img/sneaker3.jpg"/>
          <p>Мужские Кроссовки <br/> Nike Blazer Mid Suede</p>
          <div className="external">
            <div className="inside">
              <span>Цена:</span><br/>
              <b>8 499 uan</b>
            </div>
            <button>
              <img  width={11} height={11}src="/img/plus.svg" /> 
            </button>
          </div>
        </div> 

        <div className="card">
          <img className="img" width={133} height={112} src="/img/sneaker4.jpg"/>
          <p>Кроссовки Puma X <br/> Aka Boku Future Rider</p>
          <div className="external">
            <div className="inside">
              <span>Цена:</span><br/>
              <b>8 999 uan</b>
            </div>
            <button>
              <img  width={11} height={11}src="/img/plus.svg" /> 
            </button>
          </div>
        </div> 


        
        </div>
      </div>
    </div>
  );
}

export default App;
