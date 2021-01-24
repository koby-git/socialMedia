import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard'></Redirect>;
  } else {
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Developer Connector</h1>
            <p className='lead'>
              Create developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className='buttons'>
              <Link to='register' className='btn btn-primary'>
                Sign up
              </Link>
              <Link to='login' className='btn'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

Landing.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToAuth = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToAuth)(Landing);
