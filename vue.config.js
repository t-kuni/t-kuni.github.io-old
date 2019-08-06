module.exports = {
    outputDir: 'docs',
    chainWebpack: config => {
        config.module
            .rule('yaml')
            .test(/\.ya?ml$/)
            .use('yaml-loader')
            .loader('yaml-loader')
            .end()
    }
};