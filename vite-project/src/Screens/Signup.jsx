import React, { useState }  from "react";
import Header from "../Component/Navigation/Header";
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSignup = () => {
    axios.post('http://localhost:3000/auth/adminsignup', { email, password })
      .then(response => {
        setMessage(response.data.message);
        // Clear input fields after successful signup
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = values;

    axios.post('http://localhost:3000/auth/adminlogin', { email, password })
    .then(result => {
      console.log('Server Response:', result.data);
      if (result.data.success) {
        console.log('Login Successful');
        navigate('/upload-wardrobe');
        
      } else {
        alert(result.data.message);
      }
      
    })
    .catch(err => {
      console.log('An error occurred:', err.message);
      alert("Invalid credentials");
      // Handle other errors
    })
  };

  return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "peru",
          display: "flex",
          flexDirection: "column",
          // backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* This is the first flex in column direction  */}
        <div
          style={{
            flex: ".15",
            // background: "red",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Header />
        </div>
        {/* End of flex */}

        {/* This is the second flex in column direction  */}
        <div
          style={{
            flex: ".85",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "-180%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "4em" }}>LOG IN</div>
            <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor='email' className="label"><strong>Email:</strong></label>
                    <input 
                      type='email' 
                      name='email' 
                      autoComplete='off' 
                      placeholder='Enter Email' 
                      onChange={(e) => setValues({...values, email: e.target.value})}
                      className="input" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password' className="label"><strong>Password:</strong></label>
                    <input 
                      type='password' 
                      name='password' 
                      placeholder='Enter Password' 
                      onChange={(e) => setValues({...values, password: e.target.value})}
                      className="input"  
                    />
                </div>
                <button type="submit" className="submit-button">Log in</button>
                <div >
                    <input type='checkbox' name='tick' id='rick' className="checkbox"/>
                    <label htmlFor='password' className="checkbox-label">Agree to terms & conditions</label>
                </div>
            </form>
        </div>
      </div>
    </div>
    <div
          style={{
            flex: ".85",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "-180%",
          }}
        >
    <div style={{marginTop: '20px'}}>
      <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              textAlign: "center",
            }} className="login-form-container"
      >
        <div style={{ fontSize: "4em" }}>Sign Up</div>
        <div>
        <label htmlFor='password' className="label"><strong>Email:</strong></label>
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
        </div>
        <div>
        <label htmlFor='password' className="label"><strong>Password:</strong></label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input" />
        </div>
      
        <button type="submit" className="submit-button" onClick={handleSignup}>Signup</button>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  </div>
</div>
  );
}

export default Signup;
