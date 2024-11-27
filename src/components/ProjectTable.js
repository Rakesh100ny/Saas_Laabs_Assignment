import React from 'react';
import PropTypes from 'prop-types';

const ProjectTable = ({ projects, startIndex }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Percentage Funded</th>
          <th scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => {
          return (
            <tr key={project.id || index}>
              <td>{project['s.no']}</td>
              <td>{project['percentage.funded']}</td>
              <td>{project['amt.pledged']}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default ProjectTable;