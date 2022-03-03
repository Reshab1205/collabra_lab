import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const EnterHaematologyReport = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    Haemoglobin: "", TotalcountWBC: "", Neutrophils: "", Lymphocytes: "", Eosinophiles: "", Monocytes: "", Basophils: "", RedBloodCells: "",
    PCV: "", MCV: ""
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

    const { Haemoglobin, TotalcountWBC, Neutrophils, Lymphocytes, Eosinophiles, Monocytes, Basophils, RedBloodCells, PackedCellVolume, MEANCorpuscularVolume,
    } = user;

    const res = await fetch("/enter-haematology-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Haemoglobin, TotalcountWBC, Neutrophils, Lymphocytes, Eosinophiles, Monocytes, Basophils, RedBloodCells, PackedCellVolume, MEANCorpuscularVolume,
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data) {
      window.alert("Enter Proper Data");
      console.log("Enter Proper Data");
    } else {
      window.alert(" Data Enter Successfull")
      console.log(" Successfull ");

      history.push("/stored-hae-report");
  }
  }
    return (
      <>
        <div className='hae-report'>
          <form method="POST">
            <h3 className='hae-title'>Create Test Report</h3>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Haemoglobin}
                    placeholder="Haemoglobin *                                                       g/dl"></input>
                </div>
                <div className="col-md-4 offset-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.TotalcountWBC}
                    placeholder="Total count / WBC *                                             /Cmm"></input>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Neutrophils}
                    placeholder="Neutrophils *                                                               %"></input>
                </div>
                <div className="col-md-4 offset-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Lymphocytes}
                    placeholder="Lymphocytes *                                                            %"></input>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Eosinophiles}
                    placeholder="Eosinophiles *                                                             %"></input>
                </div>
                <div className="col-md-4 offset-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Monocytes}
                    placeholder="Monocytes *                                                                %"></input>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.Basophils}
                    placeholder="Basophils *                                                                  %"></input>
                </div>
                <div className="col-md-4 offset-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.RedBloodCells}
                    placeholder="Red Blood Cells (RBC) *                                   mil/cmm"></input>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.PackedCellVolume}
                    placeholder="Packed Cell Volume(PCV)*                                          %"></input>
                </div>
                <div className="col-md-4 offset-md-4">
                  <input type="text" className='hae-input' name="name" id="name" autoComplete="off"
                    onChange={handleInputs}
                    value={user.MEANCorpuscularVolume}
                    placeholder="MEAN Corpuscular Volume(MCV)*                             fl"></input>

                </div>
              </div>
            </div>
            <div className="form-group form-button">
              <input type="submit" name="signup" id="hae-button" className="form-submit"
                value="Submit" onClick={PostData}
              />

            </div>
          </form>
        </div>
      </>
    )
  }

export default EnterHaematologyReport;