import React, { Component } from 'react';
import classes from './ImageViewer.module.css';
import * as assets from '../../assets/index';

const art = [assets.plazzy, assets.cat, assets.glue, assets.greenman, assets.luvsic, assets.me, assets.telephonePole];

class ImageViewer extends Component {

    state = {
        index : 0
    }

    increment = () => {
        if(this.state.index === art.length -1){
            this.setState({index : 0});
        } else {
            this.setState({index : this.state.index + 1});
        }
        return
    }

    decrement = () => {
        if(this.state.index === 0){
            this.setState({index : art.length - 1})
        } else {
            this.setState({index : this.state.index - 1});
        }
        return
    }

    render(){
    return (
        <div className = {classes.Wrapper}>
                <img src ={art[this.state.index]}/>
            <div onClick ={this.decrement} className={classes.LeftButton}>&lt;</div>
            <div onClick ={this.increment}className={classes.RightButton}>&gt;</div>
        </div>
    )}
}


export default ImageViewer;