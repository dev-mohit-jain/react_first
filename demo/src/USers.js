import { useState,useEffect } from "react";

function Users(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://test-order-nq62l.ondigitalocean.app/v1/user").then((data)=>{
            data.json().then((res)=>{
                setData(res);
            });
            
        });
    },[]);
    let abc = data.data
    console.warn("data======>",abc);

    return(
        <div>
            <h1>Home Component</h1>
            <table border="1px">
                <tbody>
                    <tr>
                    
                    <td><b>First Name</b></td>
                    <td><b>Last Name</b></td>
                    <td><b>Email</b></td>
                    <td><b>Passowrd</b></td>
                    <td><b>Contact</b></td>
                    </tr>

                    {
                        abc?.map((item,i)=>

                    <tr key={i}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.contact}</td>
                    </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;