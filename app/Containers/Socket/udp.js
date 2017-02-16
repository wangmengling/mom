import React,{Component} from 'react';
import '../Login/login.scss'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionsAll from '../../Actions/udpAction';

class UDP extends Component {


  constructor(props){
    super(props)
    this.state = {
      context:"wo"
    }
   }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({ "context": e.target.value })
  }

  commit = e => {

      var params = {
        context:this.state.context,
      }
      this.props.actions.sendMessage(params)
  }

    render(){
        let { state ,actions} = this.props;
        // console.log(this.state)
        return(
            <div className="login">
                <div className="loginBoard">
                    <div className="inputContent">
                        <input   className="inputText" value={this.state.context} onChange={this.handleChange}   placeholder="添加内容"/>
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
    const { udpReducer } = state
    return {
        state: udpReducer
    }
}

function buildActionDispatcher(dispatch) {
  return {
      actions: bindActionCreators(actionsAll, dispatch)
    }
}

export default connect(mapStateToProps,buildActionDispatcher)(UDP);
