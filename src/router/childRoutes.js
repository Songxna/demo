// 产品列表
import Goods from '../views/Goods/'
const GoodsList = () =>
  import('../views/Goods/goods-list')
const GoodsClassify = () =>
  import('../views/Goods/goods-classify')
// 订单列表
import Order from '../views/Order'
const OrderList = () =>
  import('../views/Order/order-list')
const ProductManage = () =>
  import('../views/Order/product-manage')
const ProductionList = () =>
  import('../views/Order/product-manage/production-list')
const ReviewManage = () =>
  import('../views/Order/product-manage/review-manage')
const ReturnGoods = () =>
  import('../views/Order/return-goods')

// 动态路由
export const childRoutes = [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: {
        name: '产品管理',
        icon: 'icon-order-manage'
      },
      children: [{
        path: 'list',
        name: 'goods-list',
        component: GoodsList,
        meta: {
          name: '产品列表',
          icon: 'icon-home'
        }
      },
      {
        path: 'classify',
        name: 'goods-classify',
        component: GoodsClassify,
        meta: {
          name: '产品分类',
          icon: 'icon-product-manage'
        }
      }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        name: '订单管理',
        icon: 'icon-email'
      },
      children: [{
        path: 'list',
        name: 'order-list',
        component: OrderList,
        meta: {
          name: '订单列表',
          icon: 'icon-quit'
        }
      },
      {
        path: 'product',
        name: 'product-manage',
        component: ProductManage,
        meta: {
          name: '生产管理',
          icon: 'icon-service'
        },
        children: [{
          path: 'list',
          name: 'product-list',
          component: ProductionList,
          meta: {
            name: '生产列表',
            icon: 'icon-nav'
          }
        },
        {
          path: 'review',
          name: 'review-manage',
          component: ReviewManage,
          meta: {
            name: '审核管理',
            icon: 'icon-finance-manage'
          }
        }
        ]
      },
      {
        path: 'returnGoods',
        name: 'return-goods',
        component: ReturnGoods,
        meta: {
          name: '退货管理',
          icon: 'icon-product-manage'
        }
      }
      ]
    }
  
  ]