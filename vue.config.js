module.exports = {
    outputDir: 'docs',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader"
                        },
                        {
                            loader: "markdown-loader",
                            options: {
                                /* your options here */
                            }
                        }
                    ]
                }
            ]
        },
    },
    chainWebpack: config => {
        config.module
            .rule('yaml')
            .test(/\.ya?ml$/)
            .use('yaml-loader')
                .loader('yaml-loader')
                .end();
    }
};