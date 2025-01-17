import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPages } from './pages/ProductsPages'
import { CarritoPage } from './pages/CarritoPage'
import { NavBarComponent } from './componentes/NavBarComponent'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const CarritoApp = () => {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <NavBarComponent />
          <div className='container'>
            <Routes>
              <Route path='/' element={<ProductsPages></ProductsPages>}></Route>
              <Route path='/carrito' element={<CarritoPage />}></Route>
              <Route path='/*' element={<Navigate to='/' />}></Route>
            </Routes>
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  )
}
