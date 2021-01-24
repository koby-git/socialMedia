import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((ed) => (
    <tr key={ed._id}>
      <td>{ed.school}</td>
      <td className='hide-sm'>{ed.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{ed.from}</Moment> -{' '}
        {ed.to === null ? 'Now' : <Moment format='YYYY/MM/DD'>{ed.to}</Moment>}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => {
            deleteEducation(ed._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <p className='lead my-1'>Education Credentials</p>

      <table className='table '>
        <tr>
          <th>School</th>
          <th>Degree</th>
          <th>Years</th>
        </tr>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.object.isRequired,
};

export default connect(null, { deleteEducation })(Education);
