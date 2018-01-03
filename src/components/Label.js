import React from 'react';

const Label = ({item, index}) => {
  return (
      <span key={index} className="label label-warning">{item}</span>

  );
}


export default Label ;
