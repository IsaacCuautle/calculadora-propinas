import { MenuItem, OrderItem } from "../types"

// Acciones
export type OrderActions = 
{
    
    type : 'add-item',
    payload : { item : MenuItem }

} | 
{
    
    type : 'remove-item',
    payload : { id : MenuItem['id'] }

} |
{
    
    type : 'place-order'

} |
{
    
    type : 'add-tip',
    payload : { value : number }

}

// Types del state
export type OrderState =
{

    order : OrderItem[],
    tip : number

}

// States
export const InitialState : OrderState = 
{
    
    order : [],
    tip : 0

}

// Reducers
export const orderReducer = ( state: OrderState = InitialState, action: OrderActions) => 
{
    
    //* Añade un item a la orden
    if ( action.type === 'add-item' ) 
    {

        // Comprueba si ya existe un item en la orden
        const itemExist = state.order.find( orderItem => orderItem.id === action.payload.item.id );

        let order : OrderItem[] = [];
        
        if ( itemExist ) {

            // Busca el id del item a agregar e incrementa su cantidad en uno
            order = state.order.map( orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity +1 } : orderItem )

        } else {

            // Castea el tipo item a order
            const newItem : OrderItem = {

                ...action.payload.item,
                quantity: 1
            
            }

            order = [ ...state.order, newItem ];

        }
        

        return {

            ...state,
            order

        }

    }


    //TODO: GUARDAR ORDEN
    if ( action.type === 'place-order' ) 
    {

        let order : OrderItem[] = []
        let tip = 0

        return {

            ...state,
            order,
            tip
        }

    }
    

    //* Quita un Item de la orden
    if ( action.type === 'remove-item' ) 
    {

        let order = state.order.filter( item => item.id !== action.payload.id )
        

        return {

            ...state,
            order
            
        }

    }
    
    if ( action.type === 'add-tip' ) 
    {

        const tip = action.payload.value;

        return {

            ...state,
            tip
        
        }

    }
    

    return state;

}