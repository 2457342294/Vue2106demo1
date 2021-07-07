<template>
	<el-container>
		<el-aside style="width: 207px;min-height: 625px;">
			<el-tabs>
				<el-tab-pane label="常用项目">
					<el-row>
						<el-tree :data="data" :props="defaultProps"></el-tree>
					</el-row>
				</el-tab-pane>
				<el-tab-pane label="医嘱模板"></el-tab-pane>
			</el-tabs>
		</el-aside>
		<el-container>
			<el-header style="text-align: left;">
				<el-button>暂存</el-button>
				<el-button>保存</el-button>
				<el-button>修改</el-button>
				<el-button>删除</el-button>
				<el-button @click="dialogVisibl = true">存为模板</el-button>
			</el-header>
			<el-main>
				<div class="yz">
					<el-row>
						项目分类：<el-select v-model="test">
							<el-option>中药</el-option>
							<el-option>西药</el-option>
							<el-option>检查项目</el-option>
							<el-option>检验项目</el-option>
							<el-option>手术项目</el-option>							
						</el-select>
					</el-row>
					<el-row>
						<el-col :span="12">
							医嘱期限：<el-radio v-model="radio" label="1">长期</el-radio>
							<el-radio v-model="radio" label="2">临时</el-radio>
							开始时间：<el-date-picker type="datetime" placeholder="选择日期" v-model="day"></el-date-picker>

						</el-col>
						<el-col :span="12">
							医生嘱托：<el-input placeholder="请输入医生嘱托"></el-input>
							医嘱备注：<el-input placeholder="请输入医嘱备注"></el-input>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							医嘱内容：<el-input type="textarea" :rows="1" placeholder="请输入内容" style="width: 75%;">
							</el-input>
						</el-col>
						<el-col :span="12">
							执行科室： <el-select v-model="test" filterable placeholder="请选择">
							</el-select>
							给药执行：<el-select v-model="test" filterable placeholder="请选择">
							</el-select>
						</el-col>
					</el-row>
					<el-row>
						<el-col>
							给药途径：<el-select v-model="value" placeholder="请选择">
								<el-option>
								</el-option>
							</el-select>
							频次：<el-input placeholder="请输入"></el-input>
							开嘱科室：<el-select v-model="value" placeholder="请选择">
								<el-option>
								</el-option>
							</el-select>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							剂量：<el-input placeholder="请输入" style="width: 100px;"></el-input>
							万u<el-input type="number" style="width: 80px;"></el-input>
							总量：<el-input placeholder="请输入" style="width: 100px;"></el-input>						
						</el-col>
					</el-row>					
						<el-table :data="tableData" height="300" style="width: 100%">
							<el-table-column prop="jiuzhenid" label="组">
							</el-table-column>
							<el-table-column prop="name" label="类型">
							</el-table-column>
							<el-table-column prop="sex" label="开始时间">
							</el-table-column>
							<el-table-column prop="date" label="医嘱内容">
							</el-table-column>
							<el-table-column prop="age" label="总量" >
							</el-table-column>
							<el-table-column prop="phone" label="用法">
							</el-table-column>
							<el-table-column prop="address" label="医生嘱托">
							</el-table-column>
							<el-table-column prop="address" label="执行科室">
							</el-table-column>
							<el-table-column prop="address" label="医嘱备注">
							</el-table-column>
							<el-table-column prop="address" label="开嘱科室">
							</el-table-column>
						</el-table>					
				</div>
				<el-dialog title="模板保存" v-model="dialogVisibl" center width="60%">
					<template #footer>
						<div class="yz">
						<el-row>
							<el-col>模板名称：<el-input placeholder="请输入内容"></el-input>
							编码：<el-input placeholder="请输入内容"></el-input>
							拼音：<el-input placeholder="请输入内容"></el-input>
							</el-col>
						</el-row>
						<el-row>
							<el-col>使用范围：<el-radio v-model="radio" label="1">个人</el-radio>
							<el-radio v-model="radio" label="2">本科室</el-radio></el-col>
						</el-row>						
							<el-table :data="tableData" height="300" style="width: 100%">
								<el-table-column
								      type="selection"
								      width="55">
								    </el-table-column>
								<el-table-column prop="jiuzhenid" label="组">
								</el-table-column>
								<el-table-column prop="name" label="类型">
								</el-table-column>
								<el-table-column prop="sex" label="开始时间">
								</el-table-column>
								<el-table-column prop="date" label="医嘱内容">
								</el-table-column>
								<el-table-column prop="age" label="总量" >
								</el-table-column>
								<el-table-column prop="phone" label="用法">
								</el-table-column>
								<el-table-column prop="address" label="医生嘱托">
								</el-table-column>
								<el-table-column prop="address" label="执行科室">
								</el-table-column>
								<el-table-column prop="address" label="医嘱备注">
								</el-table-column>
								<el-table-column prop="address" label="开嘱科室">
								</el-table-column>
							</el-table>						
						<span slot="footer" class="dialog-footer">
						    <el-button @click="dialogVisibl = false">取 消</el-button>
						    <el-button type="primary" @click="dialogVisibl = false">确 定</el-button>
						  </span>
						</div>						
					</template>
				</el-dialog>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisibl:false,
				radio: '1',
				day: '',
				test:'',
				data: [{
				          label: '中药',
				          children: [{
				                      label: '针灸',				                      
				                    }]
				        }, 
						{
						          label: '检验项目',
						          children: [{
						                      label: '胸部ct扫描',				                      
						                    }]
						        },
								{
								          label: '手术项目',
								          children: [{
								                      label: '针灸',				                      
								                    }]
								        },
						{
				          label: '西药',
				          children: []
				        }, {
				          label: '体检项目',
				          children: [{
				            label: '二级 3-1',
				            children: [{
				              label: '三级 3-1-1'
				            }]
				          }, {
				            label: '二级 3-2',
				            children: [{
				              label: '三级 3-2-1'
				            }]
				          }]
				        }],
				        defaultProps: {
				          children: 'children',
				          label: 'label'
				        }
			}
		}
	}
</script>

<style>
	.yz .el-input {
		width: 150px;
	}

	.yz .el-row {
		padding: 10px;
		text-align: left;
	}
	.el-dialog--center .el-dialog__body {
	    padding: 0px;
	}
</style>
