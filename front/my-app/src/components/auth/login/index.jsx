import React from "react";
import style from "./style.module.css"
import Greeting from "./greetings";


const LoginPage = () =>{
    const name = 'Alex'
    return(
        <div>
            <h1>LoginPage</h1>
            <Greeting name={name}/>
        </div>
    )
}
export default LoginPage