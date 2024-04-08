import {  useState } from "react";
import { Link } from "react-router-dom";
const Sigin=()=>{
    const [loginData,setLoginData]=useState({
        email:"",
        password:"",
    })
    const [loginErrors,setLoginErrors]=useState({});
    const [loanTypes,setLoanTypes]=useState("");
    const loginHandleChange=(e)=>{
        const {name,value}=e.target;
        setLoginData({...loginData,[name]:value});
    }
    const  loginSubmit=(e)=>{
        e.preventDefault();
        const loginValidationErrors={};
        if(!loginData.email){
            loginValidationErrors.email="Email is Required";
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)){
            loginValidationErrors.email="Email is not valid";
        }
        if(!loginData.password.trim()){
            loginValidationErrors.password="Password Required";
        }
       else if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(loginData.password)){
        loginValidationErrors.password="Password is not valid ";
        }
       
        if(Object.keys(loginValidationErrors).length===0){
        setLoanTypes(true);
        }
        
        setLoginErrors(loginValidationErrors);
    }
        return(
        <>
            <form className="" onSubmit={loginSubmit}>
        <div className="flex flex-col w-[500px] m-auto  gap-6 p-11 bg-amber-400 rounded-lg ">
            <h1 className="font-thin text-2xl text-center">
                Online Loan Management System
                </h1>
                <h2 className="text-4xl text-center  font-thin">Sign In</h2>

            <input type="text" 
            className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg font-semibold "
            name="email"
            onChange={loginHandleChange}
             placeholder="E-mail"/>
             {loginErrors.email && <span className="text-lg text-red-600 text-center font-semibold">{loginErrors.email}</span>}

             <input type="password" 
            className="text-center p-2 w-2/3 m-auto bg-gray-300  text-black text-xl rounded-lg font-semibold "
            name="password"
            onChange={loginHandleChange}
             placeholder="Password"/>
                  {loginErrors.password && <span className="text-lg text-red-600 text-center font-semibold">{loginErrors.password}</span>}
                     <div  className="bg-gray-500 p-2 w-1/3 m-auto text-black text-lg rounded-lg  text-center">
                        {loanTypes? <button type="submit">
                 <Link to="/loan" > Signin</Link>
                        </button>
                        : <button type="submit">
                        Sigin
                        </button>}
                   
                        </div>
            <p className="text-center">Forgot Password?</p>
            <p className="text-center">Don't have an acount?Please<button className="m-1"><Link to="/register"> Sign Up</Link></button></p>
            </div>
            </form>
        </>
    )
}
export default Sigin;