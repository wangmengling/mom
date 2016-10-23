import React,{Component} from 'react';
import IconContentButton from '../../../Components/IconContentButton'

import './Welcome.scss'
export default class Welcome extends Component {
    render(){
        return(
            <div className='WelcomeContent'>
                <IconContentButton />
            </div>
        );
    }
}