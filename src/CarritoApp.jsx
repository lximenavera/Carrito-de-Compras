import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPages } from './pages/ProductsPages'
import { CarritoPage } from './pages/CarritoPage'
import { NavBarComponent } from './componentes/NavBarComponent'
import { ProductProvider } from './context/ProductProvider'

export const CarritoApp = () => {

  return (
    <>
      <ProductProvider>
        <cartProvider>
          <NavBarComponent />
          <div className='container'>
            <Routes>
              <Route path='/' element={<ProductsPages></ProductsPages>}></Route>
              <Route path='/carrito' element={<CarritoPage />}></Route>
              <Route path='/*' element={<Navigate to='/' />}></Route>
            </Routes>
          </div>
        </cartProvider>
      </ProductProvider>
    </>
  )
}
