import './login.scss';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';



const LoginPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    alert(password);
    e.preventDefault();
    try {
      // await axios.post(import.meta.env.VITE_LOGIN, {
      await axios.post('http://localhost:2002/api/login', {
        email: email,
        password: password
      });
      navigate('/');
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (

    <section className="containerLogin">
      <div className="boxLogin">
        <div className="leftLogin">
          <div className="boxLeftLogin">
            <h1>Welcome to plansave.com</h1>

          </div>
        </div>
        <div className="rightLogin">
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
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
