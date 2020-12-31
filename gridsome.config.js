// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GridSite',
  siteDescription: 'GridSite Mega',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        // 定义数据类型
        typeName: 'BlogPost',
        // 从哪抓取md文件
        path: './content/blog/**/*.md',
        remark: {
          // remark options
        },
      },
    },
  ],
  // 定义用于集合的路有模板
  templates: {
    // Post: [
    //   {
    //     path: '/posts/:id',
    //     component: './src/templates/Post.vue',
    //   },
    // ],
  },
  // ransformers: {
  //   remark: {
  //     // global remark options
  //   },
  // },
}
