import logo from './logo.svg';
import './App.css';
let listProduct = [
  {
      id: 1,
      name: 'A',
      price: 10,
      quantity: 5
  },
  {
      id: 2,
      name: 'AB',
      price: 12,
      quantity: 2
  },
  {
      id: 3,
      name: 'C',
      price: 15,
      quantity: 3
  }
]
function App() {
  return (
    <>
    {listProduct.map(item => (
      <h2>{item.name},{item.price}, {item.quantity}</h2>
    ))}
    </>
  );
}

export default App;
