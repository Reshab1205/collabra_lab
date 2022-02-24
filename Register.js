import React from "react";

const Signup = () => {
    return (
        <>
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                       
                        <form className="register-form" id="register-form">
                        <h2 className="form-title">Please Register</h2>
                           <div className="form-group">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Enter Full Name *"></input>
                            </div>
                            <div className="form-group ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter Email *"></input>
                            </div>
                            <div className="form-group">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder="Enter Password *"></input>
                            </div>
                            <div className="form-group">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-slideshow material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Role *"></input>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="register" className="form-submit" 
                                 value="Register"
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