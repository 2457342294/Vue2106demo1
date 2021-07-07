<template>
	<el-container>
		<el-header>
			<h1>主页工作台,欢迎</h1>
		</el-header>
		<el-container>
			<el-aside style="width: 220px;">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<el-submenu index="1">
						<template #title>
							<i class="el-icon-location"></i>
							<span>门诊</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<li>
									<router-link :to="'/outpatient-regist'">门诊挂号</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="1-2">
								<li>
									<router-link :to="'/outpatient-patient'">病人信息</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="1-3">
								<li>
									<router-link :to="'/outpatient-medicalcard'">诊疗卡</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="1-4">
								<li>
									<router-link :to="'/outpatient-recharge'">诊疗卡充值</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="1-5">
								<li>
									<router-link :to="'/outpatient-seedoctor'">医生就诊</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="1-6">
								<li>
									<router-link :to="'/outpatient-payfees'">门诊缴费</router-link>
								</li>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template #title>
							<i class="el-icon-menu"></i>
							<span>住院</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">
								<li>
									<router-link :to="{name:'hos_not'}">住院登记</router-link>
								</li>
							</el-menu-item>
							
							<el-menu-item index="2-3">
								<li>
									<router-link :to="{name:'hos_out'}">出院登记</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="2-4">
								<li>
									<router-link :to="{name:'pay_fee'}">缴费管理</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="2-2">
								<li>
									<router-link :to="{name:'bed'}">床位管理</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="2-5">
								<li>
									<router-link :to="{name:'zygzz'}">住院工作站</router-link>
								</li>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template #title>
							<i class="el-icon-document"></i>
							<span>药房药库</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-5">
								<li>
									<router-link :to="{name:'addOrder'}">进货</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-1">
								<li>
									<router-link :to="{name:'FindAllStock'}">查询进货单</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-7">
								<li>
									<router-link :to="{name:'jinhuod'}">进货单</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-8">
								<li>
									<router-link :to="{name:'kuncun'}">库存</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-9">
								<li>
									<router-link :to="{name:'allDrug'}">所有药品</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-10">
								<li>
									<router-link :to="{name:'allOrder'}">所有订单</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-11">
								<li>
									<router-link :to="{name:'caigou'}">采购</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-6">
								<li>
									<router-link :to="{name:'adjust'}">调价</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-2">
								<li>
									<router-link :to="{name:'Supplier'}">供货商</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-3">
								<li>
									<router-link :to="{name:'Take'}">收货</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="3-4">
								<li>
									<router-link :to="{name:'AllDrug'}">药品查询</router-link>
								</li>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template #title>
							<i class="el-icon-setting"></i>
							<span>权限</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">
								<li>
									<router-link :to="{name:'emp'}">员工管理</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="4-2">
								<li>
									<router-link :to="{name:'scheduling'}">排班</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="4-3">
								<li>
									<router-link :to="{name:'dept'}">科室管理</router-link>
								</li>
							</el-menu-item>
							<!-- <el-menu-item index="4-4">
								<li>
									<router-link :to="{name:'user'}">角色管理</router-link>
								</li>
							</el-menu-item> -->
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template #title>
							<i class="el-icon-warning"></i>
							<span>检查</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="5-1">
								<li>
									<router-link :to="{name:'assay_pro_person'}">个人体检</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="5-2">
								<li>
									<router-link :to="{name:'assay_pro_team'}">团队体检</router-link>
								</li>
							</el-menu-item>
							<el-menu-item index="5-3">
								<li>
									<router-link :to="{name:'medical_sta'}">体检管理</router-link>
								</li>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>


<style>
	@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		/* background-color: #D3DCE6; */
		color: #333;
		height: 574px;
		text-align: left;
		float: left;
	}

	.el-aside .el-menu .el-submenu .el-menu-item-group .el-menu-item li {
		list-style: none;
		padding: 10px 15px
	}

	.el-aside .el-menu .el-submenu .el-menu-item-group .el-menu-item li a {
		color: black;
		text-decoration: none;
	}

	.el-aside .el-menu .el-submenu .el-menu-item-group .el-menu-item li:hover a {
		color: darkslateblue;
	}

	.el-main {
		background-color: #E9EEF3;
		/* color: #333;
    text-align: center;
    line-height: 400px; */
	}

	.el-submenu .el-menu-item {
		height: 50px;
		line-height: 29px;
		padding: 0 45px;
		min-width: 200px;
	}

	.elformbd .el-row .el-col .el-form-item .el-form-item__label {
		width: 70px;
	}
</style>
