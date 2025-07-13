import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Details from './pages/Details'
import Form from './pages/Form'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='flex justify-center items-center '>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Details' element={<Details/>}/>
             <Route path='/Form/:id' element={<Form/>}/>
             <Route path='/Form' element={<Form/>}/>
          </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
