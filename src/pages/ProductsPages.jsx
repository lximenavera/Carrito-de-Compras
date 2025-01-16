import { useContext } from 'react'
import { CardComponent } from '../componentes/CardComponent'
import { ProductContext } from '../context/ProductContext'
import { CarritoContext } from '../context/CarritoContext'

export const ProductsPages = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CarritoContext)

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(product => (
        <CardComponent
          key={product.id}
          id={product.id}
          images={product.images}
          title={product.title}
          description={product.description}
          price={product.price}
          handlerAdd={() => addProduct(product)}
          handlerRemove={() => removeProduct(product.id)}
        />
      )

      )}
    </>
  )
}
