import React from 'react';
import classes from './Time.module.css';

const time = props => {
    
    const timeNow = new Date();
    let minutes = timeNow.getMinutes().toString();
    if(minutes.length == 1){
        minutes = "0" + minutes;
    }

    return (
        <div className={classes.Time}>
            <p>{timeNow.getHours()}:{minutes}</p>
            <p>{timeNow.getDate()}/{timeNow.getMonth()}/{timeNow.getFullYear()}</p>
        </div>
    )
}

export default time;