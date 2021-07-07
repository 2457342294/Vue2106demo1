<template>	
	<el-row>
		<el-col :span="6" style="text-align: left;">住院通知</el-col>
		<el-col :span="18" style="text-align: right;">
			<el-input placeholder="请输入内容" style="width: 300px;" />
			<el-button type="primary">搜索</el-button>
		</el-col>
	</el-row>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="登记单号">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column prop="address" label="诊断科">
		</el-table-column>
		<el-table-column label="操作">
			<el-button type="text" @click="dialogVisible = true">登记</el-button>
		</el-table-column>
	</el-table>
	<div class="block">
	  <el-pagination
	    layout="prev, pager, next"
	    :total="1000">
	  </el-pagination>
	</div>
	<el-row>
		<el-col :span="6" style="text-align: left;">住院登记</el-col>
		<el-col :span="18" style="text-align: right;">
			<el-input placeholder="请输入内容" style="width: 300px;" />
			<el-button type="primary">搜索</el-button>
		</el-col>
	</el-row>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="住院单号">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column prop="address" label="病房">
		</el-table-column>
		<el-table-column label="操作">			
				<router-link :to="{name:'hos_not_xq'}">查看</router-link>		
		</el-table-column>
	</el-table>
	<div class="block">
	  <el-pagination
	    layout="prev, pager, next"
	    :total="1000">
	  </el-pagination>
	</div>
	<el-dialog title="住院登记" v-model="dialogVisible" width="40%">
		<el-row>
			<el-col :span="16">
				<div>现住址：
					<el-input placeholder="请输入内容" style="width: 300px;" />
				</div>
			</el-col>
		</el-row>
		<el-row>			
				<div>电话：
					<el-input placeholder="请输入内容" />
				</div>						
		</el-row>
		<el-row>
			<el-col :span="16">联系人：
				<el-input placeholder="请输入内容" />
			</el-col>		
		</el-row>
		<el-row>
			<el-col>关系：
				<el-input placeholder="请输入内容" />
			</el-col>	
		</el-row>
		<el-row>
			<el-col :span="15">联系人电话：
				<el-input placeholder="请输入内容" />
			</el-col>						
		</el-row>
		<el-row>
			<el-col>联系人地址：
				<el-input placeholder="请输入内容" />
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="16">预交住院费：
				<el-input placeholder="请输入内容" />
			</el-col>
		</el-row>
		<el-row>
			
		</el-row>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				tableData: [{
					date: '20160502',
					name: '王小虎',
					address: '骨科'
				}, {
					date: '20160504',
					name: '王小虎',
					address: '皮肤科'
				}, {
					date: '20160501',
					name: '王小虎',
					address: '肛门科'
				}, {
					date: '20160503',
					name: '王小虎',
					address: '骨科'
				}],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		},

	}
</script>

<style scoped>
 	.el-row {
		padding: 10px;
		text-align: left;
	}

	.el-input {
		width: 200px;
	}

</style>
