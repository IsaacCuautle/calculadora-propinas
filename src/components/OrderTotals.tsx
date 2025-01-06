import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem[]
    tip: number,
    placeOrder : () => void
}

export default function OrderTotals( { order, tip, placeOrder }: OrderTotalsProps) {

    // Calcula el subtotal de los produtos incluidos en la orden
    const subtotalAmount = useMemo( () => order.reduce( ( total, item ) => total + ( item.quantity * item.price ),  0) , [order]);
    
    // Calcula la propina en base al consumo
    const tipAmount = useMemo( () => subtotalAmount * tip, [ tip, order ] );

    // Calcula el total sumando el subtotal de la orden mas la propina
    const totalAmount = useMemo( () => subtotalAmount + tipAmount, [tip, order] );

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">
                    Totales y Propina:
                </h2>
                <p>Subtotal a pagar:{' '}
                    <span className="font-bold">{ formatCurrency( subtotalAmount ) }</span>
                </p>
                <p>Propina:{' '}
                    <span className="font-bold">{ formatCurrency( tipAmount ) }</span>
                </p>
                <p>Total a Pagar:{' '}
                    <span className="font-bold">{ formatCurrency( totalAmount ) }</span>
                </p>
            </div>

            <button
                className="
                    w-full
                    bg-black
                    p-3
                    uppercase
                    text-white
                    font-bold
                    mt-10
                    disabled:opacity-10
                "
                disabled={ totalAmount === 0 ? true : false}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
