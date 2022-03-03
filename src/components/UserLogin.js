import React, { useState} from "react";
import { useHistory } from "react-router-dom";


const UserLogin = () => {

    const history = useHistory();
   
    const [user, setUser] = useState({
        email: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const loginUser = async (e) => {
        let email, password;
        e.preventDefault();

        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        
        if(!res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login successfull");
            history.push("/dashboard");
        }
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
                            <form  method="POST" className="register-form" id="register-form" >
                                <h2 className="form-title" id="user-login-title"> User Login !</h2>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Enter your Email *" />



                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                      value={user.password}
                                      onChange={handleInputs}
                                    placeholder="Enter your Password *" />

                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="register" className="form-submit"
                                        value="Login"
                                        onClick={loginUser}
                                    />

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
export default UserLogin;