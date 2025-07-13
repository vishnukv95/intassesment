import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const initialState={
    students:[],
    loading:false,
    error:null
    
}

export const fetchData=createAsyncThunk('student/fetch',async()=>{
     const responce= await axios.get('https://jsonplaceholder.typicode.com/users')
     return responce.data
     

})



const studentSlice = createSlice({
    
      name:'students',
      initialState,


    reducers:{

        addStudent:(state,action)=>{
            const newStudent= {...action.payload,id:Date.now()}
            state.students.push(newStudent)
        },

        editStudent:(state,action)=>{
            const index = state.students.findIndex((student)=>student.id===action.payload.id)
             if(index !== -1){
                state.students[index]= action.payload
             }
        },

        deleteStudent:(state,action)=>{
            state.students = state.students.filter((student)=>student.id !== action.payload)
                 
        },

       

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
         state.loading =true
        })

        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.students = action.payload
            state.loading = false
            state.error = null
        })

        builder.addCase(fetchData.rejected,(state,action)=>{
            state.error = action.error.message
            state.loading=false
        })
    }
})

export const {deleteStudent,addStudent,editStudent} = studentSlice.actions

export default studentSlice.reducer