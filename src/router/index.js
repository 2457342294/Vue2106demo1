import {
	createRouter,
	createWebHistory
} from 'vue-router'

//定义组件，定义路由
const routes = [
	//定义一级
	// {
	// 	name:'Token',
	// 	path:'/token',
	// 	component:() => import('/src/components/privilege/ToKen.vue'),
	// 	meta:'登录'
	// },

	{
		name: 'SeeADoctor',
		path: '/outpatient-seedoctor',
		component: () => import('/src/components/outpatient/seedoctor.vue'),
		meta: '医生就诊'
	},
	{
		name: 'zygzz', //命名路由
		path: '/zygzz',
		component: () => import('/src/components/xie/zygzz.vue'),
		meta: '住院医生工作站',
		children: [

		]
	},
	{
		name: 'hsgzz', //命名路由
		path: '/hsgzz',
		component: () => import('/src/components/xie/hsgzz.vue'),
		meta: '护士工作站',
		children: [
	
		]
	},
	{
		name: 'yz', //命名路由
		path: '/yz',
		component: () => import('/src/components/xie/yz.vue'),
		meta: '医嘱',
		children: []
	},
	{
		name: 'Home',
		path: '/',
		component: () => import('/src/components/Home.vue'),
		meta: '主页',
		children: [{
				name: 'HomeWork',
				path: '/',
				component: () => import('/src/components/HomeWork.vue'),
				meta: '工作台'
			},
			//刘亮
			{
				name: 'emp',
				path: '/',
				component: () => import('/src/components/liang/system/user/index.vue'),
				meta: '员工管理'
			},

			{
				name: 'scheduling',
				path: '/scheduling',
				component: () => import('/src/components/liang/system/scheduling/index.vue'),
				meta: '排班'
			},
			{
				name: 'dept',
				path: '/dept',
				component: () => import('/src/components/liang/system/dept/index.vue'),
				meta: '科室管理'
			},
			{
				name: 'user',
				path: '/user',
				component: () => import('/src/components/liang/system/user/index.vue'),
				meta: '角色管理'
			},
			//陈宇俊
			{
				name: 'OutpatientRegist',
				path: '/outpatient-regist',
				component: () => import('/src/components/outpatient/regist.vue'),
				meta: '门诊挂号'
			},
			{
				name: 'OutpatientPatient',
				path: '/outpatient-patient',
				component: () => import('/src/components/outpatient/patient.vue'),
				meta: '病人信息'
			},
			{
				name: 'OutpatientMedicalcard',
				path: '/outpatient-medicalcard',
				component: () => import('/src/components/outpatient/medicalcard.vue'),
				meta: '诊疗卡'
			},
			{
				name: 'OutpatientRecharge',
				path: '/outpatient-recharge',
				component: () => import('/src/components/outpatient/recharge.vue'),
				meta: '诊疗卡充值'
			},
			{
				name: 'OutpatientPayFees',
				path: '/outpatient-payfees',
				component: () => import('/src/components/outpatient/payfees.vue'),
				meta: '门诊缴费'
			},
			//谢嘉新
			{
				name: "hos_not",
				path: "/hos_not",
				component: () => import('/src/components/xie/hos_not.vue'),
				meta: '住院通知'
			},
			{
				name: "hos_not_xq",
				path: "/hos_not_xq",
				component: () => import('/src/components/xie/hos_not_xq.vue'),
				meta: '住院详情'
			},
			{
				name: "hos_out",
				path: "/hos_out",
				component: () => import('../components/xie/hos_out.vue'),
				meta: '出院通知'
			},
			{
				name: "pay_fee",
				path: "/pay_fee",
				component: () => import('../components/xie/pay_fee.vue'),
				meta: '缴费管理'
			},
			{
				name: "hos_out_xq",
				path: "/hos_out_xq",
				component: () => import('../components/xie/hos_out_xq.vue'),
				meta: '出院通知详情'
			},
			{
				name: "bed",
				path: "/bed",
				component: () => import('/src/components/xie/bed.vue'),
				meta: '床位管理'
			},
			//黄佳明
			{
				name: 'addOrder',
				path: '/addOrder', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/AddOrder.vue'),
				meta: '进货'
			},
			{
				name: 'adjust',
				path: '/adjust', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/Adjust.vue'),
				meta: '调价'
			},
			{
				name: 'allDrug',
				path: '/allDrug', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/AllDrug.vue'),
				meta: '所有药品'
			},
			{
				name: 'allOrder',
				path: '/allOrder', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/AllOrder.vue'),
				meta: '所有订单'
			},
			{
				name: 'caigou',
				path: '/caigou', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/caigou.vue'),
				meta: '采购'
			},
			{
				name: 'jinhuod',
				path: '/jinhuod', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/jinhuod.vue'),
				meta: '进货单'
			},
			{
				name: 'kuncun',
				path: '/kuncun', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/kuncun.vue'),
				meta: '库存'
			},
			{
				name: 'FindAllStock',
				path: '/findAllStock', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/FindAllStock.vue'),
				meta: '查询进货单'
			},
			{
				name: 'Supplier',
				path: '/upplier-mgr', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/Supplier.vue'),
				meta: '供货商'
			},
			{
				name: 'Take',
				path: '/take', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/Take.vue'),
				meta: '收货'
			},
			{
				name: 'AllDrug',
				path: '/alldrug', //动态路由参数，相当于格外给该路径添加了备注，通过不同的传值，来使用同一个组件做多种用途
				component: () => import('/src/components/ming/AllDrug.vue'),
				meta: '药品查询'
			},
			//黄英杰
			{
				name:'assay_pro_team',
				path:'/home/assay_pro_team',
				component: () => import('/src/components/hyj/assay_pro_team.vue'),
				meta:'团队体检'
			},
			{
				name:'assay_pro_person',
				path:'/home/assay_pro_person',
				component: () => import('/src/components/hyj/assay_pro_person.vue'),
				meta:'个人体检'
			},
			{
				name:'medical_sta',
				path:'/home/medical_sta',
				component: () => import('/src/components/hyj/medical_sta.vue'),
				meta:'体检管理'
			}
		]
	}
]

//创建Router路由实例
const router = createRouter({
	history: createWebHistory(),
	routes
})
//给路由实例定义一个对外引用（注入路由）
export default router
