import React, {useState} from 'react'
import {connect} from 'react-redux'

//import action
import {userMessage} from '../actions/watson'

const Chat =() =>{
    //handle user message
    const[message, setMessage]= useState("")

    //function that handles user submission
    const handleClick = async (e) =>{
        const code = e.onKeyCode || e.which

        if(code===13){
            console.log(message)
            setMessage('')
        }
    }

    return(
        <div className='chat'>
            <h1>Chatbot </h1>
            {/* handle messages */}
            <div>messages go here </div>
            {/* Input box */}
            <input id='chatBox' onChange={(e)=>setMessage(e.target.value)} 
            onKeyPress={handleClick} value={message}></input>

        </div>

    )
}

export default connect(mapStateToProps, {userMessage })(Chat)