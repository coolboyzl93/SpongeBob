# SpongeBob 图片查看小应用

## 功能
- 图片查看小应用
- 熟悉前端基本页面布局 
---

## 技术选型
- HTML
- CSS
- JavaScript
---

## 编码规范
- JavaScript 应用standard编码规范
- CSS 应用BEM命名规范
---

## 环境组成
- 编辑器: vsCode
- 编辑器插件: JavaScript Standard Style 
- 全局npm包: ```npm install -g browser-sync standard```
- scripts终端命令: ```npm run view``` 
---

学习到的内容
## html
1. 最起码引入```<meta name="viewport" content="width=device-width, initial-scale=1.0">```来实现手机端的布局稳定

2. 引入```<link rel="icon" href="img/hm.ico" type="image/x-icon" />```来设置该网页标签页的图标

3. 能设置成class的一定要设置class,因为class比标签更有识别度，能够有效减少记忆成本，命名方式使用BEM（block-element_modifier）方式 

4. 和JS交互的标签,最好引入```data-```属性，这显示地指明了，该DOM和JavaScript具有怎样的交互方式，同样减少了出错率和记忆成本，更方便维护。

5. 及时根据css效果调整html的结构，合理使用嵌套盒子等手段。

## css


**概念**

1. 移动端优先的响应式布局，应当先做手机端的css，然后再用```@media all and (min-width: 768px) {...}```拓展平板和PC端的样式。
2. css回退兼容设置，连续设置两次相同的css属性,后面的属性不识别就自动用前面的属性，识别后面的就会覆盖前面的属性。
3. transition 的进入过渡与退出过渡，可以只在静态类中设置，也可以在动态类中设置进入过渡，然后在静态类中设置退出过渡，这还可以用来和JS一起配合实现动画

**明细**

1. 盒模型中通过将图片的display从inline变为block来消除行间的空白
2. flex布局条件 ```html, body {height: 100%;```}
3. flex子项的伸缩设置 ```flex: 1 1 auto;```
4. x轴超出部分不换行，改为滚动``` white-space: no-wrap; overflow-x: auto;```
5. 自定义过渡样式，用```cubic-bezier(1, .06, .28, 1)```
6. 使用google字体去美化字体，记得在html中引入CDN即可
7. 使用text-shadow 去美化字体
8. 设置```min-height: auto; max-height: none;```来使之前的同名属性失效。
9. 设置```@media all and (orientation: landscape) {...}```设置手机横屏时候的布局

## JavaScript

1. 先写编码计划，再写程序
2. 最好把每个功能足够细化，然后解耦，再用一个函数将它们组合起来，方便拓展和维护。
3. 常量要用大写字母加下划线表示。
4. 最好用字符串都被赋予语义化的常量，代码友好。 
5. 每一个函数都要写清楚注释，表明功能
6. standard编码规范
7. 使用LIFE来模块化代码，由于不想引入babel什么的，就用这个方式来保证命名空间不被污染吧。