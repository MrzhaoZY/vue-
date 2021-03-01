## 一、Vue概述

> ![image-20201224191335441](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224191335441.png)	Vue:  渐进式JavaScript 框架

- 渐进式： 声明式渲染 -> 组件系统 -> 客户端路由 -> 集中式状态管理 -> 项目构建
- 官网 [点击跳转](https://cn.vuejs.org/)
  1. 易用
  2. 灵活： 在一个库和一套完整框架之间自如伸缩
  3. 高效： 20Kb 运行大小， 超快虚拟DOM(更新页面的部分内容)



## 二、Vue基本使用

### 1.hello Vue 页面实现

- 

![image-20201224194206679](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224194206679.png)

![image-20201224194218103](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224194218103.png)

- 细节分析

  1. 实例参数分析：

     - el： 元素的挂载位置
     - data: 模型数据

  2. 插值表达式用法{{}}

     - 将数据填充到html 标签中

     - 插值表达式支持基本的计算操作

       ![image-20201224200029749](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224200029749.png)

       ![image-20201224200045135](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224200045135.png)

  3. Vue代码运行原理分析

     - 概述编程过程的概念(Vue语法 -> 原生语法)



## 三、Vue 模板语法

### 1.前端渲染

> ​	把数据填充到HTML 标签中
>
> ![image-20201224204200037](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224204200037.png)

### 2.渲染方式

- 原生js 拼接字符串

  ​	基本上就是将数据以字符串的方式拼接到html 标签中

  ​	缺点： 不够规范，不利于后期的维护

- 使用前端模板引擎

  ​	art-template

  ​		优点： 规范，代码可读性高，便于后期维护

  ​		缺点： 没有专门的事件机制

- Vue模板语法

  - 插值表达式
  - 指令
  - 事件绑定
  - 属性绑定
  - 样式绑定
  - 分支循环结构

### 3.指令

> 指令的本质就是自定义属性， 指令的格式： v-clock

- v-cloak指令的用法

  1. 插值表达式存在的问题： '闪动'
  2. 使用 v-cloak 解决
  3. 原理： 先隐藏，替换好之后再显示最终的值

- 数据绑定指令

  - v-text 填充纯文本   没有闪动问题

    相比插值表达式更加简洁

  - v-html 填充html 片段

    ①存在安全问题

    ②本网站内部数据可以使用，来自第三方的数据不可用

  - v-pre 填充原生信息

    显示原始信息，跳过编译过程(分析编译过程)

  ![image-20201224215502348](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224215502348.png)![image-20201224215511803](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224215511803.png)



- 数据响应式

  - 响应式
    1. html5 中的响应式(屏幕尺寸的变化导致样式的变化)
    2. 数据的响应式(数据的变化导致页面内容的变化)
  - 数据绑定
    1. 数据绑定： 将数据填充到标签中
  - v-once 只编译一次
    1. 显示内容之后不再具有响应式功能

- 双向数据绑定

  - ![image-20201224221427290](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224221427290.png)

  - 分析

    1. v-model 指令用法

       ![image-20201224222306433](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224222306433.png)

       ![image-20201224222342650](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201224222342650.png)

  - MVVM 设计思想

    1. M(model)
    2. V (view)
    3. VM (View-Model)
       - 从视图到模型 ： 事件监听
       - 从模型到视图：  数据绑定
    
  - 

![image-20201225100627273](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201225100627273.png)

- 事件绑定

  1. v-on 指令

     ```html
     <input type = "button" v-on:click = 'num++' />
     ```

  2. v-on 简写形式

     ```html
     <input type = 'button' @click = 'num++' />
     ```

  ![image-20201225101926448](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201225101926448.png)

  - 事件函数的调用方式

    1. 直接绑定函数名称

       ```html
       <button v-on:click = 'say'>
           hello
       </button>
       ```

    2. 调用函数

       ```html
       <button v-on:click='say()'>
            say hi
       </button>
       ```

  - 事件函数参数传递

    1. 普通参数和事件对象

       ```html
       <button v-on: click = 'say('hi',sevent)'>
           Say Hi
       </button>
       ```

    2.  如果事件直接绑定函数名称，那么默认会传递事件对象作为事件函数的第一个参数

        如果事件绑定函数调用， 那么事件对象必须作为最后一个参数显示传递 并且事件名称必须是($event)

  - 事件修饰符

  - ![image-20201225112943553](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201225112943553.png)

    1. .stop 阻止冒泡

       ```html
       <a v-on:click.stop = 'handle'>跳转</a>
       ```

    2. .prevent 阻止默认行为

       ```html
       <a v-on: click.prevent = 'handle'>跳转</a>
       ```

  - 使用修饰符的时候，顺序很重要，相应的代码会以同样的顺序产生

    ```html
    <!-- 比如说： -->
    v-on:click.prevent.stop 会阻止所有的点击
    v-on:click.stop.prevent 只会阻止对元素自身的点击
    ```

  - 按键修饰符

    1.  .enter 回车键

       ```html
       <input v-on: keyup.enter = 'submit'>
       ```

       ![image-20201225203848643](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201225203848643.png)

    2.  .delete 删除键

       ```html
       <input v-on: keyup.delete = 'handle'>
       ```

  - 自定义按键修饰符

    1.  全局 config.keyCodes 对象

       ```js
       Vue.config.keyCodes.f1 = 112
       ```

- 案例---简单计算器

  > ​	需求： 实现简单的加法计算，分别输入数值a和数值b， 点击计算按钮， 结果显示在下

  1. 通过v-model 指令实现数值a和数值b的绑定
  2. 给计算按钮绑定事件， 实现计算逻辑
  3. 将计算结果绑定到对应的位置

- 属性绑定v-bind 指令

  - vue动态处理属性

    ```html
    <a v-bind:href = 'url'>跳转</a>
    ```

  - 缩写形式

    ```html
    <a :href = 'url'>跳转</a>
    ```

    ![image-20201230104715450](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201230104715450.png)

- 样式绑定

  1. class 样式处理

     ```html
     <!-- 对象语法   如果需要多个类名，再后面用逗号分隔开就可以了-->
     <div v-bind:class = '{active: isActive}'>
     </div>
     
     <!-- 数组语法 -->
     <div v-bind:class = '[activeClass,errorClass]'>
     </div>
     ```

     ![image-20210102170726311](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210102170726311.png)

     - 相关语法细节：
       1. 对象绑定和数组绑定可以结合使用
       2. class 绑定的值可以简化操作
       3. 默认的class 会保留

  2. style 样式处理

     ```html
     <!-- 对象语法 -->
     <div v-bind:style="{color:activeColor,fontSize:fontSize}">
     </div>
     
     <!-- 数组语法 -->
     <div v-bind:style="[baseStyles, overridingStyles]">
         有的属性会覆盖，没有的属性会用baseStyles的属性值
     </div>
     ```

     



### 4.v-model 底层实现原理分析

```html
<input v-bind:value='msg' v-on:input = 'msg=$event.target.value'>
```

1. 利用v-bind:value 动态绑定值
2. 再给输入框中添加v-on:input 事件，让变量msg的值等于输入框中的值，实现双向数据绑定

### 5.分支循环结构

##### 1.分支结构

- v-if

- v-else

- v-else-if

  ![image-20210107091051543](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210107091051543.png)

  - 只渲染符合条件的盒子

- v-show

  ```html
  <div v-show="flag">测试v-show</div>
  
  <script>
  var vm = new Vue({
  				el: '#app',
  				data: {
  					score: 100,
  					flag: false,
  				},
  				methods: {
  					handle: function () {
  						this.flag = !this.flag;
  					},
  				},
  			});
  </script>
  ```

- v-if 与 v-show 的区别：

  1. v-if 控制元素是否渲染到页面
  2. v-show 控制元素是否显示（已经渲染到了页面)

