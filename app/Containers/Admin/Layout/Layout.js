import React, { Component, PropTypes } from 'react';

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node,
    };
    render(){
        return(
            <div>
                Layout
                {this.props.children}
            </div>
        );
    }
}