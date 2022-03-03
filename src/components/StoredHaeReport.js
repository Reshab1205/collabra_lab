import React from 'react'

const StoredHaeReport = () => {

  return (
    <table class="table table-hover-bordered">
    <thead>
      <tr>
        <th scope="col">Test Name</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Haemoglobin</th>
        <td>13 g/dl</td>
      </tr>
      <tr>
        <th scope="row">Total Count(WBC)</th>
        <td>7890 /Cmm</td>
      </tr>
      <tr>
        <th scope="row">Neutrophills</th>
        <td>90%</td>
      </tr>
      <tr>
        <th scope="row">Lymphocytes</th>
        <td>87%</td>
      </tr>
      <tr>
        <th scope="row">Eosinophiles</th>
        <td>89%</td>
      </tr>
      <tr>
        <th scope="row">Monocytes</th>
        <td>67%</td>
      </tr>
      <tr>
        <th scope="row">Basophills</th>
        <td>54%</td>
      </tr>
      <tr>
        <th scope="row">Red Blood Cells(RBC)</th>
        <td>3123 ml/Cmm</td>
      </tr>
      <tr>
        <th scope="row">Packed Cell Volume(PCV)</th>
        <td>45%</td>
      </tr>
      <tr>
        <th scope="row">MEAN Corpuscular Volume</th>
        <td>678%</td>
      </tr>
      
      
    </tbody>
  </table>
    )
}

export default StoredHaeReport