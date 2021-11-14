import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './login.css'
import { useHistory } from 'react-router';
import boat from '../../assets/images/unknown.png'
import {Button, TextField} from "@material-ui/core"

const users= [ 
    {username: "aniq123", password: "password"},
    {username: "hack123", password: "password"}
]

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault();
        let userFound = false
        let usernameFound = false
        let passwordFound = false
        usernameFound = users.find(user => user.username === username)
        passwordFound = users.find(user => user.password === password)
        userFound = !!usernameFound && !!passwordFound
        console.log(
            userFound
        )
        if(userFound) history.push("/2fa")
    }
    return(
        <div className= "login-container">
         <div className="login-wrapper">
            <h1 style= {{color: 'black'}}>Phisherman</h1>
                <label>
                <TextField value={username} type="text" label="Username" variant="outlined" onChange={e => setUserName(e.target.value)} style={{marginBottom: "6px", backgroundColor: "white"}}/>
                </label>
                <label>
                <TextField value={password} type="password" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} style={{marginBottom: "6px", backgroundColor: "white"}} />
                </label>
                <div>
                <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                </div>
        </div>
            <div className = "image-panel">
                <img src={boat} alt="" width= "800" height="600" />
            </div>
        </div>
    

    )
  }