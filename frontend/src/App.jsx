import { React, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  console.log("App is rendering")
  const [user, setUser] = useState(null)


  useEffect(() => {
    console.log("useEffect");
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
  
        if (res.status === 200) {
          const resObject = await res.json();
          setUser(resObject.user);
        } else {
          throw new Error("Authentication failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    getUser();
  }, []);
  
  console.log(user)


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />  
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/exercise" element={user ? <ExerciseDetail /> : <Login />} /> {/* NEED TO FIX THIS TO NAVIGATE  */}
        </Routes>
    </BrowserRouter>
  )
}

export default App