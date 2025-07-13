import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, fetchData } from '../features/StudentSlice'
import { useNavigate } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'


const Home = () => {
const navigate=useNavigate()
const dispatch = useDispatch()
const {students,loading,error}= useSelector((state)=>state.students)

const handleDelete=(id)=>{
  if(window.confirm("Are you sure you want to delete")){
    dispatch(deleteStudent(id))
  }
}

const handleEdit=(id)=>{
   navigate(`/Form/${id}`)
}
const handleView=(id)=>{
   navigate(`/Details/${id}`)
}

useEffect(()=>{
   dispatch(fetchData())
   
},[dispatch])

if(loading){
  return(
    <div className='flex justify-center items-center min-h-screen m-auto'>
     <h2 className='m-auto text-blue-700 p-7 shadow-lg'>Loading.....</h2>
  </div>
  )
}

if(error){
  return(
    <div className='min-h-screen m-auto'>
       <h2>{error.message}</h2>
  </div>
  )
}


return (
   <div className='flex flex-col justify-center items-center mt-7 mb-40'>
      <h2 className='text-4xl font-bold text-blue-700'>Students List</h2>
      <hr className='border-t-2 border-blue-700' />
       <div className='container m-auto mt-7 grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center'>
       
       {students.map((student)=>(
          <div key={student.id} className='flex shadow-lg h-[100px] rounded-lg m-2 p-4 justify-between items-center border-gray-200'>
             <div>
                 <h2 className='text-md text-gray-800 font-bold'><span className='text-sm text-blue-700'>Name:</span> {student.name}</h2>
                 <p className='text-md font-bold text-gray-800'><span className='text-sm text-blue-700'>Email:</span> {student.email}</p>
                 <p className='text-md font-bold text-gray-800'><span className='text-sm text-blue-700'>Phone:</span> {student.phone}</p>
                 
             </div>
             <div className='flex gap-3'>
                  <button onClick={()=>handleView(student.id)} type='button' className='p-2 bg-blue-700 cursor-pointer hover:bg-blue-800 hover:ring-4 ring-blue-300
                     text-white text-sm font-bold rounded-lg '>View</button>
                   
                   <button type='button' onClick={()=>handleEdit(student.id)} className='bg-gray-300 p-2 cursor-pointer rounded-lg'>Edit</button> 

                  <button  onClick={()=>handleDelete(student.id)} className='p-2 cursor-pointer bg-red-600 hover:bg-red-700 hover:ring-4 ring-red-300
                     text-white text-sm font-bold rounded-lg'>Delete</button>   
                    
             </div>
             
          </div>
          
       ))}
            <div onClick={()=>navigate('/Form')} className='flex  flex-col cursor-pointer shadow-lg h-[100px] rounded-lg m-2 p-4 justify-between items-center border-gray-200'>
               <FaPlusCircle className='text-blue-700 text-8xl'/>
               <h2 className='text-lg font-bold'>Add student</h2>
             </div>
    </div>
   </div>
  )
}

export default Home