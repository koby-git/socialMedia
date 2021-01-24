import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';
import { connect } from 'react-redux';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteExperience(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <p className='lead my-1'>Expirence Credentials</p>

      <table className='table '>
        <tr>
          <th>Company</th>
          <th>Title</th>
          <th>Years</th>
        </tr>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
