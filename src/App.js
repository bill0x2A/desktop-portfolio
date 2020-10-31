import Taskbar from './containers/Taskbar/Taskbar';
import Window from './components/Window/Window';
import Sticky from './components/Sticky/Sticky';
import DesktopShortcut from './components/DesktopShortcut/DesktopShortcut';

import { connect } from 'react-redux';
import fileExplorer from './components/FileExplorer/FileExplorer';


const app = props => {
  return (
    <div className="App">
      <fileExplorer/>
      <DesktopShortcut appID = "billfinex" type = "app"/>
      <DesktopShortcut appID = "jane"
                       title = "Jane Chase"
                       link = "https://www.billytestserver.co.uk/"/>

      {props.stickies.map(sticky => {
        return <Sticky windowID = {sticky.windowID}/>
      })}
      {props.windows.map(window => {
        return <Window windowID = {window.windowID} appID = {window.appID}/>
      })}
      <Taskbar/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    windows : state.windows,
    stickies : state.stickies
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(app);
