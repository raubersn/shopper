import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Pages/Cart.jsx';
import { LoginSignup } from './Pages/LoginSignup.jsx';
import { Product } from './Pages/Product.jsx';
import { Shop } from './Pages/Shop.jsx';
import { ShopCategory } from './Pages/ShopCategory.jsx';


function App() {

  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<ShopCategory categor='men'/>}/>
            <Route path='/women' element={<ShopCategory categor='women'/>}/>
            <Route path='/kids' element={<ShopCategory categor='kids'/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App
