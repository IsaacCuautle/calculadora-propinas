import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0);
    
    //* Agrega un item a la orden
    const addItem = (item : MenuItem) => {

        // Comprueba si ya existe un item en la orden
        const itemExist = order.find( orderItem => orderItem.id === item.id );

        if ( itemExist ) {

            // Busca el id del item a agregar e incrementa su cantidad en uno
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity +1 } : orderItem )

            setOrder(updatedOrder);

        } else {

            // Castea el tipo item a order
            const newItem : OrderItem = {
                ...item,
                quantity: 1
            }

            setOrder([ ...order, newItem]);

        }
    }

    // Quita productos de la orden
    const removeItem = (id : MenuItem['id']) => {
        
        setOrder( order.filter( item => item.id !== id ) );
        
    }

    // Calcular propina


    return {
        order,
        addItem,
        removeItem,
        tip,
        setTip
    }
}