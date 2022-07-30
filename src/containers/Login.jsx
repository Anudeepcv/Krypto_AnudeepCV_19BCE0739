import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import {Link} from 'react-router-dom';

export default function Login(){

    const errors={
        eem:"Invalid Email Id!",
        pem:"Invalid Password!"
    };

    const credentials=[
        {
            emailid:"e1@gmail.com",
            password:"p1"
        },
        {
            emailid:"e2@gmail.com",
            password:"p2"
        }
    ];

    const [eM, sEM]=useState({});
    const [iS,sIS]=useState(false);

    const Submit=(event)=>{
        event.preventDefault();
        var {email,pwd}=document.forms[0];
        const data=credentials.find((user)=>user.emailid===email.value);
        if(data){
            if(data.password!==pwd.value){
                sEM({name:"pass",message:errors.pem});
            }
            else{
                sIS(true);
            }
        }
        else{
            sEM({name:"email",message:errors.eem});
        }
    };

    const rEM=(name)=>
    name===eM.name && (
        <div className='error'>{eM.message}</div>
    );

    const render=(
        <div>
        <head>
            <meta charSet='UTF-8'></meta>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </head>
        <body>
            <div className='navbar bg-primary'>
                <div>
                    <h2>ShopKart.</h2>
                </div>
                <div className='pl1'>
                    <Link to='/products'><a className="pl2" href='#'>Products</a></Link>
                    <Link to="/"><a className="pl3">Login</a></Link>
                    <Link to='/cart'><i color='black' className='fa fa-shopping-cart'></i></Link>
                </div>
            </div>
            <div className="div-main">
            <div className='div-form'>
                <div className='texts'>
                    Login
                </div> 
                <form onSubmit={Submit}>
                    <div className='form-outline mb-3'>
                        <input type="email" className="form-control" placeholder='Email Address' name="email" required/>
                        {rEM("email")}
                    </div>
                    <div className='form-outline mb-3'>
                        <input type="password" className="form-control" placeholder='Password' name="pwd" required />
                        {rEM("pwd")}
                    </div>
                    <div className='row mb-4'>
                        <div className="col d-flex justify-content-center">
                            <a className="nu" href='#'>New user? Create an<br></br>account</a>
                        </div>
                        <div className='col'>
                            <div className='logbtn'>
                            <input type="submit" className="btn btn-primary btn-block mb-4" value="Login"/>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </body>
        </div>
    );

    return(
    <div className='login'>
        <div className='login-form'>
            {iS?<div>Successfully Logged In!</div>:render}
        </div>
    </div>
    );
}