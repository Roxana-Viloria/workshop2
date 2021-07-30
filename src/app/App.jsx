//*styles*//
import './App.css';

//*components*//
import Card from '../componentes/card/Card';

//**Others//
import products from '../bd/bd.js' 

function App() {
  const productSort = (data)=>{
    console.log (data)
    // alert ("contando")
  
  }
  return (
    <div className="App">
      {products.map((item)=>{
        return <Card id={item.id}
        name= {item.name}
        description={item.description}
        usuario={item.usuario}
        picture={item.picture}
        productSort = {productSort}
        />
      }
      )}
    </div>
  );
}

export default App;