##### 2.循环结构

- v-for 遍历数组

  ```html
  <li v-for='item in list'>{{item}}</li>
  
  <li v-for='(item,index) in list'>{{item}}+'---'+{{index}}</li>
  ```

  ![image-20210107105809764](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210107105809764.png)

- key的作用： 帮助Vue 区分不同的元素， 从而提高性能

  ```html
  <li :key='item.id' v-for='(item,index) in list'>{{item}}----{{index}}</li>
  ```

- v-for 遍历对象

  ```html
  <div v-for='(value,key,index) in object'></div>
  ```

- v-if 和 v-for 结合使用

  ```html
  <div v-if='value==??' v-for='(value,key,index) in object'></div>
  ```

  

### 6.基础案例

##### 1.实现静态UI效果

- 用传统的方式实现标签结构和样式

##### 2.基于数据重构UI效果

- 将静态的结构和样式重构为基于Vue模板语法的形式
- 处理事件绑定和js 控制原理

![image-20210107213943110](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210107213943110.png)

##### 3.声明式编程

- 模板的结构和最终显示的效果基本一致

### 7.Vue的常用特性

##### 1.表单操作

> ​	作用：用户的交互，表单验证，服务器处理数据

- 基于Vue的表单操作

  1. Input 单行文本
  2. textarea 多行文本
  3. select 下拉多选
     - 如果要多选，在其添加multiple属性为true
     - 并且Vue data中绑定的对应值应该为一个数组形式的值
  4. radio 单选框
  5. checkbox 多选框

