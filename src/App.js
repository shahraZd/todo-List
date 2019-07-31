import React from 'react'
import List from './components/List'
import Add from './components/Add'
const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 ">
      <h1>My Todo List</h1>
      <div className="d-flex justify-content-around w-100 mt-5">
        <List/>
        <Add/>
      </div>
    </div>
  )
}

export default App
