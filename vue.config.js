module.exports = {
    publicPath:'/', // 根路径
    outputDir:'dist', // 构建输出目录
    assetsDir:'asserts', // 静态资源目录（js css img）
    lintOnSave:false, // 是否开启eslint保存检测，有效值 true || false || error
    devServer: {
        open: false, // 启动项目是否自动弹出页面
        host: 'localhost', // 主机名
        port: 8180, // 端口号
        https: false, //https
        hotOnly: false, // 热更新 默认关闭
    }
}