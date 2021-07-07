<template>
	<div class="hos_not_xq"> 
	<el-row :gutter="20" >
		<el-col :span="10"><div>住院单号：</div></el-col>
	</el-row>
	<el-row>
		<el-col :span="6"><div>患者姓名：</div></el-col>
		<el-col :span="6"><div>性别：</div></el-col>
		<el-col :span="6"><div>年龄：</div></el-col>
		<el-col :span="6"><div>国籍：</div></el-col>
	</el-row>
	<el-row>
		<el-col :span="18"><div>出生地：</div></el-col>
		<el-col :span="6"><div>民族：</div></el-col>
	</el-row>
	<el-row>
		<el-col :span="18"><div>现住址:</div></el-col>
		<el-col :span="6"><div>电话：</div></el-col>
	</el-row>
	<el-row>
		<el-col :span="6">联系人：</el-col>
		<el-col :span="6">关系：</el-col>
		<el-col :span="6">联系人电话：</el-col>
		<el-col :span="6">联系人地址：</el-col>
	</el-row>
	<el-row>
		<el-col :span="18">入院途径：</el-col>
		<el-col :span="6">预交住院费：</el-col>
	</el-row>
	<el-row>
		<el-col :span="6">入院科：</el-col>
		<el-col :span="6">病房：</el-col>
		<el-col :span="12">病区地址</el-col>
	</el-row>
	<el-row>
		<el-col :span="24">诊断结果</el-col>
	</el-row>
	<el-row>
		<el-col :span="18">就诊医生：</el-col>
		<el-col :span="6">登记时间：</el-col>
	</el-row>
	<el-row>
		<el-col></el-col>
	</el-row>
	</div>
</template>	

<script>
	export default {
	  data() {
	    return {
	      input: ''
	    }
	  }
	}
</script>

<style>
	.hos_not_xq .el-row{
		padding: 10px;
		text-align: left;
	}
	.hos_not_xq .el-input{
		width: 200px;
	}
	
</style>
