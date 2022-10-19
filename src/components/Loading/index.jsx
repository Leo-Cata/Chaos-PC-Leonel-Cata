import React from 'react';

import { CgSpinnerTwo } from 'react-icons/cg';

import './styles.scss';

const Loading = () => {
  return (
    <div className='spinner-Container'>
      <CgSpinnerTwo className='spinner' />
    </div>
  );
};

export default Loading;
