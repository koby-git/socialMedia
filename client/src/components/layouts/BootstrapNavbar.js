import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { logout } from '../../actions/auth';

export const BootstrapNavbar = ({
  auth: { isAuthenticated, loading },
  logout,
}) => {
  const authLinks = (
    <Link onClick={logout} className='nav-link'>
      <i className='fas fa-sign-out-alt'></i> Logout
    </Link>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className='link' to='/login'>
          Login
        </Link>
      </li>
      <li>
        <Link className='link' to='/register'>
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar bg='dark' variant='dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'>DevConnector</i>
        </Link>
      </h1>
      <Link className='link' to='/dashboard'>
        Dashboard
      </Link>

      <Nav className='mr-auto '>
        {!loading && isAuthenticated ? authLinks : guestLinks}
      </Nav>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-info'>Search</Button>
      </Form>
    </Navbar>
  );
};

BootstrapNavbar.propsTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(BootstrapNavbar);
