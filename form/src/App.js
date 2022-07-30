import React from 'react'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,  
  BrowserRouter
}   from 'react-router-dom'
import EditForm from './EditForms/EditForm'
import Loyality from './Forms/Loyality'
import Messages from './Forms/Messages'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Messages/>} />
      <Route exact path="/edit/:id" element={<EditForm />} />
      


      </Routes>
      </BrowserRouter>
  )
}

export default App