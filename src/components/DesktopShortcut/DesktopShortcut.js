import React from 'react';
import classes from './DesktopShortcut.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import ReactTooltip from 'react-tooltip';
import Draggable from 'react-draggable';
import * as assets from '../../assets/index';

const desktopShortcut = props => {
    let name = props.appID;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let content = <div className={classes.Shortcut} onDoubleClick = {() => props.activate(props.appID)}>
                    <img src={assets[props.appID]}/>
                    <div className = {classes.BottomRow}>
                        <p>{name}</p>
                        <img src={assets.shortcut}></img>
                    </div>
                  </div>;

    if(props.link){
        content = <div className={classes.Shortcut} onDoubleClick = {() => window.open("http://billytestserver.co.uk/")}>
                    <img src={assets[props.appID]}/>
                    <div className = {classes.BottomRow}>
                        <p>{props.title}</p>
                        <img src={assets.shortcut}></img>
                    </div>
                  </div>;
    }

    return  (
        <Draggable>
        {content}
        </Draggable>
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

export default connect(mapStateToProps, mapDispatchToProps)(desktopShortcut);