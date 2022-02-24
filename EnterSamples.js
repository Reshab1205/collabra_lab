import React from 'react'

const EnterSamples = () => {
  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form"></div>
          <form className="register-form" id="register-form">
            <h2 className="form-title">Create Test</h2>
            <form className=" ser form-inline my-2 my-lg-0" id='search-sample-box'>
              <input className="form-control mr-sm-2 " type="search" placeholder="search patient" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                Heamatology
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                Glucometry
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                Thyroid Profile
              </label>
            </div>
            <button id='search-sample' className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default EnterSamples