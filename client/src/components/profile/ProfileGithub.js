import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGithubRepos } from '../../actions/profile';
import { connect } from 'react-redux';

const ProfileGithub = ({ getGithubRepos, username, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos(username)]);
  return (
    <div className='repo bg-white my-1 p-1'>
      <div>
        <h4>
          <a href=''>Repo One</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          tenetur.
        </p>
      </div>

      <div>
        <ul>
          <li className='badge badge-primary'>Stars: 44</li>
          <li className='badge badge-dark'>Watchers: 20</li>
          <li className='badge badge-light'>Forks: 25</li>
        </ul>
      </div>
    </div>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  //   repos: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