- 表单域修饰符

  1. number ： 转换为数值

  2. trim： 去掉开始和结束的空格，中间的去不掉

     ```html
     <input v-model.number='age' type='number'>
     <input v-model.trim='nickName' type='text'>
     ```

     

  3. lazy： 将input 事件 切换为change 事件(input是每输入一个字符都会触发事件，而change是失去焦点才会触发事件)

     ![image-20210108115055265](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210108115055265.png)

##### 2.自定义指令

- 内置指令不满足需求

- 自定义指令的语法规则（获取元素焦点）

  ```js
  Vue.directive('focus' {
      inserted: function(el) {
      // 获取元素焦点
      el.focus();
  	}
  })
  ```

- 自定义指令用法

  ```html
  <input type="text" v-focus>
  ```

- 带参数的自定义指令(改变元素背景色)

  ```js
  Vue.directive('color',{
  	inserted: function(el, binding) {
          el.style.backgroundColor = binding.value.color;
      }
  })
  ```

- 指令的用法

  ```html
  <input type="text" v-color = "{color: 'orange'}">
  ```

- 局部指令

  > 只能在该组件中使用
  
  ```js
  directives: {
  	focus: {
  		// 指令的定义
          inserted: function (el) {
              el.focus();
          }
      }
}
  ```
  
  

##### 3.计算属性

- 表达式的计算逻辑可能会比较复杂，使用计算属性可以使模板内容更加简洁

- 计算属性的用法

  ![image-20210116093638263](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210116093638263.png)

  ![image-20210116093658286](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210116093658286.png)

- 计算属性和方法的区别

  1. 计算属性是基于它们的依赖进行缓存的
  2. 方法不存在缓存

- 缓存的好处，遇到一些复杂的计算可以节省时间，提高性能，执行过一次下一次遇到就不会再再执行了，直接用第一次执行的结果，如果msg的值变了，那么下次就会重新计算

##### 4.过滤器

> ​	格式化数据，比如将字符串格式化为首字母大写，将日期格式化为指定的格式等

![image-20210117160014140](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210117160014140.png)

- 自定义过滤器

  ```js
  Vue.filter('过滤器名称', function(value){
      // 过滤器业务逻辑
  })
  
  // 带参数的过滤器
  Vue.filter('format', function(value,argl){
      // value 就是过滤器传递过来的参数
  })
  ```

- 过滤器的使用

  ```html
  <div>{{msg | upper}}</div>
  <div>{{msg | upper | lower}}</div>
  <div v-bind:id='id | formatId'></div>
  ```

- 局部过滤器

  ```js
  filters: {
      capitalize: function() {
  
      }
  }
  ```

  

##### 5.侦听器

> ​	数据的变化时执行异步或开销较大的操作

![image-20210116095121790](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210116095121790.png)

- 侦听器的用法

  ```js
  watch: {
  	firstName: function(val) {
          // val 表示变化之后的值
          this.fullName = val + this.lastName;
      },
      lastName: function(val){
          this.fullName = this.firstName + val;
      }
  }
  ```

  

##### 6.生命周期

> ​	Vue实例的生命周期

- 主要阶段
  - 挂载（初始化相关属性）
    1. beforeCreate  在实例初始化之后，数据观测和事件配置之前被调用
    2. created  在实例创建完后后被立即调用
    3. beforeMount  在挂载开始之前被调用
    4. mounted  el新创建的vm.$el 替换，并挂载到实例上去后调用该钩子
  - 更新(元素或组件的变更操作)
    1. beforeUpdate  数据更新时调用，发生在虚拟DOM 打补丁之前
    2. updated  由于数据更改导致的虚拟DOM 重新渲染和打补丁， 在这之后会调用该钩子。
  - 销毁(销毁相关属性)
    1. beforeDestroy  实例销毁之前调用
    2. destroyed  实例销毁后调用

