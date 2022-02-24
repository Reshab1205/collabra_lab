import React from "react";

const Login = () => {
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
                        <form className="register-form" id="register-form">
                        <h2 className="form-title">Please Login!</h2>
                        <div className="form-group">
                            <label htmlFor="email">
                                <i className="zmdi zmdi-account material-icons-name"></i>                                
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter your Email *" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="zmdi zmdi-account material-icons-name"></i>                                
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder="Enter your Password *" />

                        </div>
                        <div className="form-group form-button">
                                <input type="submit" name="signup" id="register" className="form-submit" 
                                 value="Login"
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
export default Login;