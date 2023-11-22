import React from 'react'
import Google from "../img/google.png"
import Github from "../img/github.png"
// import Facebook from "../img/facebook.png"




const Login = () => {

  const github = () => {
    window.open("http://localhost:3000/auth/github", "_self");
  };


  return (
  <div name="home" className='h-screen w-full font-raleway overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#A0FFE3] text-white dark:bg-gradient-to-b  dark:from-[#000000] dark:via-[#000000] dark:to-[#323232] dark:text-white'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center items-center gap-20 h-full w-full mr-20'>
        <h2 className='text-5xl sm:text-7xl font-bold text-black dark:text-white'>
            FitQuest
        </h2>
        <p className='text-3xl text-center'>
          The hardest part of the journey is the beggining, the easiest part, is the rest.
        </p>
        <p className='text-3xl'>
          Login to start your journey now
        </p>
      </div>
      <div className='bg-gray-700 h-3/4 w-1 mr-10'>

      </div>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex justify-center items-center p-8 rounded-lg text-2xl bg-red-600 h-16 w-3/4 mb-10 hover:cursor-pointer'>
          <img src={Google} className='mr-4' alt="google"/>
          <p>Login With Google</p>
        </div>
        <div className='flex justify-center items-center p-8 rounded-lg text-2xl bg-slate-600 h-16 w-3/4 mb-10 hover:cursor-pointer' onClick={github}>
        <img src={Github} className='mr-4' alt="google"/>
          <p>Login with GitHub</p>
        </div>
        <div className='flex justify-center items-center rounded-lg text-2xl bg-blue-600 h-20 w-3/4 text-center hover:cursor-pointer'>
        {/* <img src={Facebook} className='mr-2' alt="google"/> */}
          <p>Login with Email and Password</p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Login