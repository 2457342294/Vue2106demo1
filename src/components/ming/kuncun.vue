<template>
	<h1>药房</h1>
	<el-row :gutter="20">
		<el-col :span="4" :offset="1">
			<el-input placeholder="请输入药品名" v-model="input" clearable></el-input>
		</el-col>
		<el-col :span="4">
			<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
		</el-col>
		<el-col :span="1" :offset="1">
			<el-button icon="el-icon-search" circle></el-button>
		</el-col>
		<el-col :span="1" :offset="10">
			<el-button round @click="dialogFormVisible = true">发药</el-button>
			<el-dialog title="药房发药" v-model="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item label="医嘱编号" :label-width="formLabelWidth">
			      <el-input v-model="form.name" autocomplete="off" style="width: 200px;"></el-input>
			    </el-form-item>
			    <el-form-item label="药品选择" :label-width="formLabelWidth">
			      <el-select v-model="form.region" placeholder="请选择活动区域">
			        <el-option label="药品一" value="shanghai"></el-option>
			        <el-option label="药品二" value="beijing"></el-option>
			      </el-select>
			    </el-form-item>
				<el-form-item label="药品数量" :label-width="formLabelWidth">
					<el-input-number v-model="form.num" @change="handleChange" :min="1" :max="10" label="药品数量"></el-input-number>
				</el-form-item>
			  </el-form>
			  <template #footer>
			    <span class="dialog-footer">
			      <el-button @click="dialogFormVisible = false">取 消</el-button>
			      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			    </span>
			  </template>
			</el-dialog>
		</el-col>
	</el-row>
	<el-row>
		<el-col>
			<el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column type="expand">
			      <template #default="props">
			        <el-form label-position="left" inline class="demo-table-expand">
			          <el-form-item style="color:rgb(0,0,255)" label="药品价格">
			            <span>{{ props.row.name }}</span>
			          </el-form-item>
			          <el-form-item style="color:rgb(0,0,255)" label="用量">
			            <span>{{ props.row.shop }}</span>
			          </el-form-item>
			          <el-form-item style="color:rgb(0,0,255)" label="药品名称">
			            <span>{{ props.row.id }}</span>
			          </el-form-item>
			          <el-form-item style="color:rgb(0,0,255)" label="规格">
			            <span>{{ props.row.address }}</span>
			          </el-form-item>
			          <el-form-item style="color:rgb(0,0,255)" label="处方药">
			            <span>{{ props.row.desc }}</span>
			          </el-form-item>
					  <el-form-item style="color:rgb(0,0,255)" label="药品类别">
					    <span>{{ props.row.shopId }}</span>
					  </el-form-item>
					  <el-form-item style="color:rgb(0,0,255)" label="药品备注">
					    <span>{{ props.row.category }}</span>
					  </el-form-item>
			        </el-form>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="药品名称"
			      prop="id">
			    </el-table-column>
			    <el-table-column
			      label="药品价格"
			      prop="name">
			    </el-table-column>
			    <el-table-column
			      label="处方药"
			      prop="desc">
			    </el-table-column>
			  </el-table>
		</el-col>
	</el-row>
	<!-- 分页 -->
	<el-pagination
			style="text-align: center;"
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage4"
	      :page-sizes="[100, 200, 300, 400]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="400">
	</el-pagination>
</template>

<script>
	export default {
		methods: {
			handleClick(row) {
				console.log(row);
			},
			handleChange(value) {
				console.log(value);
			},
			handleSizeChange(val) {
			    console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
		},

		data() {
			return {
				tableData: [{
				          id: '小柴胡颗粒',
				          name: '15',
				          category: '暂无备注',
				          desc: '非处方',
				          address: '1/包',
				          shop: '一天三次',
				          shopId: '感冒冲剂'
				        }, {
				          id: '12987123',
				          name: '好滋好味鸡蛋仔',
				          category: '江浙小吃、小吃零食',
				          desc: '荷兰优质淡奶，奶香浓而不腻',
				          address: '上海市普陀区真北路',
				          shop: '王小虎夫妻店',
				          shopId: '10333'
				        }, {
				          id: '12987125',
				          name: '好滋好味鸡蛋仔',
				          category: '江浙小吃、小吃零食',
				          desc: '荷兰优质淡奶，奶香浓而不腻',
				          address: '上海市普陀区真北路',
				          shop: '王小虎夫妻店',
				          shopId: '10333'
				        }, {
				          id: '12987126',
				          name: '好滋好味鸡蛋仔',
				          category: '江浙小吃、小吃零食',
				          desc: '荷兰优质淡奶，奶香浓而不腻',
				          address: '上海市普陀区真北路',
				          shop: '王小虎夫妻店',
				          shopId: '10333'
				        }],
				input:'',
				dialogFormVisible: false,
				form: {
					  name: '',
					  region: '',
					  num: 1,
					  
					},
				formLabelWidth: '',
				value1: '',
			}
		}
	}
</script>

<style>
	
</style>