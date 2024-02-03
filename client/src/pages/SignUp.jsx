import React from 'react'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form className='flex flex-col  gap-4' >
        <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input type="text" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input type="text" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' />

        <button className='bg-slate-700 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> Sign Up</button>
      </form>
      <div className='flex py-2 text-sm'>
        <p className='text-gray-500'>Have an account ?</p>
        <span className='text-blue-500 px-2'>Sign in</span>
      </div>
    </div>
  )
}

export default SignUp