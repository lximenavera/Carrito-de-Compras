import { useReducer } from "react"
import { CarritoContext } from '../context/CarritoContext'



export const CartProvider = ({ children }) => {
    const initialState = []

    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Product':
                return [...state, action.payload]
            case '[CART] Remove Product':
                return state.filter(product => product.id !== action.payload)
            case '[CART] Add Product':
                return //NO ESTA UN
            case '[CART] Remove Product':
                return //NO ESTA AUN 
           break;
                default:
                break;
        }
    }
    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)
   
    const addProduct = (product) => {
        product.quantity=1
        const action = {
            type: '[CART] Add Product',
            payload: id,
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id,
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            payload: id,
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            payload: id,
        }
        dispatch(action)
    }

    

    return (
        <CarritoContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CarritoContext.Provider>
    )
}
