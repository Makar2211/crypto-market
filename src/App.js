import { Card } from './components/Card'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer';
function App() {
  const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneaker1.jpg'},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneaker2.jpg'},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneaker3.jpg'},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneaker4.jpg'}
    
  ]
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
      {arr.map((obj) => {
          return <Card 
            name={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
          />
        })}
      </div>

    </div>


    </div>
  );
}

export default App;
