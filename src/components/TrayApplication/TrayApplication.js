import React from 'react';
import classes from './TrayApplication.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import ReactTooltip from 'react-tooltip';
import * as assets from '../../assets/index';

const trayApplication = props => {

    return  (
        <div
            className={classes.TrayApplication}
            onClick = {() => props.activate(props.appID)}
            data-tip = {props.appID}
            >
            <img src={assets[props.appID]}/>
            <ReactTooltip place = "right" type ="info" offset = {{'top' : 15}} />
        </div>
            )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        activate : appID => dispatch({type: actionTypes.OPEN_WINDOW, appID : appID})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(trayApplication);