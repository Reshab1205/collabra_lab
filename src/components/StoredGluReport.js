import React from 'react'

const StoredGluReport = () => {
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
        <th scope="row">Fasting Blood Sugar</th>
        <td>123 dl/Cmm</td>
      </tr>
      <tr>
        <th scope="row">Post Prandial Blood Sugar</th>
        <td>456 dl/Cmm</td>
      </tr>
      <tr>
        <th scope="row">HbA1c</th>
        <td>5 dl/Cmm</td>
      </tr>
      <tr>
        <th scope="row">Calcium</th>
        <td>123 dl/Cmm</td>
      </tr>
      
    </tbody>
  </table>
    )
}

export default StoredGluReport;