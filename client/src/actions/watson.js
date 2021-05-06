//import types
import {INPUT_SUCCESS, INPUT_FAIL} from './types'

//function that handles user message
export const userMessage =(message)=> async (dispatch)=>{
    try {
        dispatch({type:INPUT_SUCCESS, payload:message})
    } catch (error) {
        dispatch({type:INPUT_FAIL})
        
    }

}
//create a session- API call

//sends message to the bot - API call
