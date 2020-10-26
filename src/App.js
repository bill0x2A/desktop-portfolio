import Taskbar from './containers/Taskbar/Taskbar';
import Window from './components/Window/Window';
import Sticky from './components/Sticky/Sticky';

import { connect } from 'react-redux';

const app = props => {
  return (
    <div className="App">
      {props.stickies.map(sticky => {
        return <Sticky windowID = {sticky.windowID}/>
      })}
      {props.windows.map(window => {
        return <Window windowID = {window.windowID}/>
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
