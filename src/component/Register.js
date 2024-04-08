import { useState } from "react";
import { Link } from "react-router-dom";

const Register=()=>{
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:"",
        gender:"",
        date:"",
        password:"",
        confirmpassword:"",
    
    })
    //Manage the errors
    const [errors,setErrors]=useState({})
    const [regLoan, setRegLoan]=useState("");
    //this handleChange function is update the input value to state variable
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors={};
    if(!formData.firstname.trim()){
       validationErrors.firstname="Firstname is Required";
    }
    else if(!/^[a-zA-Z]+$/.test(formData.firstname)){
        validationErrors.firstname="Firstname is not valid";

    }
    if(!formData.lastname.trim()){
        validationErrors.lastname="Lastname is Required";
     }
     else if(!/^[a-zA-Z]+$/.test(formData.lastname)){
         validationErrors.lastname="Lastname is not valid";
     }
    if(!formData.email){
        validationErrors.email="Email is Required";
    }
   else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        validationErrors.email="Email is not valid";
    }
    

    if(!formData.phonenumber.trim()){
        validationErrors.phonenumber="Phonenumber is Required";
    }
    else if(!/^[0-9]+$/.test(formData.phonenumber)){
        validationErrors.phonenumber="Phonenumber is not valid";
    }
    if(!formData.date){
        validationErrors.date="Date is Required"
    }
    if(!formData.gender){
        validationErrors.gender="Gender is Required";
    }
    if(!formData.password){
        validationErrors.password="Password Required";
    }
    else if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(formData.password)){
        validationErrors.password="Password is not valid (Please use atleast one character,symbol,number)";
    }
    if(!formData.confirmpassword){
        validationErrors.confirmpassword="Confirm Password Required";
    }
    else if(formData.confirmpassword!==formData.password){
        validationErrors.confirmpassword="Enter Same password here "
    }
    if(Object.keys(validationErrors).length===0){
        alert("Successfully Registered");
        setRegLoan(true);
    }
    setErrors({...validationErrors});
    }
    
    return (
            <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col w-[500px] m-auto  gap-6 p-11 bg-amber-400 rounded-lg">
            <h1 className="font-thin text-2xl text-center">
                Online Loan Management System
                </h1>    
                <h2 className="font-thin text-4xl text-center text-gray-800">Signup</h2>
            <input type="text"
            name="firstname"
            onChange={handleChange}
            className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg "
            placeholder="First Name"/>
            {errors.firstname && <span className="text-lg text-red-600 text-center font-semibold">{errors.firstname}</span>}

           <input type="text"
           className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg"
           name="lastname"
           onChange={handleChange}
           placeholder="Last Name"/>
                       {errors.lastname && <span className="text-lg text-red-600 text-center font-semibold">{errors.lastname}</span>}


            <input type="text" 
            className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg "
            name="email"
            onChange={handleChange}
             placeholder="E-mail"/>
             {errors.email && <span className="text-lg text-red-600 text-center font-semibold">{errors.email}</span>}
            <div className="m-auto">
                <label className="text-xl font-bold mr-1" for="dob" >
                    D.O.B
                    </label>   
                     <input type="date"
                      className=" text-center p-2  w-30 m-auto  bg-gray-300 text-black text-xl rounded-lg font-semibold"

                      name="date"
                      onChange={handleChange}
                       placeholder="Date of Birth"/>
            </div>
            {errors.date && <span className="text-lg text-red-600 text-center font-semibold">{errors.date}</span>}



            <div className="m-auto">
                <label className="text-xl font-bold mr-1">
                    Gender
                    </label> 
                      <select name="gender"
                      value={formData.gender}
                        onChange={handleChange}
                         className=" text-center p-2 w-30 m-auto  bg-gray-300 text-black text-xl rounded-lg font-semibold">
                <option value="">Select</option>
                <option value="male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
            </select>
            </div> 
            {errors.gender && <span className="text-lg text-red-600 text-center font-semibold">{errors.gender}</span>}

             <input type="text"
              className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg " 
              name="phonenumber"
              onChange={handleChange}
              placeholder="Phone Number"/>
                          {errors.phonenumber && <span className="text-lg text-red-600 text-center font-semibold">{errors.phonenumber}</span>}

            <input type="password" 
            className="text-center p-2 w-2/3 m-auto bg-gray-300  text-black text-xl rounded-lg "
            name="password"

            onChange={handleChange}
             placeholder="Password"/>
                         {errors.password && <span className="text-lg text-red-600 text-center font-semibold">{errors.password}</span>}


            <input type="password" 
            className=" text-center p-2  w-2/3 m-auto  bg-gray-300 text-black text-xl rounded-lg"
            name="confirmpassword"
            onChange={handleChange}
             placeholder="Confirm Password"/>
                         {errors.confirmpassword && <span className="text-lg text-red-600 text-center font-semibold">{errors.confirmpassword}</span>}

<div   className="bg-gray-500  w-1/3 m-auto p-4 rounded-lg text-center ">
    {regLoan?<button className="text-black text-lg rounded-lg "
              type="submit"><Link to="/loan">Register</Link></button>:<button className="text-black text-lg rounded-lg text-center"
              type="submit">Register</button>

}
    </div>
    </div>
    </form>
    )
}
export default Register;