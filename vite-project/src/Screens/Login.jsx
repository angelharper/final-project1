import React, { useState, useContext }  from "react";
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";
import Header from "../Component/Navigation/Header";
import axios from 'axios';
import './style.css';
import image from "../assets/image1.jpeg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setIsLoggedIn, setUserName } = useContext(LoginContext);

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

    axios.post('http://localhost:3000/api/login', { email, password })
    .then(result => {
      console.log('Server Response:', result.data);
      if (result.status === 200) {
        console.log(result.data.success);
        setIsLoggedIn(true);
        setUserName(result.data.username);
        navigate('/upload-wardrobe', {replace: true});
        
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
        //   background: "peru",
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
        <div
          style={{
            flex: ".15",
            // background: "red",
            display: "flex",
            flexDirection: "row",
            paddingTop: '17.5px',
            // backgroundImage: `url(${image})`,
          }}
        >
          <Header />
        </div>
        {/* End of flex */}

        {/* This is the second flex in column direction  */}
        <div
          style={{
            // flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5px",
            backgroundImage: `url(${image})`,
            // paddingTop: "-180%",
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
                    <label htmlFor='password' className="checkbox-label" >Agree to terms & conditions</label>
                </div>
            </form>
        </div>
      </div>
    </div>
    
    <div style={{
        // marginTop: '10px', 
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        }}>
        <Link to="/signup"> 
        <button style={{  marginTop: '20px',  fontSize: "3em", 
        border: "none", background: "none", cursor: "pointer", 
        textDecoration: "underline",
        }} > 
            Sign Up 
        </button> 
    </Link>

    </div>
    
</div>
  );
}

export default Login;
