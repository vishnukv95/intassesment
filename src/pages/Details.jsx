import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Details = () => {
  const navigate= useNavigate()
  const {id}= useParams()
  const students = useSelector((state)=>state.students.students)
  const student = students.find((student)=>student.id === Number(id))

  if(!student){
    return(
      <div>
        <h2>No student found</h2>
        
        <button onClick={()=>navigate('/')} type='button' className='p-2 bg-blue-600 rounded-lg text-white'>Back to list</button>
        
      </div>
    )
  }


  return (
    <div className='flex flex-col gap-4 m-auto mt-7 shadow-lg p-10'>
      <div className='flex justify-center items-center shadow-lg rounded-full mb-6'>
        <FaUser className='text-9xl p-7 text-blue-600'/>
      </div>
    <div className='flex flex-col gap-3'>
       <h2 className='text-lg font-bold'><span className='text-blue-700 text-sm'>Name:</span> {student.name}</h2>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Email:</span> {student.email}</p>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Phone:</span> {student.phone}</p>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Website:</span> {student.website}</p>
    </div>
    <div className='flex flex-col gap-3'>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Street:</span> {student.address.street}</p>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Suite:</span> {student.address.suite}</p>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>City:</span> {student.address.city}</p>
       <p className='text-lg font-bold'><span className='text-blue-700 text-sm'>Zipcode:</span> {student.address.zipcode}</p>
    </div>
    
    <div  className='w-full'>
      <button onClick={()=>navigate('/')} className='bg-blue-700 cursor-pointer text-white p-3 rounded-lg w-full'>Back to list</button>
    </div>

    </div>
  )
}

export default Details