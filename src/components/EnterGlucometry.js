import React from 'react'

const EnterGlucometry = () => {
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
                    <form className="thyroid-form" id="thyroid-form">
                    <h2 className="form-title">Add Glucometry Report</h2>
                    <div className="form-group">
                        <label htmlFor="text">
                        </label>
                        <input className='thyroid-input' type="text" name="text" id="text" autoComplete="off" placeholder="Fasting Blood Sugar" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="text">
                        </label>
                        <input className='thyroid-input' type="text" name="text" id="text" autoComplete="off" placeholder="Post Prandial Blood Sugar" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="text">
                        </label>
                        <input className='thyroid-input' type="text" name="text" id="text" autoComplete="off" placeholder="Glycosylated Haemoglobin (HbA1C)" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="text">
                        </label>
                        <input className='thyroid-input' type="text" name="text" id="text" autoComplete="off" placeholder="Calcium" />

                    </div>
                    <div className="form-group form-button">
                            <input type="submit" name="signup" id="thyroid-button" className="form-submit" 
                             value="Submit"
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

export default EnterGlucometry