
import './App.css'
import ProductList from './pages/productList'
import Cart from './pages/cart'
import Login from './pages/login'
import Header from './components/Header'
import ProductDetails from './pages/product-details'
 import {BrowserRouter,Route ,Routes} from "react-router"
 import NotFound from "./pages/NotFound";
import Language from "./context/language";
import { useState } from "react";
import Register from "./pages/form";

function App() {
  const [lang, setLang] =useState('en');

  return (
    <>
    <Language.Provider value={{lang, setLang}}>

    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </Language.Provider>

    </>
  )
}

export default App
