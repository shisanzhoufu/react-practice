import React, { Component } from 'react'
import List from './components/List';
import Search from './components/Search';
export default class App extends Component{
    state={
        userInfo:[],
        isFirst:true,//是否第一次打开页面
        isLoading:false,//是否加载中
        err:''//储存错误信息
    }
    updateAppState = (newState)=>{
        this.setState(newState)
    }
    render() {
        return (
            <div>
                   <Search updateAppState={this.updateAppState}/>
                   <List {...this.state}/>
            </div>
        )
    }
}
