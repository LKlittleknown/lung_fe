export default {
  path: "/windowTest",
  redirect: "/windowTest/window1/index",
  meta: {
    icon: "informationLine",
    title: "窗口测试",
    showLink: true,
    rank: 2
  },
  children: [
    {
      path: "/windowTest/window1/index",
      name: "WindowTest-Window1",
      component: () => import("@/views/windowTest/window1/index.vue"),
      meta: {
        title: "窗口测试1"
      }
    },
    {
      path: "/windowTest/window2/index",
      name: "WindowTest-Window2",
      component: () => import("@/views/windowTest/window2/index.vue"),
      meta: {
        title: "窗口测试2"
      }
    }
  ]
} as RouteConfigsTable;
