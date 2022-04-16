# npm

## 安装所有依赖

```javascript
npm
install
```

## 安装单个软件包

```javascript
npm
install
包名
```

安装并添加条目到 `package.json` 文件的 dependencies。

```javascript
npm
install
包名--
save - dev
```

## 更新软件包

```JavaScript
npm
update
```

### 更新单个安装包

```javascript
npm
update
包名
```

## 运行任务

package.json 文件支持一种用于指定命令行任务（可通过使用以下方式运行）的格式：

```node
 npm
run
start - dev
npm
run
start
npm
run
watch
npm
run
dev
npm
run
prod
```

例如

```json
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```

```json
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}
```

## 当使用 `npm` 安装软件包时，可以执行两种安装类型：

- 本地安装
- 全局安装

### 默认情况下，当输入 `npm install` 命令时，例如：

```
npm install lodash
```

软件包会被安装到当前文件树中的 `node_modules` 子文件夹下。

在这种情况下，`npm` 还会在当前文件夹中存在的 `package.json` 文件的 `dependencies` 属性中添加 `lodash` 条目。

### 使用 `-g` 标志可以执行全局安装

```
npm install -g lodash
```

在这种情况下，`npm` 不会将软件包安装到本地文件夹下，而是使用全局的位置。

### 全局的位置到底在哪里？

```
npm root -g 
```

命令会告知其在计算机上的确切位置。

在 Windows 上，可能是 `C:\Users\YOU\AppData\Roaming\npm\node_modules`。

## 如何使用或执行 npm 安装的软件包

当使用 `npm` 将软件包安装到 `node_modules` 文件夹中或全局安装时，如何在 Node.js 代码中使用它？

假设使用以下命令安装了流行的 JavaScript 实用工具库 `lodash`：

```
npm install lodash
```

这会把软件包安装到本地的 `node_modules` 文件夹中。

若要在代码中使用它，则只需使用 `require` 将其导入到程序中：

```
const a=require("lodash");
```

如果软件包是可执行文件，该怎么办？

在这种情况下，它会把可执行文件放到 `node_modules/.bin/` 文件夹下。

验证这一点的简单示例是 [cowsay](https://www.npmjs.com/package/cowsay)。

cowsay 软件包提供了一个命令行程序，可以执行该程序以使母牛说些话（以及其他动物也可以说话）。

当使用 `npm install cowsay` 安装软件包时，它会在 node_modules 文件夹中安装自身以及一些依赖包：

## 卸载 npm 软件包

### 卸载全局包

```
npm uninstall -g 包名
```

### 卸载本地包

```
npm uninstall 包名
```

如果使用 `-S` 或 `--save` 标志，则此操作还会移除 `package.json` 文件中的引用。

如果程序包是开发依赖项（列出在 `package.json` 文件的 devDependencies 中），则必须使用 `-D` 或 `--save-dev` 标志从文件中移除：

```
npm uninstall -S 包名
npm uninstall -D 包名
```

## npm 全局或本地的软件包

本地和全局的软件包之间的主要区别是：

- **本地的软件包** 安装在运行 `npm install <package-name>` 的目录中，并且放置在此目录下的 `node_modules` 文件夹中。
- **全局的软件包** 放在系统中的单独位置（确切的位置取决于设置），无论在何处运行 `npm install -g <package-name>`。

### 在代码中，应该只引入本地的软件包：

```
require('包名');
```

所有的项目都有自己的软件包本地版本，即使这看起来有点浪费资源，但与可能产生的负面影响相比也很小。

当程序包提供了可从 shell（CLI）运行的可执行命令、且可在项目间复用时，则该程序包应被全局安装。

也可以在本地安装可执行命令并使用 npx 运行，但是某些软件包最好在全局安装。

### 一些流行的全局软件包的示例有：

- `npm`
- `create-react-app`
- `vue-cli`
- `grunt-cli`
- `mocha`
- `react-native-cli`
- `gatsby-cli`
- `forever`
- `nodemon`

#### 可能已经在系统上安装了一些全局软件包。 可以通过在命令行上运行以下命令查看：

```
copy
npm list -g --depth 0
```

