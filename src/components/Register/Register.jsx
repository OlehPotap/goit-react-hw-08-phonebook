import styles from './register.module.css'
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authFormOperations';

const Register = () => {

  const dispatch = useDispatch()

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const reset = () => {
       setState({
        name: '',
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
        dispatch(register({name, email, password}))
        reset()
      }


      const {name, email, password } = state;
    return (
        <div className={styles.box}>
            <h2>Registration Form</h2>
      <form
        className={styles.form}
        action="submit"
        onSubmit={handleSubmit}
      >
           <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="name"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
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
          Register
        </button>
      </form>
    </div>
    )
}
export default Register;