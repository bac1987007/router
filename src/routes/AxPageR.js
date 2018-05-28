import React from 'react';
import { connect } from 'dva';

import AxPageC from '../components/AxPage';

const axPageR = () => {
  return (
    <div >
      <AxPageC />

    </div>
  );
};

axPageR.propTypes = {
};


export default connect()(axPageR);
