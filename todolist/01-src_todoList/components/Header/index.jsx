import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
    handleKeyUp = (event)=>{
        const {keyCode,target} = event
        // 判断是否是回车键
        if(keyCode !== 13)return
        //添加的todo不能为空
        if(target.value.trim()===''){
            alert("任务不能为空")
            return
        }
        const todoList = {id:nanoid(),name:target.value,done:false}
        //给App传值
        this.props.addTode(todoList)
        //清空输入
        target.value=''
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        )
    }
}
