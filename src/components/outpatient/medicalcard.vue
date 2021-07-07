<template>
<el-form ref="form" :model="form" >
	<el-row :gutter="24">
		<el-col :span="8">
			<el-form-item label="" class="chufangsousuo">
			    <el-input ></el-input>
			</el-form-item>
		</el-col>
		<el-col :span="16">
			<el-button type="success">查询</el-button>
			<el-button @click="reset">重置</el-button>
			<el-button type="primary" @click="addmedicalcard = true">新增诊疗卡</el-button>
		</el-col>
	</el-row>
</el-form>

<el-dialog
  title="新增诊疗卡"
  v-model="addmedicalcard"
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
		<el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="密码">
					<el-input placeholder="请输入密码" show-password v-model="addform.passward"></el-input>
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
      prop="medi_no"
      label="编号"
	  width="50">
    </el-table-column>
    <el-table-column
      prop="medi_card"
      label="诊疗卡号">
    </el-table-column>
    <el-table-column
      prop="medi_balance"
      label="余额"
	  width="100">
    </el-table-column>
	<el-table-column
	  prop="patient_name"
	  label="姓名"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="medi_idcart"
	  label="身份证">
	</el-table-column>
	<el-table-column
	  prop="medi_newdate"
	  label="办卡时间">
	</el-table-column>
	<el-table-column
	  prop="medi_state"
	  label="状态"
	  width="60">
	</el-table-column>
	<el-table-column
	      fixed="right"
	      label="操作"
	      width="250">
	      <template #default="scope">
	        <el-button type="text" size="small">停用</el-button>
			<el-button type="text" size="small">修改密码</el-button>
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
				siste:'',
				passward:''
			},
			form: {
				patient_name:'',
				medi_card:'',
				patient_phone:'',
				medi_idcart:''
			},
			tableData: [{
				medi_no: '1',
				medi_card: '1197512',
				medi_balance: '510',
				patient_name:'小白',
				medi_idcart:'430221200002282358',
				medi_newdate:'2021-06-22',
				medi_state:'正常'
			}, {
				medi_no: '2',
				medi_card: '1197513',
				medi_balance: '613',
				patient_name:'小兰',
				medi_idcart:'430221200002282357',
				medi_newdate:'2020-12-15',
				medi_state:'正常'
			}, {
				medi_no: '3',
				medi_card: '1197513',
				medi_balance: '150',
				patient_name:'小黑',
				medi_idcart:'430221200002282355',
				medi_newdate:'2021-12-21',
				medi_state:'正常'
			}],
			addmedicalcard:false
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
				siste:'',
				passward:''
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
