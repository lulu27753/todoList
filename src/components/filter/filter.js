import React from 'react';
import Link from './link.js';
import { ALL, COMPLETED, UNCOMPLETED } from '../constant.js'

import './style.css';

const Filters = () => {
  return (
    <p className="filters">
      <Link filter={ALL}> {ALL} </Link>
      <Link filter={COMPLETED}> {COMPLETED} </Link>
      <Link filter={UNCOMPLETED}> {UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;
