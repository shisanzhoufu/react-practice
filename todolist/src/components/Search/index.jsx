import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    
    search=()=>{
        const {value} = this.keyWordElement
        //发布消息
        PubSub.publish('hui',{isLoading:true,isFirst:false})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                const newUserInfo = response.data.items
                PubSub.publish('hui',{isLoading:false,userInfo:newUserInfo})
            },
            error => {
                PubSub.publish('hui',{isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
        )
    }
}
