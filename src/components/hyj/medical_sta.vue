<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item>体检管理</el-breadcrumb-item>
	</el-breadcrumb>
	<el-row style="margin-top: 20px;">
		<el-input v-model="input" style="width: 300px;" placeholder="输入套餐查询"></el-input>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		 <el-tag style="position: absolute;right: 0;margin-top: 10px;">筛选结果：5条</el-tag>
	</el-row>
	<el-table
	      :data="tableData2"
	      style="width: 100%;margin-top: 20px;">
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
	        label="性别">
	      </el-table-column>
		  <el-table-column
		    prop="age"
		    label="年龄">
		  </el-table-column>
		  <el-table-column
		    prop="time"
		    label="日期">
		  </el-table-column>
		  <el-table-column
		    prop="pro"
		    label="体检项目">
		  </el-table-column>
		  <el-table-column
		    prop="doc"
		    label="医生">
		  </el-table-column>
		  
		  <el-table-column
		    prop="oper"
		    label="操作">
			<el-button type="primary" size="mini" @click="dialog=true" round>打印体检单</el-button>
		  </el-table-column>
	    </el-table>
	
		<el-row class="page">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</el-row>
		<el-row>
			<el-input v-model="input" style="width: 300px;" placeholder="输入套餐查询"></el-input>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
			 <el-tag style="position: absolute;right: 0;margin-top: 10px;">筛选结果：5条</el-tag>
		</el-row>
		<el-table
		      :data="tableData1"
		      style="width: 100%;margin-top: 20px;">
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
		        label="性别">
		      </el-table-column>
			  <el-table-column
			    prop="age"
			    label="年龄">
			  </el-table-column>
			  <el-table-column
			    prop="time"
			    label="日期">
			  </el-table-column>
			  <el-table-column
			    prop="pro"
			    label="体检项目">
			  </el-table-column>
			  <el-table-column
			    prop="doc"
			    label="医生">
			  </el-table-column>
			  <el-table-column
			    prop="operer"
			    label="操作员">
			  </el-table-column>
			  <!-- <el-table-column
			    prop="oper"
			    label="操作">
				<el-button type="success" size="mini" round>通过</el-button>
				<el-button type="danger" size="mini" round>删除</el-button>
			  </el-table-column> -->
		    </el-table>
			<el-row class="page">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
			</el-row>
			<el-drawer
			  :before-close="handleClose"
			  v-model="dialog"
			  direction="ltr"
			  custom-class="demo-drawer"
			  ref="drawer"
			  >
			  <div class="demo-drawer__content">
			    <el-form :model="form">
			      <el-form-item label="活动名称" :label-width="formLabelWidth">
			        <el-input v-model="form.name" autocomplete="off"></el-input>
			      </el-form-item>
			      <el-form-item label="活动区域" :label-width="formLabelWidth">
			        <el-select v-model="form.region" placeholder="请选择活动区域">
			          <el-option label="区域一" value="shanghai"></el-option>
			          <el-option label="区域二" value="beijing"></el-option>
			        </el-select>
			      </el-form-item>
			    </el-form>
			    <div class="demo-drawer__footer">
			      <el-button @click="cancelForm">取 消</el-button>
			      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
			    </div>
			  </div>
			</el-drawer>
</template>

<script>
	export default {
      data() {
        return {
          tableData1: [{
            id: '1',
            name: '王小虎',
            sex: '男',
			age:18,
			time:'',
			pro:'asd',
			doc:'李四',
			operer:'王五'
          },{
            id: '1',
            name: '王小虎',
            sex: '男',
			age:18,
			time:'new Date',
			pro:'asd',
			doc:'李四',
			operer:'王五'
          },{
            id: '1',
            name: '王小虎',
            sex: '男',
			age:18,
			time:'new Date',
			pro:'asd',
			doc:'李四',
			operer:'王五'
          },{
            id: '1',
            name: '王小虎',
            sex: '男',
			age:18,
			time:'new Date',
			pro:'asd',
			doc:'李四',
			operer:'王五'
          },{
            id: '1',
            name: '王小虎',
            sex: '男',
			age:18,
			time:'new Date',
			pro:'asd',
			doc:'李四',
			operer:'王五'
          }],
		  tableData2: [{
		    id: '1',
		    name: '王小虎',
		    sex: '男',
		  	age:18,
		  	time:'new Date',
		  	pro:'asd',
		  	doc:'李四'
		  },{
		    id: '1',
		    name: '王小虎',
		    sex: '男',
		  	age:18,
		  	time:'new Date',
		  	pro:'asd',
		  	doc:'李四'
		  },{
		    id: '1',
		    name: '王小虎',
		    sex: '男',
		  	age:18,
		  	time:'new Date',
		  	pro:'asd',
		  	doc:'李四'
		  },{
		    id: '1',
		    name: '王小虎',
		    sex: '男',
		  	age:18,
		  	time:'new Date',
		  	pro:'asd',
		  	doc:'李四'
		  },{
		    id: '1',
		    name: '王小虎',
		    sex: '男',
		  	age:18,
		  	time:'new Date',
		  	pro:'asd',
		  	doc:'李四'
		  }],
		  input:'',
		   form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '80px',
		        timer: null,
				dialog: false,
				      loading: false,
		      };
        },methods:{
			handleClose(done) {
			      if (this.loading) {
			        return;
			      }
			      this.$confirm('确定要提交表单吗？')
			        .then(_ => {
			          this.loading = true;
			          this.timer = setTimeout(() => {
			            done();
			            // 动画关闭需要一定的时间
			            setTimeout(() => {
			              this.loading = false;
			            }, 400);
			          }, 2000);
			        })
			        .catch(_ => {});
		},
		cancelForm() {
		      this.loading = false;
		      this.dialog = false;
		      clearTimeout(this.timer);
		    }
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
	.page{
		height:80px;
	}
	.page .el-pagination{
		height:40px;
		width: 100%;
		padding-top: 20px;
	}
	.page .el-pager{
		height: 40px;
	}
	.el-pagination::after, .el-pagination::before {
	    display: none;
	    content: "";
	}
</style>
