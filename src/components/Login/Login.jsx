import styles from './login.module.css'
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authFormOperations';

const Login = () => {

  const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '',
        password: '',
      });
    
      const reset = () => {
       setState({
        email: '',
        password: '',
        });
      };

      const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value, });
      };

      const handleSubmit = event => {
        event.preventDefault();
        dispatch(login({email, password}))
        reset()
      }


      const { email, password } = state;
    return (
        <div className={styles.box}>
          <h2>Login Form</h2>
      <form
        className={styles.form}
        action="submit"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
    )
}
export default Login;