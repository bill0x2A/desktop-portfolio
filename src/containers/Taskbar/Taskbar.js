import React, { Component } from 'react';
import classes from './Taskbar.module.css';
import { connect } from 'react-redux';

import Time from '../../components/Time/Time';
import HourglassLogo from '../../components/HourglassLogo/HourglassLogo';
import TrayApplication from '../../components/TrayApplication/TrayApplication';

class Taskbar extends Component {

    render(){
        return (
            <div className={classes.Taskbar}>
                <div style={{display : 'flex'}}>
                <HourglassLogo/>
                {this.props.apps.map(app =>{ 
                console.dir(app);
                return (<TrayApplication appID = {app.appID}
                                        />)})}
                
                </div>
                <Time/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apps : state.applications
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);