import React,{Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css'
export default class App extends Component{
    state = {
        todos:[
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:true},
            {id:3,name:'写代码',done:true}
        ]
    }
    //向header传递一个函数，header通过函数回传数据
    addTode = (todoList)=>{
        const todos = this.state.todos
        const newTodo = [todoList,...todos]
        this.setState({todos:newTodo})
    }
    render(){
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTode={this.addTode}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}