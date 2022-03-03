import React from 'react'

const Samples = () => {
  return (
    <>
    <div>
      <div>
      <form className=" ser form-inline my-2 my-lg-0" id='search-sample-box'>
      <input className="form-control mr-sm-2 " type="search" placeholder="Enter To Search" aria-label="Search" />
</form>
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sample Date</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Sample ID</th>
      <th scope="col">Heamatology</th>
      <th scope="col">Thyroid Profile</th>
      <th scope="col">Glucometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button>View Details</button></td>
      <td><button>View Details</button></td>
      <td><button>View Details</button></td>
    </tr>
    
  </tbody>
</table>
</div>
</div>
    </>
  )
}

export default Samples