<template>
	<el-row>
		<el-col :span="6" style="text-align: left;">出院通知</el-col>
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
		<el-col :span="6" style="text-align: left;">出院登记</el-col>
		<el-col :span="18" style="text-align: right;">
			<el-input placeholder="请输入内容" style="width: 300px;" />
			<el-button type="primary">搜索</el-button>
		</el-col>
	</el-row>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="通知单号">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column prop="address" label="出院日期">
		</el-table-column>
		<el-table-column label="操作">			
				<router-link :to="{name:'hos_out_xq'}">查看</router-link>			
		</el-table-column>
	</el-table>
	<div class="block">
	  <el-pagination
	    layout="prev, pager, next"
	    :total="1000">
	  </el-pagination>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
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
				}]
			}
		}
	}
</script>

<style>
</style>
