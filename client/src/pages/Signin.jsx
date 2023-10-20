import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice';

const Signin = () => {

 const [formData, setformData] = useState({})
//  const [error, setError]=useState(false)
//  const[loading,setLoading]= useState(false)
const {loading,error} = useSelector((state=>state.user))
const navigate =useNavigate();
const dispatch = useDispatch();

  const handleChange= (e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }
  const handelSubmit = async(e)=>{
    e.preventDefault();
    try {
      // setLoading(true)
      dispatch(signInStart);
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success===false)
      {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message))
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message))
    }
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold my-9 text-center'>Sign In</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-3'>
        
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        ></input>
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        ></input>
        <button disabled={loading} className='bg-slate-700 m-4 text-white p-3 rounded-lg text-lg uppercase hover:opacity-95 disabled:opacity-80'> {loading ?'Loading...':'Sign In'}</button>
      </form>
      <div className='flex gap-3  mt-3'>
        <p>dont have an account ?</p>
        <Link to={'/sign-up'}><span className='text-blue-500 font-semibold'>Sign up</span></Link>
        
      </div>
      <p className='text-red-600 font-semibold mt-5'>{error && 'Wrong Crendential !..'}</p>
    </div>
  )
}

export default Signin