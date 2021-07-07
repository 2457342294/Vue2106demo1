<template>
	<h3>首页/体检中心/团队体检</h3>
	<div class="input">
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
	</div>
	<div class="btn">
		<el-button type="primary" @click="dialogFormVisible=true">新增体检套餐</el-button>
	</div>
	<div class="sel">
		<el-select v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
	<div class="tab">
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="id"
		      label="编号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="项目名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="price"
		      label="价格">
		    </el-table-column>
			<el-table-column
			  prop="type"
			  label="类型">
			</el-table-column>
			<el-table-column
			  prop="oper"
			  label="操作">
			  <el-button type="primary" icon="el-icon-edit" circle></el-button>
			  <el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-table-column>
		  </el-table>
	</div>
	<div class="page">
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
	</div>
	<div>
		<el-dialog v-model="dialogFormVisible">
		  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
		    <el-form-item label="名称">
		      <el-input v-model="formLabelAlign.name"></el-input>
		    </el-form-item>
		    <el-form-item label="价格">
		      <el-input v-model="formLabelAlign.region"></el-input>
		    </el-form-item>
			<el-row >
				<el-button round style="position: relative;left: 400px;">确定</el-button>
			</el-row>
		  </el-form>
		  
		  
		</el-dialog>
	</div>
	
</template>

<script>
	export default {
	    data() {
	      return {
	        tableData: [{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        },{
	          id: 1,
	          name: '全身体检',
	          price: '158元',
			  type:'团队体检'
	        }],
			dialogFormVisible: false,
			formLabelWidth: '120px',
			labelPosition: 'right',
			formLabelAlign: {
			  name: '',
			  region: ''
			},
			options: [{
			          value: '选项1',
			          label: '个人体检'
			        }, {
			          value: '选项2',
			          label: '团队体检'
			        }],
			        value: '',
					input:''
	      }
	    },
		methods: {
			
		}
	  }
</script>

<style scoped>
	.el-table__header-wrapper{
		height: 100px;
		line-height: 100px;
		
	}
	.cell{
		text-align: center;
	}
	h3{
		float: left;
		width: 100%;
		line-height: 50px;
		text-align: left;
	}
	.btn{
		 float: left; 
		line-height: 0px;
		text-align: left;
		position: relative;
		top: 10px;
		left: 317px;
	}
	.tab{
		margin-top: 15px;
		float: left;
		position: relative;
		bottom: 30px;
		width: 100%;
	}
	 .el-form-item{
		text-align: center;
	}
	.el-form{
		width: 500px;
	} 
	.el-form-item{ 
		width: 500px;
		position: relative;
		/* left: 170px; */
	}
	.el-button-group{
		width: 100%;
	}
	.page .el-pagination{
		height: 50px;
		line-height: 50px;
		padding-top: 20px;
		position: relative;
	}
	.page{
		float:left;
		position: relative;
		left: 500px;
	}
	.sel{
		float: right;
		position: relative;
		top: 10px;
	}
	.el-main{
		line-height: 0;
	}
	.input{
		width: 350px;
		float: left;
		position: relative;
		top: 10px;
	}
	.el-input{
		
	}
	.input .el-input{
		width: 300px;
		position: relative;
		/* right: 25px; */
	}
	.input .el-button--primary{
		position: relative;
		bottom: 40px;
		left: 320px;
	}
	.el-select__popper{
		position: relative;
		top: 40px;
	}
	.el-table th, .el-table tr{
		height: 20px;
	}
	.el-table thead{
		height: 80px;
	}
</style>
