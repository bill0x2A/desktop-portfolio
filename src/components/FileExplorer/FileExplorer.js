import React from 'react';
import classes from './FileExplorer.module.css';
import * as assets from '../../assets/index';

const art = [assets.plazzy, assets.cat, assets.glue, assets.greenman, assets.luvsic, assets.me, assets.telephonePole];

const fileExplorer = props => {
    return (
        <div className = {classes.fileExplorer}>
            {art.map(artwork => {
                <img src={artwork}/>, 
            })}
        </div>
    )
}


export default fileExplorer