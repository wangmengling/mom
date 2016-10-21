import React, { Component, PropTypes } from 'react';
import './Layout.scss'

import {cyan500, cyan600, cyan700,deepOrange500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const muiTheme = getMuiTheme({
            palette: {
                textColor: cyan500,
            },
            appBar: {
                height: 50,
            },
        });

import Menu from '../../../Components/Menu'
import TabsExampleSimple from '../../../Components/TabsExampleSimple'




export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node
    };
    
    render(){
        
        return(
            <div className='LayoutRoot'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <div>
                            <AppBar title="My AppBar" />
                        </div>
                        <div>
                            <Menu />
                        </div>
                    </div>  
                </MuiThemeProvider>
            </div>
        );
    }
}