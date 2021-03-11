import AsyncComponent from './asyncComponent'

let menus = [
  {
    icon: 'icon icon1',
    title: '首页',
    path: '/',
    component: AsyncComponent(() => import('./Home'))
  },
  {
    icon: 'icon icon2',
    title: '客户管理',
    path: '/customer',
    component: AsyncComponent(() => import('./Customer')),
    children: [
      {
        icon: 'icon icon1',
        title: '普通客户',
        path: '/customer/common',
        component: AsyncComponent(() => import('./Customer'))
      },
      {
        icon: 'icon icon2',
        title: '上传客户照片',
        path: '/customer/uploadphoto',
        component: AsyncComponent(() => import('./UploadPhoto'))
      }
    ]
  },
  {
    icon: 'icon icon3',
    title: '统计管理',
    path: '/statistics',
    component: AsyncComponent(() => import('./Statistics'))
  }
];
export default menus;
