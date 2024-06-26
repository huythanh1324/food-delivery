import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import {assets} from '../../assets/assets.js'
import axios from 'axios';

const MyOrders = () => {

    const [data,setData] = useState([]);
    const {token,url} = useContext(StoreContext) 

    const fetchOrder = async() =>{
        const res = await axios.post(url+'/api/order/userorder',{},{headers:{token}})
        setData(res.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrder()
        }
    },[token])

  return (
    <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container">
          {data.map((order,index) => {
            return (
              <div key ={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index) => {
                  if(index === order.items.length -1 ){
                    return item.name + " x " + item.quantity;
                  }else{
                    return item.name + " x " + item.quantity+", ";
                  }
                })}</p>
                <p>${order.amount}</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                <button>Track Order</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default MyOrders