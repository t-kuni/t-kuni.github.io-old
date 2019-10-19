module.exports = {
    outputDir: 'docs',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        404: {
            entry: 'src/main.js',
            template: 'public/404.html',
            filename: '404.html',
        }
    },
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