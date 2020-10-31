import React, { Component } from 'react';
import classes from './Window.module.css';
import Draggable from 'react-draggable';
import v from '../../assets/V.png';
import { Resizable, ResizableBox } from 'react-resizable';
import Billfinex from '../../subapps/billfinex/App';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { timeHours } from 'd3';


class Window extends Component {

    state = {
        maximised : false
    }

    maximise = () => {
        const maximise = this.state.maximised;
        this.setState({maximised: !maximise});
    }

    render () {
        let content = null;

        switch(this.props.appID){
            case "billfinex":
                content = <Billfinex/>
                break;
        }

        return (
            <Draggable
                handle = ".handle"
                // bounds = {{top: 0}} removed for performance purposes...
                >
        <ResizableBox width={400}
                      height={200}
                      minConstraints={[100, 100]}
                      onResizeStop = {(e, data) => {
                          if(this.props.appID === "billfinex"){
                              return this.props.resize(data.size.width);
                          } else {
                              return null;
                          }
                      }}>
            <div style={{zIndex : this.props.z, height:"100%"}}>
            <div className = {[classes.Header, "handle", this.state.maximised ? classes.Maximised : null].join(' ')}>
                <img src={v}/>
                Billfinex
                <div className={classes.Buttons}>
                    <div onClick = {this.maximise} className = {[classes.Maximise, classes.Button].join(' ')}></div>
                    <div onClick = {this.minimise}className = {[classes.Minimise, classes.Button].join(' ')}></div>
                    <div onClick = {() => this.props.close(this.props.windowID)} className = {[classes.Close, classes.Button].join(' ')}></div>
                </div>
            </div>
            <div className={[classes.Window, this.state.maximised ? classes.Maximised : null].join(' ')}>
                <Billfinex/>
            </div>
            </div>
            </ResizableBox>
            </Draggable>

        )
    }
    componentDidMount = () => {
        this.props.resize(400);
    }
}



const mapStateToProps = state => {
    return {
      windows : state.windows,
      z : state.currentZ
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        close : windowID => dispatch({type : actionTypes.CLOSE_WINDOW, windowID : windowID}),
        resize : width => dispatch({type : actionTypes.RESIZE_WINDOW, width: width})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Window);