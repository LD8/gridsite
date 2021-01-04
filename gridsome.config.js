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
    {
      use: '@gridsome/source-strapi',
      options: {
        // 接口地址
        apiURL: 'http://localhost:1337',
        // 最多能够查询多少条数据
        queryLimit: 1000, // Defaults to 100
        // 最关键：指定获取哪些内容
        contentTypes: ['post'],
        typeName: 'Strapi',
        singleTypes: ['landing'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  // 定义用于集合的路由模板
  templates: {
    // 由 @gridsome/source-strapi 自动配置的「键」名：由上面的 typeName+contentType 组成，不能乱写
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
  },
  // ransformers: {
  //   remark: {
  //     // global remark options
  //   },
  // },
}
