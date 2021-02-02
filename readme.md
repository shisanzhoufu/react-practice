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