### 8.Vue列表操作

##### 1.数组更新检测

- 变更方法（Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹的方法包括）
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()
- 替换数组(变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如)
  - filter()
  -  concat()
  - slice()
  - 它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组
- **注意：**由于JavaScript的限制，Vue不能检测数组和对象的变化，深入响应式原理中有相关的讨论。

恶

##### 2.数组的响应式变化

- 修改响应式数据

  - Vue.set(vm.items, indexOfitem, newValue)

  - Vue实例.$set(vm.items, indexOfitem, newValue)

    ![image-20210121162906564](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210121162906564.png)

    1. 参数1表示要处理的数组名称
    2. 参数2表示要处理的数组的索引
    3. 参数3表示要处理的数组的值

##### 3.常用特性应用场景

- 过滤器（格式化日期）

  ```js
  // 时间过滤器
  			Vue.filter('format', function (value, arg) {
  				function dateFormat(date, format) {
  					if (typeof date === 'string') {
  						// match 方法检索返回一个字符串匹配正则表达式的结果
  						var mts = date.match(/(\/Date\((\d+)\)\/)/);
  						if (mts && mts.length >= 3) {
  							date = parseInt(mts[2]);
  						}
  					}
  					date = new Date(date);
  					if (!date || date.toUTCString() == 'Invalid Date') {
  						return '';
  					}
  					var map = {
  						M: date.getMonth() + 1,
  						d: date.getDate(),
  						h: date.getHours(),
  						m: date.getMinutes(),
  						s: date.getSeconds(),
  						q: Math.floor((date.getMonth() + 3) / 3),
  						S: date.getMilliseconds(), // 毫秒
  					};
  					format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
  						var v = map[t];
  						if (v !== undefined) {
  							if (all.length > 1) {
  								v = '0' + v;
  								v = v.substr(v.length - 2);
  							}
  							return v;
  						} else if (t === 'y') {
  							return (date.getFullYear() + '').substr(4 - all.length);
  						}
  						return all;
  					});
  					return format;
  				}
  				return dateFormat(value, arg);
  			});
  
  ```

  

- 自定义指令（获取表单焦点）

  ```js
  Vue.directive('focus', {
      inserted: function(el) {
          el.focus();
      }
  })
  ```

  

- 计算属性（统计图书数量）

  ```js
  computed: {
  					// 计算图书的总数
  					total: function () {
  						return this.books.length;
  					},
  				},
  ```

  

- 侦听器（验证图书存在性）

- 生命周期（图书数据处理）



## 四、组件化开发

> - 组件化开发思想
> - 组件的注册方式
> - 组件间的数据交互方式
> - 组件插槽的用法
> - Vue调试工具的用法
> - 基于组件的方式实现业务功能

### 1.组件化开发思想

#### 1.1 现实中组件化思想体现

- 标准
- 分治
- 重用
- 组合

#### 1.2 编程中的组件化思想体现

#### 1.3 组件化规范： Web Components

> ​	代码尽可能多的重用
>
> ​	自定义组件的方式不太容易(html、css 和js)
>
> ​	多次使用组件可能导致冲突

- Web Components 通过创建封装好功能定制元素解决上述问题 ------- Vue部分实现了上诉规范

### 2.组件注册

#### 2.1 全局组件注册语法

```js
Vue.component(组件名称，{
              data: 组件数据，
              template: 组件模板内容
})
```

![image-20210129101154691](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210129101154691.png)

#### 2.2 组件用法

```html
<div id='app'>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
</div>
```

- 组件是可以重用的，每个组件都是一个独立的实例，相互不影响

#### 2.3 组件注册注意事项

##### 1.data必须是一个函数

- 分析函数与普通对象的对比

##### 2.组件模板内容必须是单个根元素

- 分析显示实际的效果

##### 3.组件模板内容可以是模板字符串

- 模板字符串需要浏览器提供支持(es6语法)

##### 4.组件命名方式

- 短横线方式

  ```js
  Vue.component('my-component',{})
  ```

- 驼峰方式

  ```js
  Vue.component('MyComponent',{})
  ```

- 如果使用驼峰式命名组件，那么在使用组件的时候，只能在字符串模板中用驼峰的方式使用组件，但是在普通的标签模板中，必须使用短横线的方式使用组件

