import axios from "axios";
import React, { useState, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import {Card} from 'react-bootstrap'


// import bootstrap  from "bootstrap"


function AdminLogin(props) {

    const history = useHistory();


    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''

    })

    

    const email = useRef()
    const password = useRef()

    useEffect(() => {
        console.log(userDetails)
    }, []);


    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')

    const AdminLogin = (event) => {
        // console.log(event);
        event.preventDefault()
        // console.log(userDetails);

        
        const isValid = validateEmail(userDetails.email)
        const isValidPass = validatePassword(userDetails.password)

        if (isValid && isValidPass) {
          
            console.log(isValid);
            setuserDetails({
                email: email.current.value,
                password: password.current.value,
            })
    
            sendData()
        } else {
            setuserDetails({
                email: email.current.value,
                password: password.current.value,
            })
            
            sendData()
            console.error('not valid');
        }
    }
    
    const validateEmail = (email) => {
        if (email) {
            setisEmailValid(true)
            setemailError('')
            return true


        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }

    const validatePassword = (password) => {
        if (password) {
            setisPasswordValid(true)
            setpasswordError('')
            return true
        } else {
            setisPasswordValid(false)
            setpasswordError('Please enter valid password')
            return false
        }
    }
    const sendData = async () => {
        console.log(userDetails);
        try {
            console.log("write here to send data to backend");
            const res = await axios.post('http://localhost:5500/login',userDetails)
             console.log(res);

        } catch (err) {
            console.log(err);
        }
    };
    
    



    return (
        <div className="inp">
         <Card className="p-3 card-form bg-warning">
            <form onSubmit={AdminLogin}>
                <div class="form-group1" >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} />
                    {!isEmailValid ? <span style={{
                        color: 'red', display: 'block',
                        fontSize: '15px'
                    }}>{emailError}</span> : null}
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" ref={password} />

                </div>
                <div class="form-group1 form-check" >

                    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}


                    {!isPasswordValid ? <span style={{
                        color: 'red', display: 'block',
                        fontSize: '15px'
                    }}>{passwordError}</span> : null}
                </div>


                <button type="submit" class="btn btn-success" >Login</button>
            </form>
            </Card>
        </div>
    )
}

export default AdminLogin