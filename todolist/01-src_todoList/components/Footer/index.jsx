import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleAllCheck=()=>{
        this.props.checkAllTodo()
    }
    handleClearAll=()=>{
        this.props.clearAlltodo()
    }
    render() {
        const {todos} = this.props
        //计算已完成任务和数量
        const dotoCount = todos.reduce((pre,todo)=> pre+(todo.done?1:0),0)
        //总数
        const total = todos.length
        return (
            <div>
                <div className="todo-footer">
                    <label>
                    <input type="checkbox" checked={dotoCount === total&&total !==0 ? true : false} onChange={this.handleAllCheck}/>
                    </label>
                    <span>
                    <span>已完成{dotoCount}</span> / 全部{total}
                    </span>
                    <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}
