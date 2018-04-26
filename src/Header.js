import "babel-polyfill"; 

import React, { Component, PropTypes } from 'react'  
import ReactDOM from "react-dom";
import ToDo from './ToDo' ;
import List from './List';
	

	export default class Header  extends React.Component {
	   saveList(items){
			console.log(localStorage);
			localStorage.setItem('todo-app', JSON.stringify(this.props.items));
			this.setState({items: JSON.parse(localStorage.getItem("todo-app"))});
			alert("Список успешно сохранен");
			return false;
		}	

		render(){

			return(
				<div className = "header">
				<h1>СПИСОК ДЕЛ: </h1>
				<button className="btn button-save fa fa-floppy-o" onClick={this.saveList.bind(this)}></button>
				</div>
				)			
		}
	}