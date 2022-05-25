import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import Login from './Login';
import Register from './Register';
import AppBar from './AppBar';
import HomeView from './HomeView';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from 'redux/form/formOperations';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

const App = () => {
  const isLogenIn = useSelector(authSelectors.getIsLogedIn)
  const dispatch = useDispatch();

  useEffect(() => {
 if(isLogenIn){
  dispatch(getContactsList());
 }
  }, [isLogenIn]);

  return (
    <Section>
      <AppBar />
      <Routes>
        {isLogenIn ? <Route
          path="/"
          element={
            <>
              <h1 className="add-contact-box__heading">Phonebook</h1>
              <Form />
              <h2 className="display-cotnact-box__heading">Contacts</h2>
              <Filter />
              <List />
            </>
          }
        /> : <Route path="/" element={<HomeView/>}/>}
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Section>
  );
};

export default App;
