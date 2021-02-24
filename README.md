# brick-log4js #
适用于[brick-engine](https://github.com/kiba-zhao/brick-engine)的log4js插件，该插件用于提供日志功能．给通过inject插件加载注入的模块，提供简易标准的日志记录使用方法.

## Install ##

``` shell
npm install brick-log4js
```

## Configuration ##

**添加插件设置**

``` javascript
// {cwd}/plugin.js
// {cwd}/node_modules/{xxx engine}/plugin.js

exports.log4js = {
    package:'brick-log4js'
}
```

**在配置文件中定义参数**

``` javascript
// {cwd}/config/*.js
// {cwd}/node_modules/config/*.js

exports.log4js = {
  // log4js中configure方法调用参数.具体请参考log4js文档
  configure: {
    appenders: {
      out: { type: 'stdout' },
    },
    categories: {
      default: { appenders: [ 'out' ], level: 'debug' },
      logger1: { appenders: [ 'out' ], level: 'debug' },
    },
  },
  // log4js预处理模块加载配置(以下为默认设置).请参考xboot包中BootLoader类的构建参数．
  patterns: 'log4js/**/*.js',
  opts:{}
};
```

## Usage ##
模型示例

``` javascript
const {logger} = require('brick-log4js');

class Simple{
  search(){
    this.logger.info(xxxx);
    this.logger1.error(xxx);
  }
}

module.exports = Simple;

// 同等于 xxx.logger = log4js.getLogger();
logger(Simple);
// 同等于 xxx.logger1 = log4js.getLogger('app');
logger(Simple,{name:'app',property:'logger1'});

```

## Documentations ##
使用`jsdoc`生成注释文档

``` shell
git clone https://github.com/kiba-zhao/brick-log4js.git
cd brick-log4js
npm install
npm run docs
open docs/index.html
```
n
## License ##
[MIT](LICENSE)
