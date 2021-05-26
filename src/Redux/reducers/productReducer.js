import { ActionTypes } from '../constants/action-type'

const initState = {
    products: [
        { id:1, title:'Tanisha', category:'programmer' }
    ]
}

export const productReducer = (state=initState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}