#### 2.4 局部组件注册

![image-20210129111138435](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210129111138435.png)

- 局部组件只能在注册它的父组件中使用 在别的地方不可以使用

### 3.Vue调试工具

> vue-devtools

### 4.组件间数据交互

#### 4.1父组件向子组件传值

##### 1.组件内部通过props 接收传递过来的值

```js
Vue.component('menu-item',{
    props: ['title'],
    template: `
	<div>
		{{title}}
	</div>
`
}
```

##### 2.父组件通过属性将值传递给子组件

```htmel
<menu-item title = '来自父组件的数据'></menu-item>
<menu-item :title = 'title'></menu-item>

```

##### 3.props 属性名规则

- 在props 中使用驼峰形式， 模板中需要使用短横线的形式
- 字符串形式的模板中没有这个限制

##### 4.props 属性值类型

- 字符串 String
- 数值 Number
- 布尔值 Boolean
- 数组 Array
- 对象 Object

#### 4.2子组件向父组件传值

##### 1.子组件通过自定义事件向父组件传递信息

```html
<button v-on:click='$emit("enlarge-text")'>
    扩大字体
</button>
```

##### 2.父组件监听子组件的事件

```html
<menu-item v-on:enlarge-text='fontSize' += 0.1></menu-item>menu-item>
```

##### 3.子组件通过自定义事件向父组件传递信息

```html
<button @click='$emit("enlarge-text",0.1)'>
    扩大字体
</button>
```

##### 4.父组件监听子组件的事件

```html
<menu-item v-on:enlarge-text='fontSize += $event'></menu-item>
```

### 5.组件插槽

> ​	作用： 
>
> - 父组件向子组件传递内容

#### 5.1 组件插槽的基本用法

##### ![image-20210205165505562](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210205165505562.png)

#### 5.2 具名插槽用法

![image-20210205170904653](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210205170904653.png)

![image-20210205170924260](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210205170924260.png)

#### 5.3 作用域插槽

> ​	应用场景： 父组件对子组件的内容进行加工处理

### 6.基于组件的案例

- ##### 按照组件化方式实现业务的需求

  - 根据业务功能进行组件化划分
    1. 标题组件
    2. 列表组件
    3. 结算组件
  - 组件的重构（组件化的方式）
  
  ![image-20210226210423170](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210226210423170.png)

删除商品

![image-20210226213512466](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210226213512466.png)

## 五、前后端交互

### 1.前后端模式

#### 1.1 接口调用模式

- 原生ajax
- 基于jQuery的ajax
- fetch(ajax的升级版)
- axios(第三方的库，更方便的调用接口)

#### 1.2 URL 地址格式

- 传统形式的URL

  ![image-20210226223246289](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210226223246289.png)

- Restful形式的URL

  - HTTP请求方式

    1. GET 查询
    2. POST 添加
    3. PUT 修改
    4. DELETE 删除

    地址相同，但是请求方式不同，表示的也不同，参数可以可以直接/携带

    ![image-20210226223349534](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210226223349534.png)

### 2.Promise用法（处理异步编程）

#### 2.1异步调用

- 异步效果分析
  1. 定时任务(setInterval,setTimeout)
  2. Ajax
  3. 事件函数
- 多次异步调用的依赖分析
  - 多次异步调用的结果顺序不确定
  - 异步调用结果如果存在依赖需要嵌套（会造成回调地狱）

#### 2.2Promise 概述

> ​	Promise是异步编程的一种解决方案，从语法上讲，Promise 是一个对象，从它可以获取异步操作的消息

使用Promise主要有以下好处：

- 可以避免多层次异步调用嵌套问题(回调地狱)
- Promise 对象提供了简介的API， 使得控制异步操作更加容易

#### 2.3 Promise的基本用法

- 实例化Promise对象，构造函数中传递函数，该函数中用于处理异步任务
- resolve和reject两个参数用于处理成功和失败两种情况，并通过p.then获取处理结果

#### 2.4 基于promise处理ajax请求

- ![image-20210227091502987](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227091502987.png)
- 发送多次ajax请求

![image-20210227092240307](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227092240307.png)

#### 2.5 then参数中的函数返回值

- 返回Promise 实例对象
  - 返回的该实例对象会调用下一个then
- 返回普通值
  - 返回的普通值会直接传递给下一个then，通过then参数中函数的参数 接收该值

then链式调用

