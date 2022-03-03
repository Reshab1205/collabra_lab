import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const UserLoginDashboard = () => {

  const history = useHistory();
   
    const [user, setUser] = useState({
        email: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const loginUser = async (e) => {
        let email, password;
        e.preventDefault();

        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        
        if(!res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login successfull");
            history.push("/enter-samples");
        }
    }
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
      <th scope="col">Sample ID</th>
      <th scope="col">Heamatology</th>
      <th scope="col">Thyroid Profile</th>
      <th scope="col">Glucometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jul 22,2021, 3:11:05 PM</td>
      <td>6</td>
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

export default UserLoginDashboard;