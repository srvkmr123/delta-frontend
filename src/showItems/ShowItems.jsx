/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from 'react'
import './ShowItems.css'

function ShowItems({isItemAdded}) {
  const [items ,setItems]= useState([])

  useEffect(()=>{
    axios.get('https://delta-backend.vercel.app/')
    .then(res=>setItems(res.data))
    .catch(err=>console.log(err))
  },[isItemAdded])  
  return (
    <div className='show-items'>
       {items.map(item=><div key={item._id} className="card item-card">
  <div className="item-card-header ">
    {item.title}
  </div>
  <div className="item-card-body">
    <p className="card-text">{item.description}</p>
  </div>
</div>)}
    </div>
  )
}

export default ShowItems