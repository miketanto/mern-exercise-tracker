import React, {useState, useEffect}from 'react'
import axios from 'axios';

function CreateUser() {
    const [username,setUsername]=useState('');
    
    function onChangeUsername(e){
        setUsername(e.target.value);
    };
    
    function onSubmission(e){
        e.preventDefault();

        const user = {
            username: username,
        };
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data));
        
        setUsername('');
    };

    return (
        <div>
            <h3>Create New User</h3>
      <form onSubmit={(e)=> onSubmission(e)}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={username}
              onChange={(e)=>onChangeUsername(e)}
              />
        </div>
       
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
        </div>
    )
}

export default CreateUser
