import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';

const Signup = () => {

 const [formData, setformData] = useState({})
 const [error, setError]=useState(false)
 const[loading,setLoading]= useState(false)
const navigate =useNavigate();

  const handleChange= (e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }
  const handelSubmit = async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success===false)
      {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold my-9 text-center'>SignUp</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-3'>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        ></input>
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        ></input>
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        ></input>
        <button disabled={loading} className='bg-slate-700 m-4 text-white p-3 rounded-lg text-lg uppercase hover:opacity-95 disabled:opacity-80'> {loading ?'Loading...':'Sign Up'}</button>
      </form>
      <div className='flex gap-3  mt-3'>
        <p>Have an account ?</p>
        <Link to={'/sign-in'}><span className='text-blue-500 font-semibold'>Sign in</span></Link>
        
      </div>
      <p className='text-red-600 font-semibold mt-5'>{error && 'Something went wrong !..'}</p>
    </div>
  )
}

export default Signup