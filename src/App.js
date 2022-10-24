import { Card } from './components/Сard'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer';
function App() {
  return (
    <div className="wrapper">
        <Drawer />

      <Header />

    

    <div className="content">
        <div className='header'>
          <h2>Все кроссовки</h2>
          <div className="search">
            <img src="/img/search.svg" alt="search"/> 
            <input placeholder="Поиск..."/>
            </div>
        </div>

      <div className="cards">
        <Card/> 
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
