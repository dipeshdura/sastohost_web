import { useState } from 'react';
import login from '../../css/Login.module.css';

function Login() {
  const handleLogin =(event)=>{
    event.preventDefault();
  }
  const [content,setContent] =useState('');
  const handleContent=(event)=>{
    
    setContent(
      event.target.value
    );
  }
  return (
    <>
    <div className={login.login}>
      <div className={login.login_box}>
        <h3>Welcome <span>{content}</span></h3>
        <div className="form">
          <form action="">
            <div className={login.form_panel}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" onChange={handleContent} />
            </div>
            <div className={login.form_panel}>
            <label htmlFor="username">Password</label>
            <input type="password" placeholder="Password" />
            </div>
            <div className={login.login_btn}>
              <button onClick={handleLogin}>Log in</button>
            </div>
          </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login