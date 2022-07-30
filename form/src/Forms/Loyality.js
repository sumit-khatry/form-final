import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import './table.css'


const Loyality = () => {
  const [data,setData]=useState([]);
  const [message,setMessage]=useState('')
  const [reducer,forceUpdate]=useReducer(x=>x+1);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/getLoyality`);
    setData(data);
  
  };
  useEffect(() => {
    getData();
  }, [reducer]);


  const clickLoyality=(id)=>{

const url=`http://localhost:5000/api/delete/${id}`
console.log(url);

axios.delete(url)
.then(res => setMessage('sucess'))
.catch(err => {setMessage('Unable edit message ')
window.location.reload()

return console.log(err)})

  };
  

  return (
    <div>Form21
      <table>
        <tr>
        <th>#</th>
        <th>Customer</th>
        <th>Color</th>
        <th>Action</th>
        </tr>
        {data.map((val,idx)=>{

   return<>        <tr><th>{idx+1}</th>
  <th>{val.Customer}</th>
  <th>{val.color}</th>
  <th>  <button onClick={()=>clickLoyality(val._id)}>Delete</button>
</th>
  </tr>
  </>

})}
      </table>


    </div>
  )
}

export default Loyality