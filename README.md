react + webpack 的一个移动端的测试小例子，目前只写了一个底部菜单组件。

##步骤：

###\#1. 安装模块

	npm install

###\#2.调试

	npm run dev

###\#3.发布打包到dist目录

	npm run deploy


##注意：
####\#1.window下安装不了node-sass 需先安装ruby,再安装node-sass

####\#2.window下执行打包目录报错 直接执行下面语句即可打包

	webpack -p --config webpack.production.config.js
