import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addStudent, editStudent } from '../features/StudentSlice'

const Form = () => {
    const dispatch =useDispatch()
   const navigate = useNavigate()
   const {id} = useParams()
   const students = useSelector((state)=>state.students.students)
   const [formData,setFormData]=useState({name:"",email:"",phone:""})
   const [edit,setEdit] = useState(false)
   const [error,setError] = useState({})

   const handleChange=(e)=>{
    const {name,value}= e.target
       setFormData((formData)=>({
           ...formData,[name]:value
       }))
   }

   const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(!validation())return
        if(edit){
           dispatch(editStudent({...formData,id:Number(id)}))
        
        }else{
            dispatch(addStudent(formData))
        
        }

        navigate('/')
   }

   useEffect(()=>{
    if(id){
    const existingStudent = students.find((student)=>student.id === Number(id))
    
    if(existingStudent){
           setFormData({
        name:existingStudent.name || "" ,
        email:existingStudent.email || "",
        phone:existingStudent.phone || ""

    })
    setEdit(true)
   }
}
},[students,id])

const validation=()=>{
    const err={}
    if(!formData.name)err.name="Name is required"
    if(!formData.email)err.email="Email is required"
    else if(!/\S+@\S+\.\S+/.test(formData.email))err.email="Invalid email"
    if(!formData.phone)err.phone="Phone number is required"
     setError(err)
     return Object.keys(err).length===0

}



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col justify-center p-4 gap-3 shadow-lg w-[450px] mt-40' action="">
        <h2 className='text-2xl font-bold text-blue-700'>{edit ? "Edit Student Data":"Add Student Data"}</h2>
        <label htmlFor="name">Name</label>
        <input name='name' onChange={handleChange} className='p-2 outline-none rounded-sm shadow'  placeholder='Name' type="text" value={formData.name} />
        {error.name && <p className='text-sm text-red-600'>{error.name}</p>  }
        <label htmlFor="email">Email</label>
        <input name='email' onChange={handleChange} className='p-2 outline-none rounded-sm shadow' placeholder='Email' type="text" value={formData.email} />
        {error.email && <p className='text-sm text-red-600'>{error.email}</p>}
        <label htmlFor="phone">Phone</label>
        <input name='phone' onChange={handleChange} className='p-2 outline-none rounded-sm shadow' placeholder='Phone' type="text" value={formData.phone}/>
        {error.phone && <p className='text-sm text-red-600'>{error.phone}</p>}
        <button  className='bg-blue-700 p-2 rounded-lg text-white mt-4' type='submit'>submit</button>


    </form>
  )
}

export default Form