## 基础
### 特点
- 声明式设计
- 采用虚拟DOM渲染，减少DOM操作
- 和其他库灵活搭配
- JSX，在js里写html
- 组件化，模块化
- 单向数据流，数据=》状态=》事件=》数据

### 安装
- 脚手架：`npm install -g create-react-app`
- 创建文件：`create-react-app 01helloworld`
- 启动：`npm run start`

### 元素渲染
- `元素  let h1 = <h1>helloworld</d>`
- 使用jsx写法，可以创建js元素对象
- 必须有一个根元素
- html元素必须小写，否则默认为组件

### 虚拟DOM
- 本质上是一个object对象
- 虚拟DOM的属性比真实DOM少
- 虚拟DOM最终会被react转化为真实DOM，呈现在页面上

### JSX表达式
- 由html元素构成
- 定义虚拟DOM时不要写引号
- 中间如果需要插入变量用{}，{}中间可以使用表达式，{}中间可以使用JSX对象
- 属性和html内容一样都是用{}来插入内容
- 样式的类名要用className
- 标签必须闭合


### style样式
- class中不可以存在多个属性
```
<div class="box" class="active">//错误示范
```
- style样式存在多个单词的属性，第二个用大写`borderTop`，或者用引号引起来
- 多个类共存的操作，需要放到数组中进行拼接
- 注释必须在{/*  */}进行书写

## 组件
### 类组件
- 一般称为动态组件，会有交互和数据修改
- ReactDOM.render(<MyComponent/>)之后发生了什么
    - React解析组件标签，找到了MyComponent组件
    - 发现组件是用类定义的，随后new一个该类的实例，并通过实例调用原型上的render方法
    - 将render返回虚拟DOM转为真实DOM，随后呈现在页面中
```javascript

class MyComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>hello class</h1>
                
                <Hellowarld fun="继承的函数"/>
            </div>
        )
    }
}
```
### 函数式组件
- 一般按用于静态没有交互的组件页面
```javascript
//函数式组件
function Hellowarld(props){
    let content  = <p>函数式组件的内容</p>
    return (
        <div>
            <h1>hello function</h1>
            {content}
            {props}
        </div>
    )
}
```
### 组件的核心属性
#### state
- state是组件最重要的属性，值是对象 `state = {}`
- 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染页面）
- 通过setState方法修改数据
- 自定义方法的this为undefined怎么办？
    - bind强制绑定this
    - 箭头函数

#### props
- 每个组件对象都会又props属性
- 组件标签所有属性都保存在props上
- props是只读的，不可修改
- 可以对props的值进行限制
```javascript
Person.propTypes = {
          name:PropTypes.string.isRequired,//限制name为必传字符串
          age:PropTypes.number
      }
      //设置默认值
      Person.defaultProps = {
          age:88
      }
```
- 作用
    - 通过标签属性从组件外向组件内传递变化的数据
#### refs
- 组件里的标签通过ref标识自己

### 函数
#### 柯里化
- 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的编码形式
#### 高阶函数
- 符合其中一条
    - 若A函数接收的参数是一个函数
    - 若A函数调用的返回值依然是一个1参数
- 常见的高阶函数：Promise，setTimeOut arr.map等
## 生命周期
### 理解
- 组件从创建到死亡它会经历一些特定的阶段。
- React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。
- 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

