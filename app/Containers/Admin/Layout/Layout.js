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
                    <div className='TopLogo'>
                        <img src="/images/logo.png" />
                    </div>
                    <div className='TopUser'>
                        <div className='TopSearch'>

                        </div>
                        <div className='TopSetting'>
                            <img src='/images/message.png' />
                        </div>
                        <div className='TopSetting'>
                            <img src='/images/setting.png' />
                        </div>
                    </div>
                </div>
                <div className='LayoutContent'>
                    <div className='ContentLeft'>
                        <div className='LeftCatagoryDefault'>
                            Home
                        </div>
                        <div>
                            User
                        </div>
                        <div>
                            Store
                        </div>
                    </div>
                    <div className='ContentRight'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}