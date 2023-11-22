import React from 'react'

const Home = () => {

  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
}
  return (
    <div className='text-4xl'>
      <p>Home</p>
      <div onClick={logout}>Logout</div>
    </div>
    
  )
}

export default Home