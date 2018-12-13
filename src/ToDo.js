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
                            this.remAllVal = this.remAllVal.bind(this);  
                            this.handleClick = this.handleClick.bind(this);                         
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
               
            animationPen() { 
              //--------get last string coordinats
                if(document.getElementById('list').lastChild){
                  var elem=document.getElementById('list').lastChild;                                   
                }
                else{
                  var elem=document.getElementById('list');                                   
                };
                var top=elem.getBoundingClientRect().top;
                var left=elem.getBoundingClientRect().left;
                
                //console.log(top);
                //console.log(left);

                var pen=document.getElementById('pencil');
                
                //--------set style rules
                let styleSheet = document.styleSheets[0];                         
                     
                let keyframes =
                `@-webkit-keyframes move {
                    50% { 
                     transform:translate(-150px);                   
                    }                                       
                    60% {                                       
                      transform:translate(-180px) rotate(2deg);
                    } 
                    70% {                                       
                      transform:translate(-220px) rotate(-2deg);
                    }
                    80%{
                    transform:translate(-220px) rotate(2deg);                    
                    } 
                    90%{
                    transform:translate(-240px) rotate(-2deg);                    
                    }
                    100%{
                    transform:translate(-250px) rotate(2deg);                    
                    }                     
                }`;
             
              styleSheet.insertRule(keyframes, styleSheet.cssRules.length);  
              
               pen.style.top=top-190+'px';
               pen.style.left=left+280+'px';               
               pen.style.animation='move 1s alternate linear';                            
            }
            animationClear(e){
              var pen=document.getElementById('pencil');
              pen.style.animation='';            
            }
            handleClick (e) {
              this.animationClear();
              this.animationPen(e);
              this.handleSubmit(e);                
              }

            remAllVal() {
              console.log(this);
              this.setState({items:[]});
              localStorage.clear();
            }     

            render() {
              let style = {
                top:'42%',
                left:'75%'               
              }
                return (
                    <div className="App">
                       <Header items={this.state.items}/>                                              
                       <List items={this.state.items} />
                        <form className="in">
                           <input id="inp" type="text" value={this.state.message}  onChange={this.handleChange} placeholder="введите задание"/>
                           <button className="btn btn-add" onClick={this.handleClick}>добавить</button>
                           <button className="btn btn-delete fa fa-times" onClick={this.remAllVal}>УДАЛИТЬ ВСЕ</button>
                        </form> 
                        <div  className="pen" id="pencil" style={style}>
                          <img src="/assets/images/edit.png" alt="img" className="pencil"  />
                        </div>           
                    </div>
                );
            }
        };
       

export default ToDo;
  