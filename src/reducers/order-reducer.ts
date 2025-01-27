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
    
    if ( action.type === 'add-item' ) 
    {

        

        return {

            ...state
        
        }

    }
    
    if ( action.type === 'place-order' ) 
    {

        

        return {

            ...state
        
        }

    }
    
    if ( action.type === 'remove-item' ) 
    {

        

        return {

            ...state
        
        }

    }
    
    if ( action.type === 'add-tip' ) 
    {

        

        return {

            ...state
        
        }

    }
    

    return state;

}