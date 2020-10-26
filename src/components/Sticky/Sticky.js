import React from 'react';
import classes from './Sticky.module.css';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { Resizable, ResizableBox } from 'react-resizable';

const sticky = props => {
    const content = <div style ={{zIndex : props.z.toString()}} className={classes.Note}>
                        <h2>👋 Welcome to my portfolio site!</h2>
                        <p>You can view my various projects by opening up the apps on your desktop</p>
                    </div>;
    return (
        <Draggable
            handle = ".handle">
        <ResizableBox width={400}
                      height={200}
                      minConstraints={[100, 100]}>
            <div style={{zIndex : props.z, height:"100%"}}>
            <div className = {["handle", classes.Header].join(' ')}
                onMouseDown = {props.placeOnTop}>
                <div onClick = {() => props.close(props.windowID)}
                     className={classes.Close}>&#10008;</div>
            </div>
            {content}
            </div>
        </ResizableBox>
    </Draggable>
    )
}

const mapStateToProps = state => {
    return {
        z : state.currentZ
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        close       : windowID => dispatch({type: actionTypes.CLOSE_STICKY, windowID : windowID}),
        placeOnTop  : ()       => dispatch({type: actionTypes.CLICK_WINDOW})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(sticky);