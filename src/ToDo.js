import "babel-polyfill"; 

import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom"; 
import Header from './Header';   
import List from './List';



    class ToDo  extends React.Component {
            constructor(props) {
                            super(props);
                            this.state = {message: '',
                                        items: JSON.parse(localStorage.getItem('todo-app')) || []};
                            this.handleChange = this.handleChange.bind(this);
                            this.handleSubmit = this.handleSubmit.bind(this);                            
                      }            

            handleChange(e) {                
                this.setState({message: e.target.value});
            }
           
            handleSubmit(e) {
               e.preventDefault();                             
               if (this.state.message.length==0) {
                alert ("Введите значение");  
                 return;
               };
               this.setState({message: "",
                             items: [...this.state.items, {value: this.state.message,
                                                          checked: false}
                                                          ]});
            }

            RemAllVal() {
              console.log(this);
              this.setState({items:[]});
              localStorage.clear();
            }     

            render() {
                return (
                    <div className="App">
                       <Header items={this.state.items}/>                                              
                       <List items={this.state.items} />
                        <form className="in">
                           <input id="inp" type="text" value={this.state.message}  onChange={this.handleChange} placeholder="введите задание"/>
                           <button className="btn btn-add" onClick={this.handleSubmit}>добавить</button>
                           <button className="btn btn-delete fa fa-times" onClick={this.RemAllVal.bind(this)}>УДАЛИТЬ ВСЕ</button>
                        </form>            
                    </div>
                );
            }
        };
       

export default ToDo;
  