import React, { useState } from 'react'
import axios from "axios";

function HeaderForm() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handlesubmit=()=>{
          axios.post('/http:localhost:    /api/account/login',{
              email:email,
              password:password
          }).then(response=> console.log(response));
    }
  return (
    <div className="headerform">
        <div className=" header__input" >
       <h3 style={{textAlign:'center',color:'red'}}>SIGN IN </h3>
    
    <form >
    <h4 style={{padding:'10px'}}>Sign In now </h4>
     <h3>Email</h3> <input  style={{width:'100%'}}  type="text" placeholder="username" onChange={(e)=> setemail(e.target.value)} ></input>
     <h3>Password </h3><input style={{width:'100%'}} type="password" placeholder="password"  onChange={(e)=> setpassword(e.target.value)}></input>
     <div>
     <button onClick={handlesubmit} style={{backgroundColor:' rgb(0, 191, 256)', border:'none',padding:'5px',marginTop:'15px',width:'10%'}}> Sign In </button>
     </div>
     </form>
    </div>
    </div>
  )
}

export default HeaderForm
