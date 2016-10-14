import React,{Component} from 'react';
import './login.scss'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionsAll from '../../Actions/user';

class Login extends Component {


  constructor(props){
    super(props)
    this.state = {
      username:"",
      password:""
    }

   }
  // handleChange(name,event) {
  //   console.log(name)
  //   console.log(event)
  //   var newState={};
  //   newState[name]=event.target.value;
  //   this.setState(newState);
  // }
  handleChange = e => {
    this.setState({ "username": e.target.value })
  }

  handleChangePassWord = e => {
    this.setState({ "password": e.target.value })
  }

  commit = e => {
      var params = {
        username:this.state.username,
        password:this.state.password
      }
      this.props.actions.login(params)
  }

    render(){
        let { state ,actions} = this.props;
        // console.log(this.state)
        return(
            <div className="login">
                <div className="loginBoard">
                    <div  className="loginTitle">
                        <font className="loginTitleFont">SIGN IN</font>
                    </div>
                    <div className="inputContent">
                        <input   className="inputText" value={this.state.username} onChange={this.handleChange}   placeholder="用户名"/>
                        <input  className="inputText"  value={this.state.password} onChange={this.handleChangePassWord} placeholder="密码"/>
                    </div>
                    <div className="commit">
                    个苹果
                    <button  onClick={this.commit} className="commitButton">登录</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state
    return {
        state: user
    }
}

function buildActionDispatcher(dispatch) {
  return {
      actions: bindActionCreators(actionsAll, dispatch)
    }
}

export default connect(mapStateToProps,buildActionDispatcher)(Login);
