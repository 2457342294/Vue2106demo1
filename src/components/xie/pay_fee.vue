<template>
	<el-row>
		<el-col :span="6" style="text-align: left;">缴费</el-col>
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
		<el-table-column prop="address" label="就诊卡余额">
		</el-table-column>
		<el-table-column label="操作">
			<el-button type="text" @click="dialogVisible = true">缴费</el-button>
			<el-button type="text" @click="dialogVisible = true">记录查询</el-button>
		</el-table-column>
	</el-table>
	<div class="block">
	  <el-pagination
	    layout="prev, pager, next"
	    :total="1000">
	  </el-pagination>
	</div>
	<el-row>
		<el-col :span="7">
			<div class="pay_fee">
			  <el-row>
				  <el-col>住院单号：</el-col>
			  </el-row>
			  <el-row>
				  <el-col>姓名：</el-col>
			  </el-row>
			  <el-row>
				  <el-col>缴费金额：<el-input style="width: 100px;"/></el-col>
			  </el-row>
			  <el-row>
				  <el-button type="primary">确定</el-button>
				   <el-button type="info">取消</el-button>
				  </el-row>
			</div>
		</el-col>
		<el-col :span="17">
			<el-table :data="tableDat" style="width: 100%">
				<el-table-column prop="date" label="住院单号">
				</el-table-column>
				<el-table-column prop="name" label="缴费金额">
				</el-table-column>
				<el-table-column prop="address" label="缴费时间">
				</el-table-column>
			</el-table>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		data(){
			return{
				dialogVisible:false,
				tableData: [{
					date: '20160502',
					name: '王小虎',
					address: '1200.78'
				}, {
					date: '20160504',
					name: '王小虎',
					address: '1222.21'
				}, {
					date: '20160501',
					name: '王小虎',
					address: '133.21'
				}, {
					date: '20160503',
					name: '王小虎',
					address: '5000'
				}]
			}
		}
	}
</script>

<style>
	.pay_fee .el-row{
		padding: 10px;
		text-align: left;
	}
</style>
