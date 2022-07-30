import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState ={
    numOfIceCreams : 20
}

export const iceCreamReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams : state.numOfIceCreams > 0 ? state.numOfIceCreams - action.payload : state.numOfIceCreams
        }
        default : return state;
    }
}