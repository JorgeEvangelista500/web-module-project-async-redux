import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";


const initialState = { 
    name: '',
    age: 0,
    error: '',
}

export const reducer = ( state= initialState, action) => {
    switch (action.type){
        case FETCH_START:
            return {
                ...state,
                name: '',
                age: 0
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: '',
                name: action.payload.name,
                age: action.payload.age,
            }
        case FETCH_FAIL:
            return {
                ...state,
                name: '',
                age: 0,
                error: action.payload
            }    
        default:
            return state;
    }
}