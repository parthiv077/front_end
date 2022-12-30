import axios from 'axios';
import { useState } from "react";

function Registration()
{

    const[Fname,setFname] = useState("");
    const[Lname,setLname] = useState("");
    const[MyEmail,setEmail] = useState("");
    const[MyPassword,setPassword] = useState("");

    async function save(event)
    {
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/users",
            {
                firstName : Fname,
                lastName : Lname,
                email: MyEmail,
              password : MyPassword

        });
            alert("User Registration Succesfully");
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
        }
        catch(err)
        {
            alert("User Registration Fail");
        }
    }
    return (
        



        
        <div class='container mt-4'>
            <form>
            <div class="form-group">
                    <label >FirstName</label>
                    <input type="text" class="form-control" id="Fname"  placeholder="Enter First Name"
                        value = {Fname}
                        onChange={(event)=>{
                            setFname(event.target.value);
                        }

                        }/>

             </div>

            <div class="form-group">
                <label for="Last Name">LastName</label>
                <input type="text" class="form-control" id="Lname"  placeholder="Enter Last Name"
                value = {Lname}
                        onChange={(event)=>{
                            setLname(event.target.value);
                        }

                        }
                        />
            </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="MyEMail" aria-describedby="emailHelp" placeholder="Enter email"
                    value = {MyEmail}
                    onChange={(event)=>{
                        setEmail(event.target.value);
                    }}
                    />
                    

                        
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="MyPassword" placeholder="Password"
                    value = {MyPassword}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }

                    }/>                    
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={save}>Register</button>
             </form>
        </div>
    
    );
}

export default Registration;