![172ed856eb89ea6e2fa3661ff52e9d55.png](en-resource://database/5395:0)

### 生命周期的三个阶段（旧）
- 初始化阶段: 由ReactDOM.render()触发---初次渲染
    - constructor()
    - componentWillMount()
    - render()
    - componentDidMount()
- 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    - shouldComponentUpdate()
    - componentWillUpdate()
    - render()
    - componentDidUpdate()
-  卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    - componentWillUnmount()
### 经典面试题:
- react/vue中的key有什么作用？（key的内部原理是什么？）
- 为什么遍历列表时，key最好不要用index?
      
- 虚拟DOM中key的作用：
    - 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

    - 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
    - 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

		- 旧虚拟DOM中找到了与新虚拟DOM相同的key：
			- 若虚拟DOM中内容没变, 直接使用之前的真实DOM
			- 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

		- 旧虚拟DOM中未找到与新虚拟DOM相同的key
			- 根据数据创建新的真实DOM，随后渲染到到页面
									
- 用index作为key可能会引发的问题：
    - 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
        - 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    - 如果结构中还包含输入类的DOM：
        - 会产生错误DOM更新 ==> 界面有问题。
                        
    - 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
        - 仅用于渲染列表用于展示，使用index作为key是没有问题的。
					
- 开发中如何选择key?:
   - 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
   - 如果确定只是简单的展示数据，用index也是可以的。

## 脚手架
### 安装
- `npm install -g  create-react-app`
- ` create-react-app react-demo`
- `npm start`

### 案例
#### todoList案例相关知识点
    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态初始化列表，如何确定将数据放在哪个组件的state中？
                ——某个组件使用：放在其自身的state中
                ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    3.关于父子之间通信：
            1.【父组件】给【子组件】传递数据：通过props传递
            2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
    5.状态在哪里，操作状态的方法就在哪里

## 相关理解
### SPA的理解
- 单页Web应用（single page web application，SPA）。
- 整个应用只有一个完整的页面。
- 点击页面中的链接不会刷新页面，只会做页面的局部更新。
- 数据都需要通过ajax请求获取, 并在前端异步展现。
### 路由的理解
- 什么是路由?
    - 一个路由就是一个映射关系(key:value)   
    - key为路径, value可能是function或component
- 路由分类
    - 后端路由：
        - 理解： value是function, 用来处理客户端提交的请求。
        - 注册路由： router.get(path, function(req, res))
        - 工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
    - 前端路由：
        - 浏览器端路由，value是component，用于展示页面内容。
        - 注册路由: <Route path="/test" component={Test}>
        - 工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件
### react-router-dom的理解
- react的一个插件库。
- 专门用来实现一个SPA应用。
- 基于react的项目基本都会用到此库。
### 路由的基本使用
- 明确好界面中的导航区，展示区
- 导航区的a标签改为Link标签
- 展示区写Route标签进行路径的匹配
- App最外侧包裹一个<BrowserRouter>or<HashRouter>
### 路由组件与一般组件
- 写法不同
    - 一般组件：<Demo/>
    - 路由组件：<Route path="/demo" component={Demo}>
- 存放位置不同
    - 一般组件：component文件夹
    - 路由组件：pages
- 接收的props
    - 一般组件：写组件标签传递的值
    - 路由组件：history，location，match
    - history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    - location:
        pathname: "/about"
        search: ""
        state: undefined
    - match:
        params: {}
        path: "/about"
        url: "/about"
#### github搜索案例相关知识点
		1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
		2.ES6小知识点：解构赋值+重命名
					let obj = {a:{b:1}}
					const {a} = obj; //传统解构赋值
					const {a:{b}} = obj; //连续解构赋值
					const {a:{b:value}} = obj; //连续解构赋值+重命名
		3.消息订阅与发布机制
					1.先订阅，再发布（理解：有一种隔空对话的感觉）
					2.适用于任意组件间通信
					3.要在组件的componentWillUnmount中取消订阅
		4.fetch发送请求（关注分离的设计思想）
					try {
						const response= await fetch(`/api1/search/users2?q=${keyWord}`)
						const data = await response.json()
						console.log(data);
					} catch (error) {
						console.log('请求出错',error);
					}
### 解决多级路径刷新页面样式丢失的问题
				1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter

### 路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

### Redirect的使用	
				1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>

### 嵌套路由
				1.注册子路由时要写上父路由的path值
				2.路由的匹配是按照注册路由的顺序进行的

### 向路由组件传递参数
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state
							备注：刷新也可以保留住参数
				


### 编程式路由导航
					借助this.prosp.history对象上的API对操作路由跳转、前进、后退
							-this.prosp.history.push()
							-this.prosp.history.replace()
							-this.prosp.history.goBack()
							-this.prosp.history.goForward()
							-this.prosp.history.go()

### BrowserRouter与HashRouter的区别
			1.底层原理不一样：
						BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
						HashRouter使用的是URL的哈希值。
			2.path表现形式不一样
						BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
						HashRouter的路径包含#,例如：localhost:3000/#/demo/test
			3.刷新后对路由state参数的影响
						(1).BrowserRouter没有任何影响，因为state保存在history对象中。
						(2).HashRouter刷新后会导致路由state参数的丢失！！！
			4.备注：HashRouter可以用于解决一些路径错误相关的问题。
## redux
### 什么是redux
- redux是一个专门用于做状态管理的JS库(不是react插件库)。
- 它可以用在react, angular, vue等项目中, 但基本与react配合使用。
- 作用: 集中式管理react应用中多个组件共享的状态。
### 使用场景
- 某个组件的状态，需要让其他组件可以随时拿到（共享）。
- 一个组件需要改变另一个组件的状态（通信）。
- 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。
### redux的三个核心概念
#### action
- 动作的对象
- 包含2个属性
    - type：标识属性, 值为字符串, 唯一, 必要属性
    - data：数据属性, 值类型任意, 可选属性
- 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }
#### reducer
- 用于初始化状态、加工状态。
- 加工时，根据旧的state和action， 产生新的state的纯函数。
#### store
- 将state、action、reducer联系在一起的对象
- 如何得到此对象?
    - import {createStore} from 'redux'
    - import reducer from './reducers'
    - const store = createStore(reducer)
- 此对象的功能?
    - getState(): 得到state
    - dispatch(action): 分发action, 触发reducer调用, 产生新的state
    - subscribe(listener): 注册监听, 当产生了新的state时, 自动调用