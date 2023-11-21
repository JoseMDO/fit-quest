import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise" element={<ExerciseDetail />} />
            <Route path="/login" element={<Login />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App