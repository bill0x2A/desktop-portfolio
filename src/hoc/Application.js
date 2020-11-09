import React from 'react';
import {connect} from 'react-redux'
import { Resizable, ResizableBox } from 'react-resizable';
import Window from '../components/Window/Window';
import Draggable from 'react-draggable';
import * as apps from '../store/apps';
import * as actionTypes from '../store/actions/actionTypes';

import Billfinex from '../subapps/billfinex/App';
import Sticky from '../components/Sticky/Sticky';
import Imageviewer from '../components/ImageViewer/ImageViewer';
import Calculator from '../components/Calculator/Calculator';


const application = props => {

    let appInfo = apps[props.appID];

    const appInit = (aID, wID) => {
        switch(aID) {
            case "billfinex":
                return <Billfinex/>
            case "imageviewer":
                return <Imageviewer/>
            case "sticky":
                return <Sticky windowID={wID}
                                close={() => props.close(wID)}
                                click = {() => props.clicked(wID)}/>
            case "calculator":
                return <Calculator windowID={wID}
                                   close={() => props.close(wID)}
                                   click = {() => props.clicked(wID)}/>
        }
    }

    if(appInfo.defaultWindow){
        return (
                <Window appID ={appInfo.appID}
                        windowID = {props.windowID}
                        close={() => props.close(props.windowID)}
                        click = {() => props.clicked(props.windowID)}>
                    {appInfo.app}
                </Window>
        )
    } else {
        return appInit(props.appID, props.windowID)
    }


}



  
  const mapDispatchToProps = dispatch => {
    return {
        close   : windowID  => dispatch({type : actionTypes.CLOSE_WINDOW, windowID : windowID}),
        clicked : windowID  => dispatch({type : actionTypes.CLICK_WINDOW, windowID : windowID})
    }
  }

export default connect(null, mapDispatchToProps)(application);