import React, { Component } from 'react';
import classes from './Window.module.css';
import Draggable from 'react-draggable';
import * as assets from '../../assets/index';
import { Resizable, ResizableBox } from 'react-resizable';
import Billfinex from '../../subapps/billfinex/App';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { timeHours } from 'd3';
import ImageViewer from '../ImageViewer/ImageViewer';


class Window extends Component {

    state = {
        maximised : false,
        zIndex : null
    }

    maximise = () => {
        const maximise = this.state.maximised;
        this.setState({maximised: !maximise});
    }

    updateZHandler = () => {
            this.setState({zIndex : this.props.z + 1});
    }

    render () {
        let content = null;
    

        switch(this.props.appID){
            case "billfinex":
                content = <Billfinex/>
                break;
            case "imageviewer":
                content = <ImageViewer/>
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
                      }}
                      style = {{zIndex : this.state.zIndex}}>
            <div style={{height:"100%"}}
                 onClick ={() => {
                     this.props.clicked(this.props.windowID);
                     this.updateZHandler();
                     }}>
            <div className = {[classes.Header, "handle", this.state.maximised ? classes.Maximised : null].join(' ')}>
                <img src={assets[this.props.appID]} alt={this.props.appID}/>
                <h1>{this.state.zIndex}</h1>
                {this.props.appID[0].toUpperCase() + this.props.appID.substring(1)}
                <div className={classes.Buttons}>
                    <div onClick = {this.maximise} className = {[classes.Maximise, classes.Button].join(' ')}></div>
                    <div onClick = {this.minimise}className = {[classes.Minimise, classes.Button].join(' ')}></div>
                    <div onClick = {() => this.props.close(this.props.windowID)} className = {[classes.Close, classes.Button].join(' ')}></div>
                </div>
            </div>
            <div className={[classes.Window, this.state.maximised ? classes.Maximised : null].join(' ')}>
                {this.props.children}
                {content}
            </div>
            </div>
            </ResizableBox>
            </Draggable>

        )
    }
    componentDidMount = () => {
        this.props.resize(400);
        this.setState({zIndex : this.props.z + 1});
        this.props.clicked(this.props.windowID);
    }
}



const mapStateToProps = state => {
    return {
      windows : state.windows,
      z : state.currentZ,
      latestClicked : state.latestClicked
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        close   : windowID  => dispatch({type : actionTypes.CLOSE_WINDOW, windowID : windowID}),
        resize  : width     => dispatch({type : actionTypes.RESIZE_WINDOW, width: width}),
        clicked : windowID  => dispatch({type : actionTypes.CLICK_WINDOW, windowID : windowID})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Window);