// import s from './app-bar.module.css';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import {logout}  from 'redux/auth/authFormOperations';
import { useSelector, useDispatch } from 'react-redux';

const AppBar = () => {
   const idLogenIn = useSelector(authSelectors.getIsLogedIn)
   const userName = useSelector(authSelectors.getUserName)
   const dispatch = useDispatch()
  //  const logoutUser = () => {
  //    dispatch(logout())
  //  }
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {idLogenIn ?  <div>
        <span>{userName}</span>
        <button type="button" onClick={()=>{dispatch(logout())}}>logout</button>
      </div> :
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>}
     
    </div>
  );
};

export default AppBar;
