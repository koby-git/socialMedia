import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileItem from '../profiles/ProfileItem';
import { getProfiles } from '../../actions/profile';
import { Spinner } from 'react-bootstrap';

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 class='large text-primary'>Developers</h1>
          <p class='lead'>
            <i class='fab fa-connectdevelop'></i> Browse and connect with
            developers
          </p>
          <div class='profiles'>
            {profiles.map((profile, index) => {
              return <ProfileItem key={index} profile={profile} />;
            })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
