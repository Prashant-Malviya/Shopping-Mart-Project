import React, { useState } from 'react'
import { database } from './firbaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';

function ShoppingMartAuthenticator() {

    const [login,setLogin] = useState(false);

    const history = useNavigate();
  
    const handleSubmit = (e,type) => {
      e.preventDefault();
      // console.log(e.target.email.value);
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      if(type == 'signup'){
  
      createUserWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data, "authData");
        history("/home");
      }).catch(error =>{
          alert(error.code)
          setLogin(true)
      })
  }else{
      signInWithEmailAndPassword(database, email, password).then((data) => {
          console.log(data, "authData");
          history("/home");
        }).catch(error =>(
          alert(error.code)
        ));
  }
    };

  return (
    <div className="m-auto">
<div className="row space-x-4 font-bold">
        <div className={login == false ?'activeColor':'pointer cursor-pointer'} onClick={()=>setLogin(false)}>SignUp</div>
        <div className={login == true ?'activeColor':'pointer cursor-pointer'} onClick={()=>setLogin(true)}>SignIn</div>
    </div>
    <div className="flex items-center justify-center bg-gray-100 m-auto">
   
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {login ?'SignIn':'SignUp'} to your account
        </h3>
        <form onSubmit={(e) => handleSubmit(e,login?'signin':'signup')}>
          <div className="mt-4">
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                
                placeholder="Email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                {login?'SignIn':'SignUp'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ShoppingMartAuthenticator
