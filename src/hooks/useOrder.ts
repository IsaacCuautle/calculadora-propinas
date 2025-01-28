import { useState } from "react"
import type { OrderItem } from "../types";

export default function useOrder() {
    
    const [ order ] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0);
    
    //* Agrega un item a la orden
    // const addItem = (item : MenuItem) => {

        
    // }

    // Quita productos de la orden
    

    // Guarda la orden y limpia la pantalla
    // const placeOrder = () => {
    //     setOrder([]);
    //     setTip(0);
    // }


    return {
        order,
        tip,
        setTip
    }
}