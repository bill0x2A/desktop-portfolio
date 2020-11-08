import React, { Component } from 'react';
import classes from './Sticky.module.css';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { Resizable, ResizableBox } from 'react-resizable';

class Sticky extends Component {

    state = {
        zIndex : null
    }

    render () {
    const content = <div className={classes.Note}>
                        <h2>👋 Welcome to my portfolio site!</h2>
                        <p>You can view my various projects by opening up the apps on your desktop</p>
                    </div>;
    return (
        <Draggable
            handle = ".handle">
        <ResizableBox width={400}
                      height={200}
                      minConstraints={[100, 100]}
                      style={{zIndex : this.state.zIndex}}>
            <div style={{height:"100%"}} onMouseDown = {() => this.props.clicked(this.props.windowID)}>
            <div className = {["handle", classes.Header].join(' ')}
                onMouseDown = {this.props.placeOnTop}>
                    {this.state.zIndex}
                <div onClick = {() => this.props.close(this.props.windowID)}
                     className={classes.Close}>&#10008;</div>
            </div>
            {content}
            </div>
        </ResizableBox>
    </Draggable>
    )}

    componentDidMount = () => {
        this.setState({zIndex : this.props.z + 1});
        this.props.clicked(this.props.windowID);
    }
}

const mapStateToProps = state => {
    return {
        z : state.currentZ
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        close       : windowID => dispatch({type: actionTypes.CLOSE_STICKY, windowID : windowID}),
        clicked : windowID  => dispatch({type : actionTypes.CLICK_WINDOW, windowID : windowID})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Sticky);