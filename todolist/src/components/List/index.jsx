import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
  state={
    userInfo:[],
    isFirst:true,//是否第一次打开页面
    isLoading:false,//是否加载中
    err:''//储存错误信息
  }
  componentDidMount(){
    //订阅消息
    PubSub.subscribe('hui',(_,newState)=>{
      this.setState(newState)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }
    render() {
      const {userInfo,isLoading,isFirst,err} = this.state
        return (
            <ul className="todo-main"> 
            {
                todos.map((todos) => {
                    return <Item key={todos.id} {...todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
                
            }
            </ul>
        )
    }
}
