import React, { Component } from 'react'
import Count from './contaniers/Count'

//通过index.js provider传动store
// import store from './redux/store'
export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
			</div>
		)
	}
}
