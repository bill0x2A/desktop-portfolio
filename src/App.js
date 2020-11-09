import Taskbar from './containers/Taskbar/Taskbar';
import Window from './components/Window/Window';
import Sticky from './components/Sticky/Sticky';
import DesktopShortcut from './components/DesktopShortcut/DesktopShortcut';

import { connect } from 'react-redux';
import FileExplorer from './components/ImageViewer/ImageViewer';
import classes from './App.module.css';
import Calculator from './components/Calculator/Calculator';
import Application from './hoc/Application';


const app = props => {
  return (
    <div className="App">
      <div className = {classes.DesktopIcons}>
      <DesktopShortcut appID = "billfinex" type = "app"/>
      <DesktopShortcut appID = "jane"
                       title = "Jane Chase"
                       link = "https://www.billytestserver.co.uk/"/>
      </div>


      {props.openApps.map(app => {
        return <Application windowID = {app.windowID} appID = {app.appID}/>
      })}
      <Taskbar/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    openApps : state.openApps
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(app);
