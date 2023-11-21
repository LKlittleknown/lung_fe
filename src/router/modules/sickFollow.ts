export default {
  path: "/sickFollow",
  redirect: "/sickFollow/patientList/index",
  component: () => import("@/views/applyRecord/apply/index.vue"),
  meta: {
    icon: "informationLine",
    title: "病情跟踪",
    showLink: true,
    rank: 4
  },
  children: [
    {
      path: "/sickFollow/patientList/index",
      name: "SickFollow-PatientList",
      component: () => import("@/views/sickFollow/patientList/index.vue"),
      meta: {
        title: "患者列表"
      }
    },
    {
      path: "/sickFollow/diagnosisResult/index",
      name: "SickFollow-DiagnosisResult",
      component: () => import("@/views/sickFollow/diagnosisResult/index.vue"),
      meta: {
        title: "诊断结果"
      }
    }
  ]
} as RouteConfigsTable;
