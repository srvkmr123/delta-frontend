import { useState } from 'react'
import './App.css'
import AddItem from './AddItem/AddItem'
import ShowItems from './showItems/ShowItems'

function App() {
  const [isItemAdded,setIsItemAdded]=useState(false)
  return (
    <div className='container-fluid  app'>
      <AddItem setIsItemAdded={setIsItemAdded}/>
      <ShowItems isItemAdded={isItemAdded}/>
    </div>
  )
}

export default App
