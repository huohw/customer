//vue脚手架的一些配置
module.exports = {
	lintOnSave: false,  //词法解析
	productionSourceMap: false,  //生产环境
	// 跨域处理
	devServer: {
		// proxy: 'http://127.0.0.1:8888'
		proxy: {
			'/': {
				target: 'http://127.0.0.1:8888',
				changeOrigin: true
			}
		}
	}
};