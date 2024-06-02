import logo from './logo.svg';
import Header from './Components/Header';
import OrderList from './Components/OrderList';
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <OrderList/>
      <Footer/>
    </div>
  );
}

export default App;
