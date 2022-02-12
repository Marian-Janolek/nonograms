import React from 'react';
import { Navbar, SelectGame as Select } from '../components';

const SelectGame: React.FC = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Select />
    </div>
  );
};

export default SelectGame;
