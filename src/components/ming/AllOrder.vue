<template>
	<div width=100%>
		<el-input placeholder="请输入要查询的操作员" v-model="input" style="width:200px;margin-right: 20px;" clearable>
		</el-input>

		<el-date-picker v-model="value2" type="datetimerange" :shortcuts="shortcuts" range-separator="至"
			start-placeholder="开始日期" end-placeholder="结束日期" style="margin-right: 20px;">
		</el-date-picker>

		<el-button type="primary">查询</el-button>

		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  highlight-current-row
    @current-change="handleCurrentChange2">
			<el-table-column prop="refineID" label="订单编号" width="100">
			</el-table-column>
			<el-table-column prop="drugID" label="药品编号" width="100">
			</el-table-column>
			<el-table-column prop="inventory" label="结存" width="100">
			</el-table-column>
			<el-table-column prop="pprice" label="调前零售价" width="100">
			</el-table-column>
			<el-table-column prop="aprice" label="调后零售价" width="150">
			</el-table-column>
			<el-table-column prop="tprlce" label="盈亏" width="100">
			</el-table-column>
			<el-table-column prop="chagetime" label="调价时间" width="200">
			</el-table-column>
			<el-table-column prop="operater" label="操作员" width="100">
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			:page-sizes="[5, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
			:total="tableData.length">
		</el-pagination>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
			<el-table-column prop="refineID" label="调价编号" width="100">
			</el-table-column>
			<el-table-column prop="drugID" label="药品编号" width="100">
			</el-table-column>
			<el-table-column prop="inventory" label="结存" width="100">
			</el-table-column>
			<el-table-column prop="pprice" label="调前零售价" width="100">
			</el-table-column>
			<el-table-column prop="aprice" label="调后零售价" width="150">
			</el-table-column>
			<el-table-column prop="tprlce" label="盈亏" width="100">
			</el-table-column>
			<el-table-column prop="chagetime" label="调价时间" width="200">
			</el-table-column>
			<el-table-column prop="operater" label="操作员" width="100">
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			:page-size="pagesize" layout="total, prev, pager, next, jumper" :total="tableData.length">
		</el-pagination>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'
	import axios from "axios";
	export default {
		data() {
			return {
				input: ref(''),
				dialogVisible: false,
				dialogVisible2: false,
				formLabelWidth: '50px',
				currentPage: 1, //初始页
				pagesize: 5, //    每页的数据
				tableData:[{
					refineID: 1,
					drugID: 1,
					inventory: 111,
					pprice: 11.55,
					aprice: 12.40,
					tprlce: '盈',
					chagetime: '2000-4-7 12:23:22',
					operater: '谢嘉欣'
				}, {
					refineID: 1,
					drugID: 2,
					inventory: 111,
					pprice: 11.55,
					aprice: 12.40,
					tprlce: '盈',
					chagetime: '2000-4-7 12:23:22',
					operater: '谢嘉欣'
				}, {
					refineID: 1,
					drugID: 3,
					inventory: 111,
					pprice: 11.55,
					aprice: 12.40,
					tprlce: '盈',
					chagetime: '2000-4-7 12:23:22',
					operater: '谢嘉欣'
				}, {
					refineID: 1,
					drugID: 3,
					inventory: 111,
					pprice: 11.55,
					aprice: 12.40,
					tprlce: '盈',
					chagetime: '2000-4-7 12:23:22',
					operater: '谢嘉欣'
				}, {
					refineID: 1,
					drugID: 4,
					inventory: 111,
					pprice: 11.55,
					aprice: 12.40,
					tprlce: '盈',
					chagetime: '2000-4-7 12:23:22',
					operater: '谢嘉欣'
				}],
				shortcuts: [{
					text: '最近一周',
					value: (() => {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						return [start, end]
					})()
				}, {
					text: '最近一个月',
					value: (() => {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						return [start, end]
					})()
				}, {
					text: '最近三个月',
					value: (() => {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						return [start, end]
					})()
				}],
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value2: ''
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
			 handleCurrentChange2(val) {
			       console.log(val.drugID);
			      }
		}
	};
</script>

<style>

</style>
