import React from 'react';
import classes from './Dropdown.module.css';
import {connect} from 'react-redux';

const dropdown = (props) => {
    let content = <div className = {classes.NoShow}></div>,
        rotate = classes.Arrow;

    if(props.show){
        content = <div className = {classes.Content}>{props.children}</div>;
        rotate = [classes.Rotate, classes.Arrow].join(' ');
    }

    return (
        <div className={classes.Container} style={props.dynamic ? {width : props.width - 516} : null}>
            <div onClick = {props.click} className = {classes.Header}><span className={rotate}>&#10148;</span>  {props.name}</div>
            {content}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        width : state.width
    } 
}


export default connect(mapStateToProps, null)(dropdown);