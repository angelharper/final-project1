import React, { useState, useContext }  from "react";
import Header from "../Component/Navigation/Header";
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";
import image from "../assets/image1.jpeg";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const { setIsLoggedIn, setUserName } = useContext(LoginContext);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSignup = () => {
    axios.post('http://localhost:3000/api/register', { username, email, password })
      .then(response => {
        setMessage(response.data.message);
        // Clear input fields after successful signup
        setEmail('');
        setPassword('');
        setUsername('');
        alert("User created successfully!");
        navigate('/login',)
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
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
          opacity: 0.8
        }}
      >
        {/* This is the first flex in column direction  */}
        <div style={{
            flex: ".15",
            // background: "red",
            display: "flex",
            flexDirection: "row",
            
          }}
        >
          <Header />
        </div>
        {/* End of flex */}

        
    <div
          style={{
            // flex: ".85",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${image})`,
            // paddingTop: "-180%",
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
        <label htmlFor='username' className="label"><strong>Username:</strong></label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="input" />
        </div>
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
