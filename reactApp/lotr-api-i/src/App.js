import React from 'react';
import { Route } from 'react-router-dom'
import { UsersList, User, AddUserForm } from './components'

function App() {
  return (
    <>
     <Route exact path='/' component={UsersList}/>
     <Route exact path='/user' component={User}/>
     <Route exact path='/add-user-form' component={AddUserForm}/>
    </>
  );
}

export default App;
