import React from 'react';
import PropTypes from 'prop-types';

const Label = ({item, index}) => {
  return (
      <span key={index} className="label label-warning">{item}</span>

  );
}


export default Label ;
