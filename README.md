# ToBe-Utils 

# 前端工具库，收集整理日常开发过程中的通用 utils 。


## 安装
```bash
$ npm install --save tobe-utils
# or
$ yarn add tobe-utils
# or
$ pnpm add tobe-utils
# or
$ bun add tobe-utils
```
## 使用


### 使用 ESModule 规范导入
```js
import { isEmpty } from '@tobe-utils';
console.log(isEmpty([])) // 输出 true
console.log(isEmpty([1])) // 输出 false
```

### 使用 CommonJS 规范导入

```js
const { isEmpty } from require('@tobe-utils');
console.log(isEmpty([])) // 输出 true
console.log(isEmpty([1])) // 输出 false
```

### 在浏览器中使用

如果直接在浏览器中使用，则不需要包管理。直接下载 [tag](https://github.com/ChaseWindYoungs/tobe-utils/tags) 中的最新版本 `index.umd.js`，使用的是 UMD 通用模块规范。

然后在浏览器中引用：

```html
<script src="./index.umd.js"></script>
<script>
    $utils.isNull(null) // output: true
</script>
```