import * as actionTypes from '../actions/actionTypes';
import * as assets from '../../assets/index';

const initialState = {
    currentZ : 0,
    windows : [],
    stickies : [
        {
            windowID : "4nm380945nv"
        }
    ],
    applications : [
        {
            appID: "billfinex",
            logo : assets.v
        },
        {
            appID : "sticky",
            logo  : assets.sticky
        }
    ]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.OPEN_WINDOW:
            let newWindowID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            if(action.appID === "sticky"){
                return {
                    ...state,
                    stickies : state.stickies.concat({windowID : newWindowID})
                }
            }
            return {
                ...state,
                windows : state.windows.concat({appID : action.appID, windowID : newWindowID})
            }
        case actionTypes.CLOSE_WINDOW:
            return {
                ...state,
                windows : state.windows.filter(window => window.windowID !== action.windowID)
            }
        case actionTypes.CLOSE_STICKY:
                return {
                    ...state,
                    stickies : state.stickies.filter(window => window.windowID !== action.windowID)
                }
        case actionTypes.CLICK_WINDOW:
                return {
                    ...state,
                    currentZ : state.currentZ + 1
                }
    }
    return state;
};

export default reducer;