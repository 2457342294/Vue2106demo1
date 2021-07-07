<template>
	<el-container>
		<el-aside style="width: 207px;min-height: 625px;">
			<el-row>住院病人列表</el-row>
			<el-row>科室:</el-row>
			<el-tabs type="border-card" class="jzeltabs">
				<el-tab-pane label="本科病人">
					<el-table :data="tableData" height="300" style="width: 100%">
						<el-table-column prop="jiuzhenid" label="住院单号" width="100">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="70">
						</el-table-column>
						<el-table-column prop="sex" label="性别" width="50">
						</el-table-column>
						<el-table-column prop="date" label="住院日期" width="150">
						</el-table-column>
						<el-table-column prop="age" label="年龄" width="50">
						</el-table-column>
						<el-table-column prop="phone" label="电话" width="110">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="200">
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="我的病人">
					<el-table :data="tableDat" height="300" style="width: 100%">
						<el-table-column prop="jiuzhenid" label="住院单号" width="100">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="70">
						</el-table-column>
						<el-table-column prop="sex" label="性别" width="50">
						</el-table-column>
						<el-table-column prop="date" label="住院日期" width="150">
						</el-table-column>
						<el-table-column prop="age" label="年龄" width="50">
						</el-table-column>
						<el-table-column prop="phone" label="电话" width="110">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="200">
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>

		</el-aside>
		<el-container>
			<el-header style="height: 200px;">
				<div class="hos_not">
					<el-row>
						<el-col :span="16">
							<el-button type="warning">修改</el-button>
							<el-button type="info">删除</el-button>
							<el-button type="success"><router-link style="text-decoration: none;color: white;" :to="{name:'yz'}">新开医嘱</router-link></el-button>
							<el-button @click="dialogVisibl = true">停嘱</el-button>
							<el-button>出院通知</el-button>
						</el-col>
						<el-col :span="8">
							<el-input v-model="input" placeholder="请输入内容" style="width: 200px;"></el-input>
							<el-button type="primary">病人搜索</el-button>
						</el-col>
					</el-row>
					<el-row>
						<el-table :data="value" style="width: 100%">
							<el-table-column prop="jiuzhenid" label="住院单号">
							</el-table-column>
							<el-table-column prop="name" label="姓名">
							</el-table-column>
							<el-table-column prop="sex" label="性别">
							</el-table-column>
							<el-table-column prop="date" label="住院日期">
							</el-table-column>
							<el-table-column prop="age" label="年龄">
							</el-table-column>
							<el-table-column prop="phone" label="电话">
							</el-table-column>
							<el-table-column prop="address" label="地址" width="200">
							</el-table-column>
						</el-table>
					</el-row>
				</div>
			</el-header>
			<el-main>
				<el-tabs v-model="activeName">

					<el-tab-pane label="病人医嘱记录" name="first">

						<el-row>
							<el-checkbox>已执行</el-checkbox>
							<el-checkbox>未执行</el-checkbox>
							<el-checkbox>停止</el-checkbox>
						</el-row>
						<el-tabs v-model="activeNam">
							<el-tab-pane label="长期" name="first_one">

								<el-table :data="yizhu" height="300" style="width: 100%">
									
									<el-table-column prop="jiuzhenid" label="状态">
									</el-table-column>
									<el-table-column prop="name" label="开始时间">
									</el-table-column>
									<el-table-column prop="sex" label="医嘱内容">
									</el-table-column>
									<el-table-column prop="date" label="用法">
									</el-table-column>
									<el-table-column prop="age" label="单位总量">
									</el-table-column>
									<el-table-column prop="phone" label="开嘱医师">
									</el-table-column>
									<el-table-column prop="address" label="执行科室">
									</el-table-column>
								</el-table>
								<el-dialog title="长嘱停止" v-model="dialogVisibl" width="70%" center>
									<template #footer>
										<el-row>
											 <el-button type="primary">确认</el-button>
											 <el-button type="info">取消</el-button>
										</el-row>
										<el-table
										    ref="multipleTable"
										    :data="yizhu"
										    tooltip-effect="dark"
										    style="width: 100%"
										    @selection-change="handleSelectionChange">
											<el-table-column
											      type="selection"
											      width="55">
											    </el-table-column>
										    <el-table-column prop="jiuzhenid" label="状态">
										    </el-table-column>
										    <el-table-column prop="name" label="开始时间">
										    </el-table-column>
										    <el-table-column prop="sex" label="医嘱内容">
										    </el-table-column>
										    <el-table-column prop="date" label="用法">
										    </el-table-column>
										    <el-table-column prop="age" label="单位总量">
										    </el-table-column>
										    <el-table-column prop="phone" label="开嘱医师">
										    </el-table-column>
										    <el-table-column prop="address" label="执行科室">
										    </el-table-column>
										  </el-table>
									</template>
								</el-dialog>
							</el-tab-pane>
							<el-tab-pane label="短期" name="first_second">
								<el-table :data="yizhu2" height="300" style="width: 100%">
									<el-table-column prop="jiuzhenid" label="状态">
									</el-table-column>
									<el-table-column prop="name" label="开始时间">
									</el-table-column>
									<el-table-column prop="sex" label="医嘱内容">
									</el-table-column>
									<el-table-column prop="date" label="用法">
									</el-table-column>
									<el-table-column prop="age" label="单位总量">
									</el-table-column>
									<el-table-column prop="phone" label="开嘱医师">
									</el-table-column>
									<el-table-column prop="address" label="执行科室">
									</el-table-column>
								</el-table>
							</el-tab-pane>
						</el-tabs>
					</el-tab-pane>
					<el-tab-pane label="病人病历记录" name="second">
						<el-table :data="bingli" height="300" style="width: 100%">
							<el-table-column prop="jiuzhenid" label="病历名称">
							</el-table-column>
							<el-table-column prop="name" label="科室">
							</el-table-column>
							<el-table-column prop="sex" label="记录人">
							</el-table-column>
							<el-table-column prop="date" label="记录时间">
							</el-table-column>
							<el-table-column label="操作">
								<el-button type="text" @click="dialogVisible = true">查看</el-button>
							</el-table-column>							
						</el-table>						
						<el-dialog title="病历详情" v-model="dialogVisible" width="70%" center>
							<template #footer>
								<div class="hos_not">
									<el-row>
										<el-col :span="8">住院单号：</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">姓名：</el-col>
										<el-col :span="8">年龄：</el-col>
										<el-col :span="8">性别：</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">入院日期：</el-col>
										<el-col :span="8">记录日期：</el-col>
									</el-row>
									<el-row>
										主诉：
									</el-row>
									<el-row>
										现病史：
									</el-row>
								</div>
							</template>
						</el-dialog>
					</el-tab-pane>
					<el-tab-pane label="病人护理记录" name="third">
						<el-table :data="huli" height="300" style="width: 100%">
							<el-table-column prop="jiuzhenid" label="日期">
							</el-table-column>
							<el-table-column prop="name" label="时间">
							</el-table-column>
							<el-table-column prop="sex" label="体温">
							</el-table-column>
							<el-table-column prop="date" label="脉搏">
							</el-table-column>
							<el-table-column prop="age" label="呼吸">
							</el-table-column>
							<el-table-column prop="phone" label="血压">
							</el-table-column>
							<el-table-column prop="address" label="病情观察及护理">
							</el-table-column>
							<el-table-column prop="qm" label="签名">
							</el-table-column>
						</el-table>
						
					</el-tab-pane>
				</el-tabs>				
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				dialogVisibl: false,
				tableData: [{
					id: '123',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02 14:25:26',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: '1',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: '1',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: '1',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}, , {
					id: '1',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				tableDat: [{
					id: '123',
					jiuzhenid: '20210624001',
					name: '张三',
					sex: '男',
					date: '2016-05-02 14:25:26',
					age: '18',
					phone: '12345678900',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				yizhu: [{
					id: '123',
					jiuzhenid: '未执行',
					name: '2016-05-02 14:25:26',
					sex: '特级护理',
					date: '',
					age: '1',
					phone: '管理员',
					address: '呼吸科'
				}],
				yizhu2: [{
					id: '123',
					jiuzhenid: '已执行',
					name: '2016-05-02 14:25:26',
					sex: '禁饮水',
					date: '',
					age: '1',
					phone: '管理员',
					address: '呼吸科'
				}],
				huli: [{
					id: '123',
					jiuzhenid: '2016-05-02',
					name: '14:25:26',
					sex: '37',
					date: 76,
					age: 18,
					phone: "100/60",
					address: "患者疼痛减缓，入睡",
					qm: "xxx"
				}],
				bingli: [{
					id: '123',
					jiuzhenid: '2016-05-02',
					name: '14:25:26',
					sex: '37',
					date: 76,
					age: 18,
					phone: "100/60",
					address: "患者疼痛减缓，入睡",
					qm: "xxx"
				}],
				activeName: 'first',
				activeNam: 'first_one'
			}
		},
		 methods: {
		      toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		      },
		      handleSelectionChange(val) {
		        this.multipleSelection = val;
		      }
		    }
	}
</script>

<style>
	@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

	* {
		margin: 0px;
		padding: 0px;
	}

	.el-header,
	.el-footer {
		background-color: #ebebeb;
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


	/* 123*/
	.el-tabs--border-card>.el-tabs__content {
		padding: 0px;
	}

	.el-table .cell {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-all;
		line-height: 35px;
		padding-left: 0px;
		padding-right: 0px;
	}

	.el-table td,
	.el-table th {
		padding: 0px 0;
		min-width: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		text-overflow: ellipsis;
		vertical-align: middle;
		position: relative;
		text-align: left;
	}

	.jhinput .el-input__inner {
		height: 30px;
	}

	.jzeltabs .el-tabs__content {
		padding: 0px;
		height: 300px;
	}

	.el-aside .el-row {
		text-align: left;
		padding: 10px;
	}

	.hos_not .el-row {
		text-align: left;
		padding-top: 10px;
	}
	.el-dialog--center .el-dialog__body {
	    padding: 0px;
	}
</style>
