import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class List extends Component {
    //对接收的数据进行限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
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