export default {
  path: "/identifyCheck",
  redirect: "/identifyCheck/identify-apply/index",
  meta: {
    icon: "informationLine",
    title: "识别检查",
    showLink: true,
    rank: 3
  },
  children: [
    {
      path: "/identifyCheck/identifyApply/index",
      name: "IdentifyCheck-IdentifyApply",
      component: () => import("@/views/identifyCheck/identifyApply/index.vue"),
      meta: {
        title: "识别申请"
      }
    },
    {
      path: "/identifyCheck/resultCheck/index",
      name: "IdentifyCheck-ResultCheck",
      component: () => import("@/views/identifyCheck/resultCheck/index.vue"),
      meta: {
        title: "结果审核"
      }
    }
  ]
} as RouteConfigsTable;
