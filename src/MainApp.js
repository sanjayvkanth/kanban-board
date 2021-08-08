import React, {Component} from 'react';
import BoardApp from './boardApp/BoardApp.js';
import BoardAppToolBar from './boardApp/BoardAppToolBar.js';

export default class App extends Component { 
    render() {
        return(
            <div className="main-wrapper">
                <BoardAppToolBar />
                <BoardApp />
            </div>
        )
    }
}