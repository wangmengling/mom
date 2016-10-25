import React, {Component, PropTypes} from 'react';

import SocialPerson from 'material-ui/svg-icons/social/person-outline';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'; 
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
  },
  icons: {
      backgroundColor: '#ff6c60'
  }

};

export default class IconContentButton extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    };
    render(){
        const {
            name,
            number,
            color
        } = this.props;
        styles.icons.backgroundColor = color
        return(
            <div className='IconContent'>
                <div className='Icon' style={styles.icons}>
                    <AddShoppingCart style={styles.person} />
                </div>
                <div className='Content'>
                    <div>
                        <h1>
                            {number}
                        </h1>
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
            </div>
        )
    }
}