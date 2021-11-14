import React, {useState} from 'react'
import { useHistory } from 'react-router';
import './auth.css'
import boat from '../../assets/images/unknown.png'
import {Button, TextField} from "@material-ui/core"

const codes= [ 
    {twoFA: "1234"}
]

export default function Auth() {
    const [code, setCode] = useState();

    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault();
        let twoFACodeFound = false
        twoFACodeFound = codes.find(knownCode => knownCode.twoFA === code)
    
        if(twoFACodeFound) history.push("/")
    }
    return(
        <div className= "auth-container">
            <div className="auth-wrapper">
                <h1 style={{color: 'black'}}>2FA VERIFICATION</h1>
                <label>
                    <TextField value={code} type="text" label="2FA Code" variant="outlined" onChange={e => setCode(e.target.value)} style={{marginBottom: "6px", backgroundColor: "white"}}/>
                </label>
                <div>
                    <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                </div>
            </div>
            <div className = "img-p">
                <img src={boat} alt="" width="800" height="600" />
            </div>
        </div>
        
    )
  }
