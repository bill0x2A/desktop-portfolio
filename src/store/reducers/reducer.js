import * as actionTypes from '../actions/actionTypes';
import * as assets from '../../assets/index';

const initialState = {
    currentZ : 0,
    latestClicked : null,
    openApps : [
       { windowID : "3f9jn0293mf",
        appID : "sticky"}
    ]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.OPEN_WINDOW:
            let newWindowID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            return {
                ...state,
                openApps : state.openApps.concat({appID : action.appID, windowID : newWindowID})
            }
        case actionTypes.CLOSE_WINDOW:
            return {
                ...state,
                openApps : state.openApps.filter(window => window.windowID !== action.windowID)
            }
        case actionTypes.CLICK_WINDOW:
                return {
                    ...state,
                    currentZ : state.currentZ + 1,
                    latestClicked : action.windowID
                }
        case actionTypes.RESIZE_WINDOW:
                return {
                    ...state,
                    width : action.width
                }
    }
    return state;
};

export default reducer;