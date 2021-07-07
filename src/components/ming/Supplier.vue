<template>
	<div>
		<el-button type="text" @click="dialogVisible = true">添加供货商</el-button>
		<el-dialog title="添加供货商" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
			<el-table-column prop="purchaseNumber" label="供货商编号">
			</el-table-column>
			<el-table-column prop="supplierId" label="供货商">
			</el-table-column>
			<el-table-column prop="amountPayable" label="联系人">
			</el-table-column>
			<el-table-column prop="amountPaid" label="联系电话">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="zhuangtai" label="状态">
			</el-table-column>
			<el-table-column label="修改">
				<el-button type="primary" round @click="update()">修改状态</el-button>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			:page-sizes="[2, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
			:total="tableData.length">
		</el-pagination>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				dialogVisible: false,
				formLabelWidth: '50px',
				currentPage: 1, //初始页
				pagesize: 2, //    每页的数据
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
			update(id) {
				this.tableData[id].zhuangtai = !this.tableData[id].zhuangtai;
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			}
		}
	};
</script>

<style scoped>

</style>
