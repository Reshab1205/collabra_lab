import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", password: "", role: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, password, role } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, password, role
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration Successfull")
            console.log(" Successfull Registration");

            history.push("/admin-login");
        }
    }


    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">

                            <form method="POST" className="register-form" id="register-form">
                                <h2 className="form-title">Please Register</h2>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Enter Full Name *"></input>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Enter Email *"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Enter Password *"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">
                                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="role" id="role" autoComplete="off"
                                        value={user.role}
                                        onChange={handleInputs}
                                        placeholder="Role *"></input>

                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="register" className="form-submit"
                                            value="Register" onClick={PostData}
                                        />

                                    </div>

                                </div>
                            </form>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}
export default Signup;