import React, { Component } from 'react';

import { connect } from 'react-redux';
class Shop extends Component {
    render(){
        let { state } = this.props;
        return(
            <div>
                测试
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { shop } = state
    return {
        state: shop
    }
}

// function buildActionDispatcher(dispatch) {
//   return {
//       actions: bindActionCreators(actionsAll, dispatch)
//     }
// }

export default connect(mapStateToProps,null)(Shop);
