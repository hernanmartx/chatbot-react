//import dependencies
import React from 'react'
import './App.css';

//import redux components
import {Provider} from 'react-redux'
import store from './store'
//import chat componet
import Chat from './components/chat/Chat'
//conect application to redux


const App= () => {
  return  (
    <Provider store={store}>
  <div className="App">
  <Chat/>
  </div>
  </Provider>

  )
}

export default App;
