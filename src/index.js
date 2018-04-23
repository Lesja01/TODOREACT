import "babel-polyfill"; 
import '../src/css/style.css';
import 'font-awesome/css/font-awesome.css';

import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";

import ToDo from './ToDo' ;

  var mas = []; 
  var app = document.getElementById('content');
        
  ReactDOM.render(<ToDo />, app);
  