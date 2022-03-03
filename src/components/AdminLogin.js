import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from "axios";

const AdminLogin = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "", password: ""
    });
    const initialValues = {
        email: '',
        password: '',

    }

    // const email = useRef()
    // const password = useRef()

    // useEffect(() => {
    //     console.log(user)
    // }, [user]);


    // const [isEmailValid, setisEmailValid] = useState(true)
    // const [emailError, setemailError] = useState('')

    // const [isPasswordValid, setisPasswordValid] = useState(true)
    // const [passwordError, setpasswordError] = useState('')


    // const isValid = validateEmail(user.email)
    // const isValidPass = validatePassword(user.password)

    // if (isValid && isValidPass) {

    //     console.log(isValid);
    //     setUser({
    //         email: email.current.value,
    //         password: password.current.value,
    //     })

    //     // sendData()
    // } else {
    //     setUser({
    //         email: email.current.value,
    //         password: password.current.value,
    //     })


    //     console.error('not valid');
    // }


    // const validateEmail = (email) => {
    //     if (email) {
    //         setisEmailValid(true)
    //         setemailError('')
    //         return true


    //     } else {
    //         setisEmailValid(false)
    //         setemailError('Please enter valid email')
    //         return false
    //     }
    // }
    // const validatePassword = (password) => {
    //     if (password) {
    //         setisPasswordValid(true)
    //         setpasswordError('')
    //         return true
    //     } else {
    //         setisPasswordValid(false)
    //         setpasswordError('Please enter valid password')
    //         return false
    //     }
    // }

    


    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const loginUser = async (e) => {
        console.log("login button pressed");
        // let email, password;
        console.log(user)
        e.preventDefault();
        // debugger
        try {
            const res = await axios.post('http://localhost:5000/signin', user)
            console.log(res)
        } catch (err) {
            console.log(err)
        }

        // if (!res.status === 400 || !data) {
        //     window.alert("Invalid Credentials");
        // } else {
        //     window.alert("Login successfull");
            history.push("/enter-samples");
        // }
    }
    const onSubmit = (values, props) => {
        console.log(values);
    }
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="sign-in-image">
                            {/* <figure>
                            <img src={loginpic} alt="Login pic" />
                            <NavLink to= "/register" className="signin-image-link">Create your account</NavLink>
                        </figure> */}

                        </div>
                        <div className="signin-form">
                            <form method="POST" className="register-form" id="register-form">
                                <h2 className="form-title" id="admin-login-title">Admin Login !</h2>
                                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                    {(props) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                                </label>
                                                <Field type="text" name="email" id="email" autoComplete="off"
                                                    value={user.email}
                                                    onChange={handleInputs}
                                                    placeholder="Enter your Email *" />



                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">
                                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                                </label>
                                                <Field type="password" name="password" id="password" autoComplete="off"
                                                    value={user.password}
                                                    onChange={handleInputs}
                                                    placeholder="Enter your Password *" />


                                            </div>
                                            <div className="form-group form-button">
                                                <Field type="submit" name="signup" id="login-button" className="form-submit"
                                                    value="Login" title="loginBtn"
                                                    onClick={loginUser}
                                                />

                                            </div>
                                        </Form>
                                    )}

                                </Formik>
                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default AdminLogin;