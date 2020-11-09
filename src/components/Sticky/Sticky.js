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

    updateZHandler = () => {
        this.setState({zIndex : this.props.z + 1});
}

    render () {
        console.log("STICKY ZINDEX", this.state.zIndex);
    const content = <div className={classes.Note}>
                        <h2>👋 Welcome to my portfolio site!</h2>
                        <p>You can view my various projects by opening up the apps on your desktop</p>
                    </div>;
    return (
        <Draggable
            handle = ".handle">
        <div style ={{position: "absolute", display:'flex', zIndex: this.state.zIndex}}>
        <ResizableBox width={400}
                      height={200}
                      minConstraints={[100, 100]}>
            <div style={{height:"100%", width: "100%"}}
                 onMouseDown ={() => {
                     this.props.click(this.props.windowID);
                     this.updateZHandler();
                     }}>
            <div className = {["handle", classes.Header].join(' ')}
>
                    {this.state.zIndex}
                <div onClick = {this.props.close}
                     className={classes.Close}>&#10008;</div>
            </div>
            {content}
            </div>
        </ResizableBox>
        </div>
    </Draggable>
    )}

    componentDidMount = () => {
        this.setState({zIndex : this.props.z + 1});
        this.props.click();
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