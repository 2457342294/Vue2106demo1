<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item>体检人员登记</el-breadcrumb-item>
	</el-breadcrumb>
	<el-row class="btn_row">
		<el-button type="primary" @click="dialogFormVisible=true">预约登记</el-button>
		<el-row style="position: absolute;left: 300px;">
			<el-input v-model="input" style="width: 200px;" placeholder="输入姓名查询"></el-input>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
		</el-row>
		<el-date-picker
		      v-model="value2"
		      type="daterange"
		      unlink-panels
		      range-separator="至"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期"
		      :shortcuts="shortcuts"
			  class="timex"
		    >
		    </el-date-picker>
	</el-row>
	<el-table
	    :data="tableData"
		class="tab"
	    border
	    style="width: 100%">
	    <el-table-column
	      prop="id"
	      label="编号"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="180">
	    </el-table-column>
		<el-table-column
		  prop="sex"
		  label="性别"
		  width="180">
		</el-table-column>
	    <el-table-column
	      prop="age"
	      label="年龄">
	    </el-table-column>
		<el-table-column
		  prop="time"
		  label="预约时间">
		</el-table-column>
		<el-table-column
		  prop="card"
		  label="身份证">
		</el-table-column>
		<el-table-column
		  prop="username"
		  label="操作员">
		</el-table-column>
		<el-table-column
		  prop="oper"
		  width="260"
		  label="操作">
		  <el-button type="success" size="mini" round>通过审批</el-button>
		  <el-button type="danger" size="mini" round>取消预约</el-button>
		</el-table-column>
	  </el-table>
	  <el-row class="page">
		  <el-pagination
		    background
		    layout="prev, pager, next"
		    :total="1000">
		  </el-pagination>
	  </el-row>
	  <el-dialog v-model="dialogFormVisible" width="29%">
	    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
	      <el-form-item label="姓名" class="iform">
	        <el-input v-model="formLabelAlign.name"></el-input>
	      </el-form-item>
		  <el-form-item label="性别" class="iform">
		    <el-radio-group v-model="formLabelAlign.sex" style="position: absolute;left: 0px;top: 12px;">
		        <el-radio :label="'男'">男</el-radio>
		        <el-radio :label="'女'">女</el-radio>
		      </el-radio-group>
		  </el-form-item>
		  <el-form-item label="年龄" class="iform">
		    <el-input v-model="formLabelAlign.age"></el-input>
		  </el-form-item>
		  <el-form-item label="身份证" class="iform">
		    <el-input v-model="formLabelAlign.seid"></el-input>
		  </el-form-item>
	  	<el-row >
	  		<el-button type="primary" round style="position: relative;left: 200px;">登记</el-button>
	  	</el-row>
	    </el-form>
	  </el-dialog>
</template>

<script>
	export default {
	    data() {
	      return {
	        tableData: [{
	          id: 1,
	          name: '张三',
			  sex:'男',
	          age: '20',
			  time:1,
			  card:1231,
			  username:'李四'
	        },{
	          id: 1,
	          name: '张三',
	          age: '20',
			  time:1,
			  card:1231,
			  username:'李四'
	        },{
	          id: 1,
	          name: '张三',
	          age: '20',
			  time:1,
			  card:1231,
			  username:'李四'
	        },{
	          id: 1,
	          name: '张三',
	          age: '20',
			  time:1,
			  card:1231,
			  username:'李四'
	        },{
	          id: 1,
	          name: '张三',
	          age: '20',
			  time:1,
			  card:1231,
			  username:'李四'
	        }],
			dialogFormVisible: false,
			formLabelWidth: '120px',
			labelPosition: 'right',
			formLabelAlign: {
			  name: '',
			  sex:'男',
			  age:'',
			  seid:''
			  },
			  /* 时间选择器*/
			shortcuts: [{
				text: '最近一周',
				  value: (() => {
				    const end = new Date()
				    const start = new Date()
				    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
				    return [start, end]
				  })(),
				}, {
				  text: '最近一个月',
				  value: (() => {
				    const end = new Date()
				    const start = new Date()
				    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
				    return [start, end]
				  })(),
				}, {
				  text: '最近三个月',
				  value: (() => {
				    const end = new Date()
				    const start = new Date()
				    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
				    return [start, end]
				  })(),
				}],
				value1: '',
				value2: '',
				input:''
			
	      }
	    },
		methods: {
			
    }
	  }
</script>

<style scoped>
	.el-table__header-wrapper{
		height: 60px;
		line-height: 60px;
		
	} 
	 .cell{
		text-align: center;
	}
	 /*.el-form-item{
		text-align: center;
	}
	.el-form-item{
		width: 500px;
		position: relative;
		left: 170px;
	}
	.el-button-group{
		width: 100%;
	} */
	.btn_row{
		margin-top: 20px;
	}
	.tab{
		margin-top: 20px;
	}
	.page{
		height: 80px;
	}
	.page .el-pagination{
		height:40px;
		width: 100%;
		padding-top: 20px;
	}
	.page .el-pager{
		height: 40px;
	}
	.timex{
		position: absolute;
		right: 0px;
	}
	.iform{
		width: 450px;
	}
	.el-pagination::after, .el-pagination::before {
	    display: none;
	    content: "";
	}
</style>
