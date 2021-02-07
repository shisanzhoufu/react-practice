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

### TodoList案例
