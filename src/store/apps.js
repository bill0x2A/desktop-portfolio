import React from 'react';
import Billfinex from '../subapps/billfinex/App';
import Sticky from '../components/Sticky/Sticky';
import Imageviewer from '../components/ImageViewer/ImageViewer';
import Calculator from '../components/Calculator/Calculator';
import Bugtracker from '../subapps/bugtracker/Bugtracker';

export const billfinex =  {
    appID: "billfinex",
    defaultPosition : {x: 0, y: 0},
    resizeable : true,
    defaultWindow : true,
    app : <Billfinex/>
    }

 export const sticky = {
    appID : "sticky",
    defaultPosition : {x: 0, y: 0},
    resizeable : true,
    defaultWindow : false,
    app : <Sticky/>
    }

export const imageviewer  = {
    appID : "imageviewer",
    defaultPosition : {x: 0, y: 0},
    resizeable : true,
    defaultWindow : true,
    app : <Imageviewer/>
    }

export const calculator = {
    appID : "calculator",
    resizeable : false,
    defaultWindow : false,
    app : <Calculator/>
}

export const bugtracker = {
    appID : "bugtracker",
    resizeable : true,
    defaultWindow : true,
    app : <Bugtracker/>
}

export const appList = [billfinex, sticky, imageviewer, calculator, bugtracker];