#### 2.6Promise常用的API

1. 实例方法

   - p.then()  得到异步任务的正确结果
   - p.catch()  得到异常信息
   - p.finally()  成功与否都会执行

   ![image-20210227094819029](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227094819029.png)

2. 对象方法

   - Promise.all()  并发处理多个异步任务，所有任务都执行完成后才能得到结果
   - Promise.race() 并发处理多个异步任务，只要有一个任务完成就能得到效果 

   ![image-20210227100020827](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227100020827.png)

   ![image-20210227100040863](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227100040863.png)

### 3.接口调用---fetch

#### 3.1fetch 概述

- 基本特性

  1. 更加简单的数据获取方式，功能更强大、更灵活，可以看做是xhr的升级版
  2. 基于promise布局

- 语法结构

  ![image-20210227100820416](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227100820416.png)

#### 3.2 fetch请求参数

- 常用配置参数

  1. methods(String): HTTP 请求方法，默认为(GET、POST、PUT、DELETE)
  2. body(String): HTTP 的请求参数
  3. header(Object): HTTP的请求头，默认为{}
  4. GET和DELETE

  ![image-20210227103028431](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227103028431.png)

- POST请求方式的参数传递

- PUT

- post和put 用json格式会报错

#### 3.3 fetch 响应结果

- 响应数据格式
  - text() 将返回体处理成字符串类型
  - json(): 返回结果和JSON.parse(responseText)一样

### 4.接口调用---axios用法

#### 4.1 axios的基本特性

axios 是一个基于promise用于浏览器和node.js 的http客户端

> - 支持浏览器和node.js
> - 支持promise
> - 能拦截请求和响应
> - 自动转换json数据

#### 4.2 axios 的基本用法

![image-20210227115651204](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227115651204.png)

![image-20210227115638848](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227115638848.png)

#### 4.3 axios的常用API

- get  查询数据
- post  添加数据
- put   修改数据
- delete  删除数据

#### 4.4 axios的参数传递

1. get传递参数

   - 通过URL 传递参数

     ![image-20210227151948413](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227151948413.png)

   - 通过params 选项传递参数

     ![image-20210227151924839](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227151924839.png)

2. DELETE传递参数

   - 参数传递方式与GET类似

3. POST传递参数

   ![image-20210227155253124](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227155253124.png)

   (有问题，每次使用json数据格式，就会报同源问题)

   - 通过URLSearchParams传递参数(application/x-www-form-urlencoded)

4. PUT传递参数

   - 参数传递与post类似

#### 4.5 axios的响应结果

响应结果的主要属性

- data ：实际响应回来的数据
- headers:响应头信息
- status：响应状态码
- statusText: 响应状态信息

#### 4.6 axios的全局配置

![image-20210227163419187](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227163419187.png)

#### 4.7 axios拦截器

- 请求拦截器

  在请求发出之前设置一些信息

  ![image-20210227163513794](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227163513794.png)

![image-20210227164116104](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227164116104.png)

- 响应拦截器

  在获取数据之前对数据做一些加工处理

  ![image-20210227164428894](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227164428894.png)

### 5.接口调用---async/await用法

#### 5.1async/await 的基本用法

- async/await 是ES7 引入的新语法，可以更加方便的进行异步操作
- async 关键字用于函数上(async函数的返回值是Promise实例对象)
- await关键字用于async 函数当中(await 可以得到异步的结果)

## 六、前端路由

### 1.路由的基本概念与原理

#### 1.1 路由

> ​	路由是一个比较广义和抽象的概念，路由的本质就是对应关系

在开发中，路由分为：前端理由和后端路由

- 后端路由：

  > ​	概念：根据不同的用户 url 请求， 返回不同的内容
  >
  > ​	本质：URL 请求地址与服务器资源之间的对应关系

  ![image-20210227220545797](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227220545797.png)

- SPA(Single Page Application)

  - 后端渲染(存在性能问题)
  - Ajax前端渲染(前端渲染提高性能，但是不支持浏览器的前进后退操作)
  - SPA(Single Page Application) 单页面应用程序： 整个网页只有一个页面，内容的变化通过Ajax局部更新实现，同时支持浏览器地址栏的前进和后退操作
  - SPA实现原理之一：基于URL 地址的hash (hash的变化会导致浏览器记录访问历史的变化，但是hash的变化不会触发新的URL请求)
  - 在实现SPA过程中，最核心的技术点就是前段路由

