<template>
	<div>
		<el-header style="text-align: left; font-size: 12px ;height: 80px">
		   <el-button type="primary" round @click="dialogVisible = true" :before-close="handleClose">商品</el-button>
		订单编号：{{dd}}
		预估金额：{{money}}
		
		采购日期<el-date-picker
		    v-model="value2"
		    type="date"
		    placeholder="收货日期"
		    format="yyyy 年 MM 月 dd 日"
		    value-format="yyyy-MM-dd HH:mm:ss"
		  ></el-date-picker>
		  <el-button type="success" round >保存</el-button>
		</el-header>
		<!--表格里面的数据-->
		<el-table :data="tableData">
			<el-table-column prop="code" label="药品编号"></el-table-column>
			<el-table-column prop="name" label="药品名"></el-table-column>
			<el-table-column prop="model" label="型号"></el-table-column>
			<el-table-column prop="unit" label="单位"></el-table-column>
			<el-table-column prop="price" label="进价"></el-table-column>
			<el-table-column prop="num" label="数量"></el-table-column>
			<el-table-column prop="total" label="总金额"></el-table-column>
		</el-table>
	</div>
	<el-dialog title="添加供应商" v-model="dialogVisible" width="30%" :before-close="handleClose">
		<el-input placeholder="供应商" width="20px" v-model="supplierId" clearable></el-input>
		<el-input placeholder="联系人" width="20px" v-model="amountPayable" clearable></el-input>
		<el-input placeholder="联系电话" width="20px" v-model="amountPaid" clearable></el-input>
		<el-input placeholder="供应商地址" width="20px" v-model="address" clearable></el-input>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</el-dialog>
</template>

<style>
</style>

<script>
	import axios from 'axios'
	import qs from "qs";
	export default {
		data() {
			return {
				dd:'12312312312',
				value2: '',
				money:100,
				dialogVisible: false,
				tableData: [{}]
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			}
		}
	}
</script>
