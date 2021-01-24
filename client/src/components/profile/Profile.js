import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getProfileByID } from '../../actions/profile';
import Spinner from '../layouts/Spinner';
import ProfileExperience from './ProfileExperience';
import ProfileGithub from './ProfileGithub'
import ProfileEducation from './ProfileEducation'

const Profile = ({
  getProfileByID,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileByID(match.params.user_id);
  }, [getProfileByID,match.params.user_id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((exp) => (
                    <ProfileExperience
                      key={exp._id}
                      experience={exp}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((ed) => (
                    <ProfileEducation
                      key={ed._id}
                      education={ed}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

          <div className='profile-github'>
           <h2 className='text-primary my-1'>
               <i className='fab fa-github'></i> Github Repos
           </h2>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}

            </div>
             
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);



