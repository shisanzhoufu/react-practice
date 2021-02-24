//容器组件
import CountUI from '../../components/Count'
//引入Connect用于连接ui组件和redux
import {connect} from 'react-redux'
import {
createIncrementAction,
createDecrementAction,
createIncrementAsyncAction} from '../../redux/count_action'

//函数1的返回值作为状态传递给UI组件
function mapStateToProps(state){
    return {count:state}
}
//函数2返回一个对象作为操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        increment:number=>dispatch(createIncrementAction(number)),
        decrement:number=>dispatch(createDecrementAction(number)),
        incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
