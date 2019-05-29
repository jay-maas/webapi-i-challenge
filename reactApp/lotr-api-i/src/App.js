import React from 'react';
import { Route, Link } from 'react-router-dom'
import { UsersList, UserCard, AddUserForm } from './components'
import { StateProvider } from 'react-conflux';
import { usersReducer, userReducer } from './store/reducers';
import { UsersListContext, UserListContext } from './store/context';

function App() {
  return (
    <>
    <Link to="/">Users List</Link>
    <Link to="/add-user-form">Add User</Link>
     <Route path='/' >
      <StateProvider reducer={usersReducer} stateContext={UsersListContext}>
        <UsersList />
      </StateProvider>
     </Route>
     <Route path='/:id' >
      <StateProvider reducer={userReducer} stateContext={UserListContext}>
        <UserCard />
      </StateProvider>
     </Route>
     {/* <Route exact path='/add-user-form' component={AddUserForm}>
      <StateProvider reducer={usersReducer} stateContext={UsersListContext}>
        <AddUserForm />
      </StateProvider>
     </Route> */}
    </>
  );
}

export default App;
