import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getAge = (name) => (dispatch) =>{
console.log(name)
console.log(dispatch)
    dispatch({type:FETCH_START});
        axios.get(`https://api.agify.io?name=${name}`)
            .then(resp => { 
                if (resp.data.age == null){
                    dispatch({type:FETCH_FAIL, payload:'please enter a valid name'})
                } else {
                dispatch({type:FETCH_SUCCESS, payload:resp.data})
                }
            })
            .catch(err => dispatch({type:FETCH_FAIL, payload:'error fetching data'}))
        }     