import React, { PropTypes } from 'react';

const Title = ({title}) => {
  return (
    <div className="row">
      <div className="medium-12 columns">
        <h1>{title}</h1>
        <hr />
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
