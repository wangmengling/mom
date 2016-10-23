import React, {Component, PropTypes} from 'react';

import SocialPerson from 'material-ui/svg-icons/social/person-outline';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import './IconContentButton.scss'

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  person: {
      color:'#FFFFFF',
      width:50,
      height:50
  }
};

export default class IconContentButton extends Component {
    render(){
        return(
            <div className='IconContent'>
                <div className='Icon'>
                    <SocialPerson style={styles.person} />
                </div>
                <div className='Content'>
                    <div>
                        <h1>
                            NewUsers
                        </h1>
                    </div>
                    <div>
                        213用户
                    </div>
                </div>
            </div>
        )
    }
}