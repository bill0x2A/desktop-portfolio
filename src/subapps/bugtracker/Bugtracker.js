import React, { Component } from 'react';
import classes from './Bugtracker.module.css';

class Bugtracker extends Component {
    state = {
        addingApp : false,
        addingBug : false,
        newAppName : null,
        selectedApp : {
                name : "Portfolio",
                bugs : [
                    {
                        name : "OnMouseDown thing",
                        desc : "Calculator app does not increment z index when the react handle onMouseDown is used instead of onClick",
                        urgency : 2
                    }
                ]
            },
        apps : [
            {
                name : "Portfolio",
                bugs : [
                    {
                        name : "OnMouseDown thing",
                        desc : "Calculator app does not increment z index when the react handle onMouseDown is used instead of onClick",
                        urgency : 2
                    }
                ]
            },
            {
                name : "Billfinex",
                bugs : [
                    {
                        name : "Responsivity",
                        desc : "Intro screen is not optimised for smaller screens and "
                    }
                ]
            }
        ]
    }

    appSelectHandler = name => {
        const appSelect = this.state.apps.filter(app => app.name !== name)[0];
        this.setState({selectedApp : appSelect})
    }

    newAppChangeHandler = e => {
        this.setState({newAppName : e.target.value});
    }

    newAppHandler = () => {
        let currentApps = [...this.state.apps],
            newApp = { name : this.state.newAppName, bugs : []};
        currentApps.push(newApp);
        this.setState({apps:currentApps, addingApp : false, newAppName: null});
    }

    newBugChangeHandler = e => {
        this.setState({newBugName : e.target.value});
    }

    render(){
        return(
        <div className = {classes.Bugtracker}>
            <div className = {classes.Applist}>
                <div className = {classes.Header}>APPS</div>
                {this.state.apps.map(app => <div onClick = {() => this.appSelectHandler(app.name)} className={classes.AppEntry}>{app.name}</div>)}
                {this.state.addingApp ? (<form className={classes.AddingApp}>
                                            <input onChange = {this.newAppChangeHandler} type="text"></input>
                                            <button onClick={this.newApp} type="button" className={classes.Confirm}>&#x2714;</button>
                                        </form>) : null}
                <div onClick = {() => this.setState({addingApp : true})}className= {classes.AddButton}>+</div>
            </div>
            <div className = {classes.Buglist}>
                <div className = {classes.Header}>BUGS</div>
                {this.state.selectedApp.bugs.map(bug => <div className={classes.BugEntry}><h2>{bug.name}</h2><p>{bug.desc}</p></div>)}
                {this.state.addingBug ? (<form className={classes.AddingApp}>
                                            <input onChange = {this.newBugChangeHandler} type="text"></input>
                                            <button onClick={this.newBug} type="button" className={classes.Confirm}>&#x2714;</button>
                                        </form>) : null}
                <div onClick = {() => this.setState({addingBug : true})}className= {classes.AddButton}>+</div>
            </div>
        </div>)
    }
}

export default Bugtracker;