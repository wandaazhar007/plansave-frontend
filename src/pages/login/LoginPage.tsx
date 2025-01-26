import './login.scss';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
// import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



const LoginPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    // alert(password);
    e.preventDefault();
    try {
      // await axios.post(import.meta.env.VITE_LOGIN, {
      await axios.post('http://localhost:2002/api/login', {
        email: email,
        password: password
      });
      console.log(e.token);
      navigate('/');
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (
    <>
      <div className="authBoxLeft">
        <img src="../assets/icons/logo-login.svg" alt="" />
        <h1>Welcome to plansave</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo quia eligendi consequatur? Dolor, aut!</p>
      </div>

      <div className="authBoxRight">
        {/* <h1>test</h1> */}
        <div className="header">
          <div className="logo">
            <img src="../assets/icons/logo-plansave-login.png" alt="" className="logoHeader" />
          </div>
          <div className="tagline">Login to your account</div>
          <div className="subTagline">Lorem, ipsum dolor Lorem, ipsum dolor.</div>
          <div className="errorMessage">
            {msg}
          </div>
        </div>
        <div className="content">
          <form onSubmit={handleLogin}>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button">
              <button className='btn btn-login'>
                Login <FontAwesomeIcon icon={faSignIn} className="icon" />
              </button>
            </div>
          </form>
        </div>
        <div className="footerLogin">
          <div className="loginWith">
            <span>Or Login With</span>
          </div>
          <div className="groupIconButton">
            <div className="iconButton"><img src='../assets/icons/icons-google.png' /></div>
            <div className="iconButton"><img src='../assets/icons/icons-facebook.png' /></div>
            <div className="iconButton"><img src='../assets/icons/icons-apple.png' /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
