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
          <div className="row">
              {
                isFirst ? <h2>输入关键词搜索用户</h2>:
                isLoading ? <h2>Loading...</h2>:
                err ? <h3>{err}</h3>:
               userInfo.map((item) => {
                 return(
                  <div className="card" key={item.id}>
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        <img alt="head_avator"  src={item.avatar_url} style={{width:'100px'}}/>
                      </a>
                      <p className="card-text">{item.login}</p>
                  </div>
                 )
                
                })
              }
          </div>
        )
    }
}
