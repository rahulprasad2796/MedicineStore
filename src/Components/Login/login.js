import React, { useState } from 'react'
import { Redirect } from 'react-router';
import "./login.css";

const Login = () => {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState("");

    const userAdmin = {
        name: "test-admin",
        pass: "test-admin"
    }

    const userSales = {
        name: "test-sales",
        pass: "test-sales"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === userAdmin.name && pass === userAdmin.pass) {
            alert("Admin"); 
            setRedirect("/adminstore");

        } else if (name === userSales.name && pass === userSales.pass) {
            alert("Sales"); 
            setRedirect("/salesorder");
        } else {
            alert("No user data found.");
        }
    }

    return ( 
        <div id="main">
            <div id="form">
            <form onSubmit={handleSubmit}>
                {redirect && <Redirect to={redirect}/>}
                <label>Login Details</label>
                <br/>
                <label for="username">Username</label>
                <br/>
                <input type="text" placeholder="username" name="username" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br/>
                <label for="password">Password</label>
                <br/>
                <input type="password" placeholder="password" name="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                <br/>
                <input type="submit" value="Login"/>
            </form>
            </div>
        </div>
    );
}
 
export default Login;

