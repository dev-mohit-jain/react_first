import { useState } from "react"
function Add(){
    const [firstName,setfName] = useState("");
    const [lastName,setlName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [contact,setCnt] = useState("");

    function submitForm(){
        console.log(firstName,lastName,password,email,contact);
        let formData ={firstName,lastName,password,email,contact}
        fetch("https://test-order-nq62l.ondigitalocean.app/v1/user/register",{
           method:'POST',
           headers:{
            'Accept':'Application/json',
            'Content-Type':'Application/json'
           },
           body:JSON.stringify(formData)
        }).then((data)=>{data.json().then((res)=>{
            console.log(res);
        })})
    }
return(
    <div>
        <h1>Add New User</h1>
        <label>First Name</label><br/>
        <input type="text" value={firstName} name="firstName" onChange={(e)=>setfName(e.target.value)}/><br/><br/>
        <label>Last Name</label><br/>
        <input type="text" value={lastName} name="lastName" onChange={(e)=>setlName(e.target.value)}/><br/><br/>
        <label>Email</label><br/>
        <input type="text" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <label>password</label><br/>
        <input type="text" value={password} name="password" onChange={(e)=>setPass(e.target.value)}/><br/><br/>
        <label>Conatct No.</label><br/>
        <input type="text" value={contact} name="contact" onChange={(e)=>setCnt(e.target.value)}/><br/><br/>
        <button type="submit" onClick={submitForm}>Save</button>
    </div>
)
}

export default Add