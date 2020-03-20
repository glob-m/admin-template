export default [
  {
    menu_name: '首页',
    url: '/home',
    icon_url: 'icon-article iconfont',
    icon_type: 'font_class'
  },
  {
    menu_name: '一级菜单',
    url: '/user',
    icon_url: 'icon-article iconfont',
    icon_type: 'font_class',
    children: [
      {
        menu_name: '二级菜单',
        url: '/user'
      },
      {
        menu_name: '二级菜单',
        url: '/user'
      },
      {
        menu_name: '二级菜单',
        url: '/user'
      },
      {
        menu_name: '二级菜单',
        url: '/user',
        children: [
          {
            menu_name: '三级菜单',
            url: '/user'
          },
          {
            menu_name: '三级菜单',
            url: '/user'
          },
          {
            menu_name: '三级菜单',
            url: '/user'
          },
          {
            menu_name: '三级菜单',
            url: '/user'
          }
        ]
      }
    ]
  }
]
