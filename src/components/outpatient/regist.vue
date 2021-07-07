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
			<el-button type="primary" @click="addregist = true">挂号</el-button>
		</el-col>
	</el-row>
</el-form>


<el-dialog
  title="挂号"
  v-model="addregist"
  width="80%"
  :before-close="handleClose">
	<el-form class="elformbd" ref="addform" :model="addform">
		<el-row :gutter="24">
			<el-col :span="6">
				<el-form-item label="类别">
					<el-select v-model="addform.category" placeholder="请选择类别">
						<el-option label="普通号" value="putong"></el-option>
						<el-option label="急诊号" value="jizhen"></el-option>
						<el-option label="专家号" value="zhuanjia"></el-option>
						<el-option label="副主任医师号" value="fuzhuren"></el-option>
						<el-option label="主任医师号" value="zhuren"></el-option>
						<el-option label="教授号" value="jiaoshou"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="科室">
					<el-select v-model="addform.famiroom" placeholder="请选择科室">
						<el-option label="内科" value="neike"></el-option>
						<el-option label="外科" value="waike"></el-option>
		  		    </el-select>
		  		</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="病人类别">
					<el-select v-model="addform.type" placeholder="请选择类型">
						<el-option label="自费" value="chuzhen"></el-option>
						<el-option label="医保" value="fuzhen"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="医生">
					<el-select v-model="addform.attendingdoc" placeholder="请选择医生">
						<el-option label="张三" value="zhangsan"></el-option>
						<el-option label="李四" value="lisi"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="6">
				<el-form-item label="费用">
				    <el-input :disabled="true" v-model="addform.moeny"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="诊疗卡号">
				    <el-input v-model="addform.medicalcard"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="出生日期">
					<el-date-picker
					      v-model="addform.birthday"
					      type="date"
						  style="width: 167px;"
					      placeholder="选择日期">
					    </el-date-picker>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="电话号码">
				    <el-input v-model="addform.phone"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="6">
				<el-form-item label="姓名">
				    <el-input v-model="addform.name"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="身份证">
				    <el-input v-model="addform.card"></el-input>
				</el-form-item>
			</el-col>
			
			<el-col :span="6">
				<el-form-item label="性别">
					<el-select v-model="addform.sex" placeholder="请选择性别">
						<el-option label="男" value="nan"></el-option>
						<el-option label="女" value="nv"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="6">
				<el-form-item label="班次">
					<el-select v-model="addform.sex" placeholder="请选择班次">
						<el-option label="上午" value="shangwu"></el-option>
						<el-option label="下午" value="xiawu"></el-option>
						<el-option label="晚上" value="wanshang"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="12">
				<el-form-item label="地址">
					<el-input
					  type="textarea"
					  :rows="2"
					  placeholder="地址"
					  v-model="addform.address">
					</el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="备注">
					<el-input
					  type="textarea"
					  :rows="2"
					  placeholder="备注"
					  v-model="addform.remark">
					</el-input>
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
      prop="id"
      label="编号">
    </el-table-column>
    <el-table-column
      prop="famiroom_name"
      label="科室"
	  width="50">
    </el-table-column>
    <el-table-column
      prop="category_name"
      label="类别"
	  width="90">
    </el-table-column>
	<el-table-column
	  prop="type"
	  label="类型">
	</el-table-column>
	<el-table-column
	  prop="money"
	  label="费用">
	</el-table-column>
	<el-table-column
	  prop="medi_no"
	  label="就诊卡号">
	</el-table-column>
	<el-table-column
	  prop="patient_name"
	  label="挂号人">
	</el-table-column>
	<el-table-column
	  prop="operator"
	  label="操作员">
	</el-table-column>
	<el-table-column
	  prop="attendingdoc_name"
	  label="主治医生">
	</el-table-column>
	<el-table-column
	  prop="date"
	  label="挂号时间">
	</el-table-column>
	<el-table-column
	  prop="state"
	  label="状态">
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
	v-model="addform">
  </el-pagination>
</template>

<script>
  export default {
	data() {
		return {
			addform: {
				category:'',
				famiroom:'',
				type: '',
				attendingdoc:'',
				moeny:'',
				medicalcard:'',
				name: '',
				card:'',
				birthday:'',
				phone:'',
				sex:'',
				address:'',
				remark:''
			},
			form: {
				medicalcard:'',
				name: '',
				card:'',
				phone:''
			},
			tableData: [{
				id: '11515151',
				famiroom_name: '内科',
				category_name: '普通号',
				type:'初诊',
				money:'10',
				medi_no:'21025001',
				patient_name:'芜湖',
				attendingdoc_name:'张三',
				operator:'阿巴阿巴',
				date:'2021-06-08',
				state:'未付款'
			}, {
				id: '18471914',
				famiroom_name: '外科',
				category_name: '专家号',
				type:'复诊',
				money:'40',
				medi_no:'21025001',
				patient_name:'芜湖',
				attendingdoc_name:'张三',
				operator:'阿巴阿巴',
				date:'2021-06-08',
				state:'未付款'
			}, {
				id: '27529522',
				famiroom_name: '内科',
				category_name: '急诊号',
				type:'初诊',
				money:'20',
				medi_no:'21025001',
				patient_name:'芜湖',
				attendingdoc_name:'张三',
				operator:'阿巴阿巴',
				date:'2021-06-08',
				state:'未付款'
			}],
			addregist:false
		}
    },
    methods: {
		onSubmit() {
			console.log('submit!');
		},
		reset(){
			this.form={
				medicalcard:'',
				name: '',
				card:'',
				phone:''
			}
		}
	}
  }
</script>

<style>

</style>

<style>

</style>
