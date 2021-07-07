<template>
	<div width=100%>

		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
			<el-table-column prop="purchaseNumber" label="药品编号" width="100">
			</el-table-column>
			<el-table-column prop="supplierId" label="药品名" width="100">
			</el-table-column>
			<el-table-column prop="amountPayable" label="拼音码" width="100">
			</el-table-column>
			<el-table-column prop="amountPaid" label="药品类别" width="150">
			</el-table-column>
			<el-table-column prop="address" label="药品类型" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品规格" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品进价" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品售价" width="200">
			</el-table-column>
			<el-table-column prop="address" label="有效日期" width="200">
			</el-table-column>
			<el-table-column prop="address" label="换算系数" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品等级" width="200">
			</el-table-column>

			<el-table-column label="药品详情" width="180">
				<template #default="scope">
					<el-popover effect="light" trigger="hover" placement="top">
						<template #default>
							<p>姓名: {{ scope.row.address }}</p>
						</template>
						<template #reference>
							<div class="name-wrapper">
								<el-tag size="medium">药品详情</el-tag>
							</div>
						</template>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<el-button type="text" size="small" @click="dialogVisible2 = true">编辑信息</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			:page-sizes="[2, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
			:total="tableData.length">
		</el-pagination>
	</div>
	<el-dialog title="药品库存" v-model="dialogVisible2" width="50%" :before-close="handleClose">
		<el-table :data="tableData">
			<el-table-column prop="purchaseNumber" label="库存编号" width="100">
			</el-table-column>
			<el-table-column prop="supplierId" label="药品名" width="100">
			</el-table-column>
			<el-table-column prop="amountPayable" label="拼音码" width="100">
			</el-table-column>
			<el-table-column prop="amountPaid" label="药品仓库" width="150">
			</el-table-column>
			<el-table-column prop="address" label="药品类型" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品规格" width="200">
			</el-table-column>
			<el-table-column prop="address" label="药品进价" width="200">
			</el-table-column>
		</el-table>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible2 = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				dialogVisible: false,
				dialogVisible2: false,
				formLabelWidth: '50px',
				currentPage: 1, //初始页
				pagesize: 2, //    每页的数据
				supplierId: '',
				amountPayable: '',
				amountPaid: '',
				address: '',
				tableData: [{
					purchaseNumber: 1,
					supplierId: 'zzz医药',
					amountPayable: '王小虎',
					amountPaid: '1988343781',
					address: '上海市普陀区金沙江路 1518 弄',
					zhuangtai: true
				}, {
					purchaseNumber: 2,
					supplierId: 'zzz医药',
					amountPayable: '王小虎',
					amountPaid: '1988343781',
					address: '上海市普陀区金沙江路 1517 弄',
					zhuangtai: true
				}, {
					purchaseNumber: 3,
					supplierId: 'zzz医药',
					amountPayable: '王小虎',
					amountPaid: '1988343781',
					address: '上海市普陀区金沙江路 1519 弄',
					zhuangtai: true
				}, {
					purchaseNumber: 4,
					supplierId: 'zzz医药',
					amountPayable: '王小虎',
					amountPaid: '1988343781',
					address: '上海市普陀区金沙江路 1516 弄',
					zhuangtai: true
				}]
			}
		},
		methods: {
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function(size) {
				this.pagesize = size;
				console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页
			},
			getALLPurs: function() {
				//去后端请求数据
				axios.get("/api/purchases/").then(res => {
					console.log(res.data.aa);
					this.tableData = res.data.aa
				})
			},
			handleClick(row) {
				console.log(row);
			},
		}
	};
</script>

<style scoped>

</style>
