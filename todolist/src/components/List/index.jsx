import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class List extends Component {
  static propTypes = {
    userInfo:PropTypes.array.isRequired
}
    render() {
      const {userInfo,isLoading,isFirst,err} = this.props
      console.log(userInfo)
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
