<template>
<el-form ref="form" :model="form">
	<el-row :gutter="24">
		<el-col :span="8">
			<el-form-item label="" class="chufangsousuo">
				<el-input ></el-input>
			</el-form-item>
		</el-col>
		<el-col :span="16">
			<el-button type="success">查询</el-button>
			<el-button @click="reset">重置</el-button>
			<el-button @click="addpatient = true" type="primary">新增</el-button>
		</el-col>
	</el-row>
</el-form>

<el-dialog
  title="新增病人信息"
  v-model="addpatient"
  width="50%"
  :before-close="handleClose">
  <el-form class="elformbd" ref="addform" :model="addform">
	    <el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="姓名">
					<el-input v-model="addform.name"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="性别">
					<el-select style="width: 229.25px;" v-model="addform.sex" placeholder="请选择性别">
						<el-option label="男" value="nan"></el-option>
						<el-option label="女" value="nv"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
	    </el-row>
		<el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="电话">
					<el-input v-model="addform.phone"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="身份证">
					<el-input v-model="addform.card"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		
	    <el-row :gutter="24">
		  <el-col :span="12">
			<el-form-item label="出生日期">
				<el-date-picker
				      v-model="addform.birthday"
				      type="date"
					  style="width: 229.25px;"
				      placeholder="选择日期">
				    </el-date-picker>
			</el-form-item>
		  </el-col>
			<el-col :span="12">
				<el-form-item label="家庭住址">
					<el-input v-model="addform.siste"></el-input>
				</el-form-item>
			</el-col>
	    </el-row>
		<el-button @click="dialogVisible = false">取 消</el-button>
		<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	</el-form>
</el-dialog>
	
<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="patient_no"
      label="编号">
    </el-table-column>
    <el-table-column
      prop="patient_name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="patient_sex"
      label="性别">
    </el-table-column>
	<el-table-column
	  prop="patient_phone"
	  label="电话">
	</el-table-column>
	<el-table-column
	  prop="patient_idcart"
	  label="身份证">
	</el-table-column>
	<el-table-column
	  prop="patient_age"
	  label="年龄">
	</el-table-column>
	<el-table-column
	  prop="patient_birthdate"
	  label="出身日期">
	</el-table-column>
	<el-table-column
	  prop="patient_address"
	  label="家庭住址">
	</el-table-column>
	<el-table-column
	  prop="patient_date"
	  label="记录时间">
	</el-table-column>
	<el-table-column
	      fixed="right"
	      label="操作"
	      width="100">
	      <template #default="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <el-button type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
	v-model="form">
  </el-pagination>
	
</template>

<script>
export default {
	data() {
		return {
			addform:{
				name:'',
				birthday:'',
				sex:'',
				phone:'',
				card:'',
				siste:''
			},
			form: {
				patient_name:'',
				patient_sex:'',
				patient_phone:'',
				patient_idcart:''
			},
			tableData: [{
				patient_no: '17491414',
				patient_name: '小白',
				patient_sex: '男',
				patient_phone:'12312312311',
				patient_idcart:'430221200002282359',
				patient_age:'21',
				patient_birthdate:'2000-02-28',
				patient_address:'湖南省株洲市荷塘区',
				patient_date:'2021-02-01'
			}, {
				patient_no: '17491415',
				patient_name: '小黑',
				patient_sex: '男',
				patient_phone:'12312312312',
				patient_idcart:'430221200002282350',
				patient_age:'22',
				patient_birthdate:'2002-02-28',
				patient_address:'湖南省株洲市荷塘区',
				patient_date:'2021-02-01'
			}, {
				patient_no: '17491416',
				patient_name: '小蓝',
				patient_sex: '女',
				patient_phone:'12312312313',
				patient_idcart:'430221200002282352',
				patient_age:'25',
				patient_birthdate:'2004-12-22',
				patient_address:'湖南省株洲市荷塘区',
				patient_date:'2021-02-01'
			}],
			addpatient:false
		}
    },
    methods: {
		reset(){
			this.form={
				patient_name:'',
				patient_sex:'',
				patient_phone:'',
				patient_idcart:''
			}
		},
		handleClose(done) {
			done();
			this.addform={
				name:'',
				birthday:'',
				sex:'',
				phone:'',
				card:'',
				siste:''
			}
		}
	}
  }
</script>

<style>

</style>

<style>
/* @import url("//unpkg.com/element-plus/lib/theme-chalk/index.css"); */

</style>
