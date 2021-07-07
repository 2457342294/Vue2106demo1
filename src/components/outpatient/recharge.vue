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
			<el-button type="primary" @click="addrecharge = true">充值</el-button>
		</el-col>
	</el-row>
</el-form>

<el-dialog
  title="诊疗卡充值"
  v-model="addrecharge"
  width="50%"
  :before-close="handleClose">
  <el-form class="elformbd" ref="addform" :model="addform">
	    <el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="身份证">
					<el-input v-model="addform.crad"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="就诊卡">
					<el-input v-model="addform.medi_no"></el-input>
				</el-form-item>
			</el-col>
	    </el-row>
		<el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="支付方式">
					<el-select style="width: 229.25px;" v-model="addform.type" placeholder="请选择支付方式">
						<el-option label="支付宝" value="zhifubao"></el-option>
						<el-option label="微信" value="weixin"></el-option>
						<el-option label="现金" value="xianjin"></el-option>
						<el-option label="银行卡" value="yinhangka"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="密码">
					<el-input placeholder="请输入密码" show-password v-model="addform.passward"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		
	    <el-row :gutter="24">
		  <el-col :span="12">
			<el-form-item label="金额">
				<el-input v-model="addform.money"></el-input>
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
      prop="cardczjl_no"
      label="编号">
    </el-table-column>
    <el-table-column
      prop="cardczjl_medi_no"
      label="诊疗卡号">
    </el-table-column>
    <el-table-column
      prop="cardczjl_name"
      label="姓名">
    </el-table-column>
	<el-table-column
	  prop="cardczjl_money"
	  label="金额"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="cardczjl_card"
	  label="身份证">
	</el-table-column>
	<el-table-column
	  prop="cardczjl_type"
	  label="类型">
	</el-table-column>
	<el-table-column
	  prop="cardczjl_date"
	  label="时间">
	</el-table-column>
	<!-- <el-table-column
	      fixed="right"
	      label="操作"
	      width="250">
	      <template #default="scope">
	        <el-button type="text" size="small">停用</el-button>
			<el-button type="text" size="small">修改密码</el-button>
	      </template>
	</el-table-column> -->
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
				cardczjl_no: '1',
				cardczjl_medi_no: '1197512',
				cardczjl_name:'小白',
				cardczjl_money: '100',
				cardczjl_card:'430221200002282358',
				cardczjl_type:'微信支付',
				cardczjl_date:'2021-06-22'
			}, {
				cardczjl_no: '2',
				cardczjl_medi_no: '1197511',
				cardczjl_name:'小黑',
				cardczjl_money: '200',
				cardczjl_card:'430221200002282359',
				cardczjl_type:'支付宝支付',
				cardczjl_date:'2021-06-21'
			}, {
				cardczjl_no: '3',
				cardczjl_medi_no: '1197510',
				cardczjl_name:'小蓝',
				cardczjl_money: '300',
				cardczjl_card:'430221200002282350',
				cardczjl_type:'现金支付',
				cardczjl_date:'2021-06-20'
			}],
			addrecharge:false
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
