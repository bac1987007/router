import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link,hashHistory } from 'dva/router';
import {connect} from "dva/index";

function BxPage({ dispatch, param }) {

  // componentWillReceiveProps(nextProps) {
  //   console.log("b",nextProps);
  //   if (nextProps.param != {}) {
  //       console.log(nextProps.param);
  //   }
  // }
    // var data = this.props.location.state;
    console.log("======="+param);
    return (
      <div >
        B页面接收A页面参数
        {param}
      </div>
    );


}

function mapStateToProps(state) {
  const { param } = state.users100;
  return {
    param
  };
}

export default connect(mapStateToProps)(BxPage);


