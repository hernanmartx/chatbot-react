//import types

import {INPUT_SUCCESS,INPUT_FAIL} from '../actions/types'

//initial state

const initialState = {
    messages: []
}
//switch statement -update state
export default (state=initialState,action)=>{
    const {type, payload} = action
    
    let{messages} = state

    switch(type){
        case INPUT_SUCCESS:
        messages = [...messages,{messages:payload, type:'user'}]
        return{
            ...state,
            messages
        }
        case INPUT_FAIL:
            return{
                ...state

            }
    }
}