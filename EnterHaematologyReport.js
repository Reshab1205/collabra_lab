import React from 'react'

const EnterHaematologyReport = () => {
  return (
    <>
    <div className='hae-report'>
        <h3 className='hae-title'>Create Test Report</h3>
    <div className="container">
  <div className="row">
    <div className="col-md-4">
    <input type="text"  className='hae-input' name="name" id="name" autoComplete="off" placeholder="Haemoglobin *                                                       g/dl"></input>
    </div>
    <div className="col-md-4 offset-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Total count / WBC *                                             /Cmm"></input>
    </div>
  </div>
  </div>
  <hr />
  <div className="container">
  <div className="row">
    <div className="col-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Neutrophils *                                                               %"></input>
    </div>
    <div className="col-md-4 offset-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Lymphocytes *                                                            %"></input>
      </div>
    </div>
  </div>
  <hr />
  <div className="container">
  <div className="row">
    <div className="col-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Eosinophiles *                                                             %"></input>
    </div>
    <div className="col-md-4 offset-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Monocytes *                                                                %"></input>
    </div>
  </div>
  </div>
  <hr />
  <div className="container">
  <div className="row">
    <div className="col-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Basophils *                                                                  %"></input>
    </div>
    <div className="col-md-4 offset-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Red Blood Cells (RBC) *                                   mil/cmm"></input>
    </div>
  </div>
  </div>
  <hr />
  <div className="container">
  <div className="row">
    <div className="col-md-4">  
      <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="Packed Cell Volume(PCV)*                                          %"></input>
    </div>
    <div className="col-md-4 offset-md-4">
    <input type="text" className='hae-input' name="name" id="name" autoComplete="off" placeholder="MEAN Corpuscular Volume(MCV)*                             fl"></input>

    </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default EnterHaematologyReport