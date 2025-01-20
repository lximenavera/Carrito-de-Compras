import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import Swal from 'sweetalert2'

export const CarritoPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CarritoContext)
 
  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price + product.quantity, 0).toFixed(2)
  }

  const handlerPurchase = () => {
    const productPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra seha realizado con exito',
      html: `<p>Has Comprado</p> <pre> ${productPurchased}</pre>`
    })
  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>
                <button
                  className='btn btn-outline-primary'
                  onClick={() => decrementQuantity(product.id)}
                >-</button>
                <button
                  className='btn btn-primary'
                >{product.quantity}</button>
                <button
                  className='btn btn-outline-primary'
                  onClick={() => incrementQuantity(product.id)}
                >+</button>
              </td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => removeProduct(product.id)}
                >Eliminar</button>
              </td>
            </tr>
          ))}
          <tr></tr>
          <th><b>TOTAL:</b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handlerPurchase}>Comprar</button>
      </div>
    </>
  )
}

