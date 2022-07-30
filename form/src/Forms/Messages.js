import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './table.css'
import Loyality from './Loyality'

const Messages = () => {
  const [data,setData]=useState([]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/getmessage`);
    setData(data);
  console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Form21
      <table>
        <tr>
        <th>#</th>
        <th>Types</th>
        <th>Message</th>
        <th>Action</th>
        </tr>

        {data.map((val,idx)=>{
  return<>        <tr><th>{idx+1}</th>
  <th>{val.Types}</th>
  <th>{val.message}</th>
  <Link to={`/edit/${val._id}`}>
  <th>edit</th></Link>
  </tr>
  </> 
})}
      </table>

<Loyality />
    </div>
  )
}

export default Messages