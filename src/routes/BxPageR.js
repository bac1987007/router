import React from 'react';
import { connect } from 'dva';

import BxPageC from '../components/BxPage';

const bxPageR = () => {
  return (
    <div >
      <BxPageC />
    </div>
  );
};

bxPageR.propTypes = {
};

function mapStateToProps(a){
  return a;
}

export default connect(mapStateToProps)(bxPageR);
