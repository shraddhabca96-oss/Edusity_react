import React from 'react';
import './Title.css';

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <p className="subtitle">{subtitle}</p>
      <h2 className="main-title">{title}</h2>
    </div>
  );
};

export default Title
