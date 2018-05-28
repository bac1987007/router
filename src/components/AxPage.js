import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon,Button } from 'antd';
import { Link,hashHistory } from 'dva/router';

var self;
class AxPage extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      visible: false,
    };
  }
  btnClick = () =>{
    let obj = {a:1,b:2};
    self.props.dispatch({type:'users100/test',payload:obj});

  }
  render() {

    // var data = {id:123};
    // var pathAdd = {
    //   pathname:'/bx',
    //   state:data,
    // }
    // hashHistory.push(pathAdd);

    return (
      <div >
         页面参数问题
        <Button onClick={this.btnClick}>点击</Button>

      </div>
    );
  }

}
function mapStateToProps(a){
  return a;
}

export default connect(mapStateToProps)(AxPage);
