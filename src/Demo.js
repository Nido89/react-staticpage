import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo=({ name }) => {
    return <div className="maindiv_style">
                <h1> Hello {name} World </h1>
                <p>React is Pretty Cool</p>
             </div>
}



export default Demo;