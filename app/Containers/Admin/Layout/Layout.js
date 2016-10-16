import React, { Component, PropTypes } from 'react';
import './Layout.scss'

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node
    };
    render(){
        return(
            <div className='LayoutRoot'>
                <div className='LayoutTop'>
                    Top
                </div>
                <div className='LayoutContent'>
                    <div className='ContentLeft'>
                        Left
                    </div>
                    <div className='ContentRight'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}