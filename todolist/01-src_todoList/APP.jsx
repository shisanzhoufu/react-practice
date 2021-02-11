import React,{Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css'
export default class App extends Component{
    state = {
        todos:[
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:false},
            {id:3,name:'写代码',done:false}
        ]
    }
    //向header传递一个函数，header通过函数回传数据
    addTode = (todoList)=>{
        const todos = this.state.todos
        const newTodo = [todoList,...todos]
        this.setState({todos:newTodo})
    }
    updateTodo=(id,done)=>{
        //获取状态中的todo
        const {todos} = this.state
        //处理数据
        const newTodos = todos.map((todos)=>{
            if(todos.id === id) return {...todos,done}
            else return todos
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((item)=>{
           return item.id !== id
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    //用于全选
    checkAllTodo=()=>{
        const {todos} = this.state
        const newDone = todos.every(item=>item.done)
        const newTodos = todos.map(item=> {
            return {...item,done:!newDone}
        })
        this.setState({todos:newTodos})
    }
    //删除已完成
    clearAlltodo=()=>{
        const {todos} = this.state
        const newTodos = todos.filter((item)=>{
            return item.done === false
         })
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTode={this.addTode}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAlltodo={this.clearAlltodo}/>
                </div>
            </div>
        )
    }
}