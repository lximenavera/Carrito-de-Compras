import React, { useState } from 'react'


export const CardComponent = ({ images, title, description, price, handlerAdd, handlerRemove }) => {

    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }
    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }
    return (
        <div className='card'>
            <img src={images} alt={title} className="card-img" />

            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
                <p className='card-price'>{price}</p>

                {
                    added
                        ? <button
                            type='button'
                            className='remove-button'
                            onClick={removeProduct}
                        >
                            Quitar del Carrito
                        </button>
                        : <button
                            type='button'
                            className='add-button'
                            onClick={addProduct}
                        >
                            Agregar del Carrito
                        </button>
                }
            </div>
        </div>
    )
}
