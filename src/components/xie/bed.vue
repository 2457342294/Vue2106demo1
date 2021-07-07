<template>
	<div class="bed">
	<el-row style="text-align: left;">
		<el-button type="primary" @click="addbed = true">床位新增</el-button>
	</el-row>
	<el-row>
		<el-col :span="6">床位分配</el-col>
		<el-col :span="18" style="text-align: right;">
			<el-input placeholder="请输入内容" style="width: 300px;" />
			<el-button type="primary">搜索</el-button>
		</el-col>
	</el-row>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="住院单号">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column prop="address" label="病房">
		</el-table-column>
		<el-table-column label="操作">
			<el-button type="text" @click="dialogVisible = true">登记</el-button>
		</el-table-column>
	</el-table>
	<div class="block">
		<el-pagination layout="prev, pager, next" :total="1000">
		</el-pagination>
	</div>
	<el-row>
		<el-col :span="6">床位修改</el-col>
		<el-col :span="18" style="text-align: right;">
			<el-input placeholder="请输入内容" style="width: 300px;" />
			<el-button type="primary">搜索</el-button>
		</el-col>
	</el-row>
	<el-table :data="tableDat" style="width: 100%">
		<el-table-column prop="date" label="住院单号">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column prop="address" label="床位">
		</el-table-column>
		<el-table-column label="操作">
			<el-button type="text" @click="dialogVisible = true">修改</el-button>
		</el-table-column>
	</el-table>
	<div class="block">
		<el-pagination layout="prev, pager, next" :total="1000">
		</el-pagination>
	</div>
	<el-dialog title="提示" v-model="dialogVisible" width="40%">
		<el-row>
			<el-col :span="24" style="padding: 10px;">
				病房：<el-select v-model="value" placeholder="请选择">
				</el-select>
				床位：<el-select v-model="value" placeholder="请选择">
				</el-select>
			</el-col>
		</el-row>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</el-dialog>
	<el-dialog v-model="addbed" width="20%">
		<el-row>
			<el-col :span="24" style="padding: 10px;">
				病房：<el-select v-model="value" placeholder="请选择">
				</el-select>
			</el-col>
		</el-row>
		<span slot="footer" class="dialog-footer">
			<el-button @click="addbed = false">取 消</el-button>
			<el-button type="primary" @click="addbed = false">确 定</el-button>
		</span>
	</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				addbed:false,
				value: '',
				tableData: [{
					date: '20160502',
					name: '王小虎',
					address: '02'
				}],
				tableDat: [{
					date: '20160502',
					name: '王小虎',
					address: '05'
				}]
			}
		}
	}
</script>

<style>
	.bed .el-row {
		padding: 10px;
		text-align: left;
	}

	.bed .el-select {
		width: 150px;
	}
</style>
