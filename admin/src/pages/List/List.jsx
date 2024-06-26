import React, { useEffect, useState } from 'react'
import './List.css' 
import axios from 'axios'
import {toast} from 'react-toastify'
const List = ({url}) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`)
    if(res.data.success){
      setList(res.data.data)
    }else{
      toast.error("Error")
    } 
  }
  const removeFood = async (foodId) =>{
    const res = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    console.log(res)
    if (res.data.success){
      toast.success(res.data.message)
    }else {
      toast.error("Error")
    }
  } 
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Description</b>
      </div>
      {list.map((item,index) => {
        return (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className="cursor" onClick={()=>removeFood(item._id)}>X</p>
          </div>
        )
      })}
    </div>
  )
}

export default List