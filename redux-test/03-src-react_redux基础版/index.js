import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root')
)

//使用了react-redux酒不用再检测了
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })