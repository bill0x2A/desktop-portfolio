import React from 'react';
import classes from './HourglassLogo.module.css';

import hourglass from '../../assets/hourglass.png';

const taskbarIcon = props => {

    return  (<div className={classes.TaskbarIcon}>
                <img src={hourglass}/>
            </div>)
}


export default taskbarIcon;