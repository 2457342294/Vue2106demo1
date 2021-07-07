<template>
	<div>
		<!--  表头-->
		<el-header style="text-align: left; font-size: 12px ;height: 80px">
			<el-button type="primary" @click="dialogTableVisible = true" icon="el-icon-search">商品</el-button>
			<el-select v-model="Supplier" filterable placeholder="请选择供货商">
				<el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
			</el-select>应付金额：
			<el-input v-model="input1" :disabled="true" style="height: 200px; width: 100px"></el-input>实付金额：
			<el-input v-model="input2" style="height: 200px; width: 100px"></el-input>

			<el-date-picker v-model="value2" type="date" placeholder="收货日期" format="yyyy 年 MM 月 dd 日"
				value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>备注：
			<el-input v-model="input3" style="height: 200px; width: 150px"></el-input>
			<el-radio v-model="radio" label="1">付款</el-radio>
			<el-radio v-model="radio" label="2">未付款</el-radio>
			<el-button type="success" round >保存</el-button>
		</el-header>

		<el-dialog title="商品列表" id="goodsList" style="line-height:30px" :visible.sync="dialogTableVisible" width="80%">
			<el-table :data="goodData" style="margin-top: auto height:30px">
				<el-table-column prop="id" label="id"></el-table-column>
				<el-table-column prop="code" label="商品编码"></el-table-column>
				<el-table-column prop="name" label="商品名称"></el-table-column>
				<el-table-column prop="model" label="型号"></el-table-column>
				<el-table-column prop="unit" label="单位"></el-table-column>
				<el-table-column prop="purchasingPrice" label="成本均价"></el-table-column>
				<el-table-column prop="sellingPrice" label="销售单价"></el-table-column>
				<el-table-column prop="inventoryQuantity" label="库存"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="addGoodsToList(scope.row)" type="text" size="small">加入进货列表</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-dialog>
		<!-- 确定商品数目-->
		<el-dialog title="数目确定" :visible.sync="dialogFormVisible">
			<div slot="footer" class="dialog-footer">
				<el-form :model="form">
					<el-form-item label="商品编码" :label-width="formLabelWidth">
						<el-input v-model="form.code" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="商品名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="商品型号" :label-width="formLabelWidth">
						<el-input v-model="form.model" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="商品单位" :label-width="formLabelWidth">
						<el-input v-model="form.unit" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="商品单价" :label-width="formLabelWidth">
						<el-input v-model="form.price" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="商品数量" :label-width="formLabelWidth">
						<el-input v-model="form.num" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="商品总金额" :label-width="formLabelWidth">
						<el-input v-model="total" autocomplete="off" :disabled="true"></el-input>
					</el-form-item>
				</el-form>
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" >确 定</el-button>
			</div>
		</el-dialog>

		<!--表格里面的数据-->

		<el-table :data="tableData">
			<el-table-column prop="code" label="商品编码"></el-table-column>
			<el-table-column prop="name" label="商品名称"></el-table-column>
			<el-table-column prop="model" label="型号"></el-table-column>
			<el-table-column prop="unit" label="单位"></el-table-column>
			<el-table-column prop="price" label="单价"></el-table-column>
			<el-table-column prop="num" label="数量"></el-table-column>
			<el-table-column prop="total" label="总金额"></el-table-column>
		</el-table>
	</div>
</template>

<style>
	.el-header {
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>

<script>
	import axios from 'axios'
	import qs from "qs";
	var type_id = 11
	sessionStorage.setItem('item', [])
	export default {
		data() {
			return {
				Supplier: '',
				options: [],
				tableData: [],

				input2: '',
				input3: '',
				value2: '',
				radio: '1',
				goodData: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
					code: '',
					name: '',
					model: '',
					unit: '',
					price: '',
					num: '',
					total: ''
				}
			}
		},
		methods: {
			addGoodsToList: function(row) {
				this.form.code = row.code
				this.form.name = row.name
				this.form.model = row.model
				this.form.unit = row.unit
				this.form.num = ''
				this.form.price = row.sellingPrice
				this.dialogFormVisible = true
			},
		},

		computed: {
			total() {
				this.form.total = +this.form.price * +this.form.num
				return this.form.total
			},
			input1() {
				let count = 0
				this.tableData.forEach(ele => {
					count += ele.total
				})
				return count
			}
		}
	}
</script>
