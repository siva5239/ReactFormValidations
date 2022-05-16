import React, { useState,useEffect } from 'react'

const Formvalidations = () => {
    
    const [formdata,setFormdata]=useState({
        username:"",
        email:"",
        password:''
    })
    const [formError,setformError]=useState({})
    const [isSubmit,setIsSubmit]=useState(false)

    const handleChange=(e)=>{
       
        setFormdata({...formdata, [e.target.name]:e.target.value});
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata);
        setformError(validate(formdata));
         setFormdata('')
         setIsSubmit(true)
    }
     useEffect(()=>{
         console.log(formError)
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(formdata)
        }

    },[formError])
    

     const  validate=(values)=>{
         const error={}
         const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         if(!values.username){
             error.username="username is required"
         }
         if(!values.email){
            error.email="email is required"
        }
        else if(!regex.test(values.email)){
            error.email="this is not a valid email "
        }
        if(!values.password){
            error.password="password is required"
        }
        else if(values.password.length<4){
            error.password="password must be 4 characters "
        }
        return error;
          
     }
  
    return (
        <div className='container'>
            <div className='card' style={{ height: "470px", width: "350px" }}>
                <div className='card-header'>Login Form</div>
                <div className='card-body'>
                    <form>
                        <div>
                        <label>username:</label>
                        <input type="text"  name="username" placeholder="enter name" className='form-control' value={formdata.username} onChange={handleChange} /><br />
                        <span>{formError.username}</span>
                        </div>
                       
                        <div>
                         <label>email:</label>
                        <input type="email"  name="email" placeholder="enter email" className='form-control'   value={formdata.email}  onChange={handleChange}/><br />
                        <span>{formError.email}</span>
                        </div>
                        
                        <div>
                         <label>password:</label>
                        <input type="password" name='password' placeholder="enter password" className='form-control'  value={formdata.password}  onChange={handleChange} /><br />
                        <span>{formError.password}</span>
                        </div>
                        
                        <button  type="submit" onClick={handleSubmit} className='btn btn-info form-control'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formvalidations