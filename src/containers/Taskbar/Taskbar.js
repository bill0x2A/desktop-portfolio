import React, { Component } from 'react';
import classes from './Taskbar.module.css';
import {appList} from '../../store/apps';

import Time from '../../components/Time/Time';
import HourglassLogo from '../../components/HourglassLogo/HourglassLogo';
import TrayApplication from '../../components/TrayApplication/TrayApplication';

class Taskbar extends Component {

    render(){
        return (
            <div className={classes.Taskbar}>
                <div style={{display : 'flex'}}>
                <HourglassLogo/>
                {appList.map(app =>{ 
                return (<TrayApplication appID = {app.appID}
                                        />)})}
                
                </div>
                <Time/>
            </div>
        )
    }
}


export default Taskbar;