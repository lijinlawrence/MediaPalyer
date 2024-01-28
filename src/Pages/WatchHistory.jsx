import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allAPI'

function WatchHistory() {

  //state setting is for to take function oustside

  const [history,setHistory]=useState([])

const handleHistory =async ()=>{
  //make api call

  const {data}=await getAllHistory()
  setHistory(data);
}
console.log(history);

 useEffect(()=>{
  handleHistory()
 },[])

 const handleDeleteHistory = async(id)=>{
  //make api call
  await deleteHistory(id)
  //get remaining history
  handleHistory()
 }

  return (
    <>
<div className="container mt-5 mb-5 d-flex justify-content-between">
<h3>Watch-History</h3>
<Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}>

<i class="fa-solid fa-arrow-left-long me-2 fa-beat-fade"></i>Back To Home
</Link>
</div>

<div>
  <table className='table mt-5 mb-5 container'>
  
  <thead>
      <tr >
        <th className='text-info'>#</th>
        <th className='text-info'>Caption</th>
        <th className='text-info'>URL</th>
        <th className='text-info'>Timestrap</th>
        <th className='text-info'>Action</th>
      </tr>
    
  </thead>  
  
  <tbody>
    {
      history.length>0?history?.map((item,index)=>(
<tr key={index}>

      <td>{index+1}</td>
      <td>{item?.caption}</td>
      <td>{item?.embedLink}</td>
      <td>{item?.timeStamp}</td>
      <td><button className='btn border-info' onClick={()=>handleDeleteHistory(item?.id)}><i className='fa-solid fa-trash-can text-danger'></i></button></td>

    </tr>
      )): <p className='fs-5 fw-5 text-danger'>No Watch History</p>
      }
  </tbody>
  </table>
  
</div>

    </>
  )
}

export default WatchHistory