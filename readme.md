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

##