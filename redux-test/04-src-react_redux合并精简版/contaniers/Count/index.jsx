//容器组件
// import CountUI from '../../components/Count'
//引入Connect用于连接ui组件和redux
import {connect} from 'react-redux'
import {
createIncrementAction,
createDecrementAction,
createIncrementAsyncAction} from '../../redux/count_action'
import React, { Component } from 'react'
//引入store，用于获取redux中保存状态

//UI组件
class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.increment(value*1)
	}
	减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.decrement(value*1)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(value % 2 !==0){
			this.props.increment(value*1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.incrementAsync(value*1,1000)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}


// //函数1的返回值作为状态传递给UI组件
// function mapStateToProps(state){
//     return {count:state}
// }
// //函数2返回一个对象作为操作状态的方法
// function mapDispatchToProps(dispatch){
//     return {
//         increment:number=>dispatch(createIncrementAction(number)),
//         decrement:number=>dispatch(createDecrementAction(number)),
//         incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
//     }
// }

//容器组件
export default connect(
    state => ({count:state}),
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(Count)

