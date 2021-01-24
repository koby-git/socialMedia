import './App.css';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layouts/Landing';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Alert from './components/layouts/Alert';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './util/setAuthToken';
import CreateProfile from './components/profile-from/CreateProfile';
import EditProfile from './components/profile-from/EditProfile';
import AddExperience from './components/profile-from/AddExperience';
import AddEducation from './components/profile-from/AddEducation';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

import Profiles from './components/profiles/Profiles';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:user_id' component={Profile} />
              <PrivateRoute
                exact
                path='/add-Experience'
                component={AddExperience}
              />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/posts/:id' component={Post} />
              <PrivateRoute
                exact
                path='/add-Education'
                component={AddEducation}
              />

              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