- 前段路由

  > ​	概念： 根据不同的用户事件，显示不同的页面内容
  >
  > ​	本质： 用户事件与事件处理函数之间的对应关系

  ![image-20210227221434444](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227221434444.png)

- 实现简单前段路由

  基于URL中的hash实现（点击菜单的时候改变url的hash，根据hash的变化控制组件的切换）

#### 1.2 Vue Router

> Vue Router 是官方的路由管理器
>
> 它和vue.js 的核心深度集成，可以非常方便的用于SPA 应用程序的开发
>
> [官方网站📤](https://router.vuejs.org/zh/)

![image-20210227223447905](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227223447905.png)



### 2. vue-router基本使用

#### 2.1 基本使用步骤

![image-20210227224044982](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210227224044982.png)

```html
<div id="app">
			<!-- 添加路由链接 -->
			<router-link to="/user">User</router-link>
			<router-link to="/register">Register</router-link>

			<!-- 路由占位符  填充位 -->
			<router-view></router-view>
		</div>
		<script src="../js/vue.js"></script>
		<script src="../js/vue-router.js"></script>
		<script>
			const User = {
				template: `<h1>User组件</h1>`,
			};
			const Register = {
				template: `<h1>Register组件</h1>`,
			};

			// 创建路由实例对象
			const router = new VueRouter({
				// 所有的路由规则
				routes: [
					{
						path: '/user',
						component: User,
					},
					{path: '/register', component: Register},
				],
			});

			// 创建vm 实例对象
			var vm = new Vue({
				el: '#app',
				data: {},

				router,
			});
		</script>
	</body>
```

#### 2.2 路由重定向

> 路由重定向指的是： 用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面
>
> 通过路由规则的redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向

### 3.嵌套路由

#### 3.1嵌套路由用法

- 嵌套路由功能分析
  1. 点击父级路由链接显示模板内容
  2. 模板内容中又有子级路由链接
  3. 点击子级路由链接显示子级模板内容

### 4. 动态路由匹配

####   4.1 动态匹配路由的基本用法

> 应用场景： 通过动态路由参数的模式进行路由匹配

![image-20210228094628087](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228094628087.png)![image-20210228094721862](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228094721862.png)

#### 4.2 路由组件传递参数

- 

$route 与对应路由形成高度耦合，不够灵活，所以可以使用props 将组件和路由解耦

![image-20210228095511820](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228095511820.png)

![image-20210228095525747](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228095525747.png)

- props 的值为对象类型
- props 的值为函数类型

### 5.命名路由

#### 5.1 命名路由的配置规则

> 为了更加方便的表示路由的路径，可以给路由规则起一个别名，即为‘命名路由‘

![image-20210228113251295](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228113251295.png)

![image-20210228113303214](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228113303214.png)

### 6.编程式导航

#### 6.1页面导航的两种方式

- 声明式导航： 通过点击链接实现导航的方式，叫做声明式导航
- 编程式导航： 通过调用JavaScript形式的API 实现导航的方式，叫做编程式导航

---

***编程式导航基本用法***

常用的编程式导航API 如下：

- this.$router.push('hash地址')
- this.$router.go(n)

***编程式导航参数规则*******

![image-20210228204313273](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228204313273.png)



---

## 七、前端工程化（模块化）

### 1. 模块化相关规范

#### 1.1 模块化概述

传统开发模式的主要问题

1. 命名冲突
2. 文件依赖

通过模块化解决问题

- 模块化就是把单独的一个功能封装到一个模块(文件)中，模块之间相互隔离，但是可以通过特定的接口公开内部成员，也可以依赖别的模块
- 模块化开发的好处： 方便代码的重用，从而提升开发效率，并且方便后期的维护

#### 1.2 浏览器端模块化规范

- AMD   require.js
- CMD   sea.js

#### 1.3  服务器端模块化规范

- CommonJS
  1. 模块分为 单文件模块与包
  2. 模块成员导出： module.exports 和 exports
  3. 模块成员导入： require('模块标识符')

#### 1.4 大一统的模块化规范---ES6 模块化

> 在ES6 模块化规范诞生之前，JavaScript社区已经尝试并提出了 AMD\CMD\CommonJS 等模块化规范

由于存在差异性与局限性，并不是浏览器与服务器通用的模块化标准，

因此，ES6 语法规范中，在语言层面上定义了ES6 模块化规范， 是浏览器端与服务器端通用的模块化开发规范

---

ES6 模块化规范中定义：

- 每个js文件 都是一个独立的模块
- 导入模块成员使用 import 关键字
- 暴露模块成员使用 export 关键字

##### 1.Node.js 中通过 *babel* 体验ES6 模块化

![image-20210228220420969](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210228220420969.png)

#### 1.5 ES6模块化的基本语法

- 默认导出 ： exports default 默认导出的成员
- 默认导入 ： import 接收名称 from '模块标识符'
- 注意：   每个模块中，只允许使用唯一的一次 export default 否则会报错

---

- 按需导出： export let s1 = 10

  ​					export function say = function(){}

- 按需导入： import {s1,s2 as ss2, say} form '模块标识符'

- 注意： 可以使用n次按需导出

---

- 直接导入并执行模块代码

> 有时候， 我们只想单纯执行某个模块中的代码，并不需要得到模块中向外暴露的成员，此时， 可以直接导入并执行模块代码。

### 2.webpack

> 当前Web 开发面临的困境

- 文件依赖关系错综复杂
- 静态资源请求效率低
- 模块化支持不友好
- 浏览器对高级JavaScript 特性兼容性程度较低
- 等等...

#### 2.1 webpack 概述

webpack 是一个流行的前端项目构建工具(打包工具), 可以解决当前web 开发中所面临的的困境

webpack 提供了友好的模块化支持，以及代码压缩混淆，处理js兼容问题，性能优化等强大的功能，从而让程序员把工作的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。

#### 2.2 webpack 的基本使用

- 创建列表各行变色项目

  ![image-20210301094412016](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301094412016.png)

  ---

- 在项目中安装和配置webpack

  ![image-20210301095335104](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301095335104.png)

  ---

- 配置打包的入口与出口

  - 打包的入口文件为： src  => index.js
  - 打包的输出文件为： dist => main.js

  **如果要修改打包的入口与出口，可以在webpack.config.js 中新增如下配置信息**

  ![image-20210301103819231](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301103819231.png)

  ---

- 配置webpack 自动打包功能

![image-20210301212530026](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301212530026.png)

![image-20210301211827856](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301211827856.png)

这里最新的webpack 与 webpack-dev-server 不兼容，所以要自动打包，得运行node_modules/.bin/webpack serve

1. webpack-dev-server 会启动一个实时打包的http 服务器
2. webpack-dev-server 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不见的



---

- 配置html-webpack-plugin 生成预览页面

  ![image-20210301213325499](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301213325499.png)

---

- 配置自动打包相关的参数

![image-20210301213929977](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301213929977.png)

![image-20210301214133478](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301214133478.png)

---

#### 2.3 webpack 中的加载器

##### 1. 通过loader 打包非js模块

> 在实际开发过程中，webpack 默认只能打包处理以.js 后缀名结尾的模块， 其他非.js 后缀名结尾的模块，webpack 默认处理不了，需要调用loader 加载器才可以正常打包，否则会报错

- loader 加载器可以协助webpack 打包处理特定的文件模块，比如：
  - less-loader 可以打包处理 .less 相关的文件
  - sass-loader 可以打包处理 .sass 相关的文件
  - url-loader 可以打包处理 css 中与 url 路径相关的文件

##### 2.loader 的调用过程

![image-20210301221859351](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301221859351.png)

#### 2.4 webpack 中加载器的基本使用

- 打包处理css文件

  1. 运行npm i style=loader css=loader -D 命令，安装处理css 文件的loader

  2. 在webpack.config.js 的module-> rules 数组中， 添加loader 规则如下

     **![image-20210301225512259](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301225512259.png)**

     其中，test 表示匹配的文件类型，use 表示对应要调用的loader

     **注意**

     1. use数组中指定的 loader 顺序是固定的
     2. 多个loader 的调用顺序是： 从后往前调用的

- 打包处理less 文件

  1. 运行npm i less-loader less -D命令

  2. 在webpack.config.js 的module -> rules 数组中，添加loader规则如下：

     <img src="C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301231018893.png" alt="image-20210301231018893" style="zoom:150%;" />

- 打包处理sass 文件

  1. 运行 npm i sass-loader node-sass -D命令

  2. 在webpack.config.js 的module -> rules 数组中，规则如下：

     ![image-20210301232506150](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210301232506150.png)

