<template>
  <div class="app-container">
    <!-- 查询条件开始 -->
    <el-form ref="queryForm" :model="queryParams" :inline="true" label-width="68px">
		<el-col :span="12">
		  <el-form-item prop="deptId">
		    <el-select
		      v-model="form.deptId"
		      clearable
		      size="small"
		      style="width: 240px"
		    >
		      <el-option
		        v-for="dept in deptOptions"
		        :key="dept.id"
		        :label="dept.deptName"
		        :value="dept.id"
		      />
		    </el-select>
		  </el-form-item>
		  <el-form-item>
		  		<el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">修改</el-button>
		  </el-form-item>
		</el-col>
      <el-form-item  prop="deptName">
		 <el-form-item>
				<el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">新增科室</el-button>
		</el-form-item>
        <el-input
          v-model="queryParams.deptName"
          placeholder="筛你想筛"
          clearable
          size="small"
          style="width:200px"
        />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 查询条件结束 -->

    <!-- 数据表格开始 -->
    <el-table v-loading="loading" border :data="deptTableList" @selection-change="handleSelectionChange">
      <el-table-column label="科室编号" prop="deptNumber" align="center" />
      <el-table-column label="科室名称" prop="deptName" align="center" />
      <el-table-column label="负责人" prop="deptLeader" align="center" />
      <el-table-column label="联系电话" prop="leaderPhone" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="info" icon="el-icon-edit" size="mini" @click="handleUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 数据表格结束 -->

    <!-- 分页组件开始 -->
	<div class="block">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="queryParams.pageNum"
	      :page-sizes="[10, 20, 30, 40]"
	      :page-size="queryParams.pageSize"
	      layout="total, prev, pager, next, jumper"
	      :total="total">
	    </el-pagination>
	  </div>
    <!-- 分页组件结束 -->

    <!-- 添加修改对话框开始 -->
    <el-dialog
      :title="title"
      v-model="open"
      width="500px"
      center
      append-to-body
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="名称" prop="deptName">
          <el-input v-model="form.deptName" placeholder="请输入科室名称" clearable size="small" />
        </el-form-item>
        <el-form-item label="编号" prop="deptNumber">
          <el-input v-model="form.deptNumber" placeholder="请输入科室编号" clearable size="small" />
        </el-form-item>
        <el-form-item label="负责人" prop="deptLeader">
          <el-input v-model="form.deptLeader" placeholder="请输入负责人" clearable size="small" />
        </el-form-item>
        <el-form-item label="联系电话" prop="leaderPhone">
          <el-input v-model="form.leaderPhone" placeholder="请输入联系电话" clearable size="small" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 添加修改对话框结束 -->
	
	<!-- 添加修改对话框开始 -->
	<!-- <el-dialog
	  :title="title"
	  v-model="open"
	  width="500px"
	  center
	  append-to-body
	>
	  <el-form ref="form" :model="form" :rules="rules" label-width="100px">
	    <el-form-item label="科室名称" prop="deptName">
	      <el-input v-model="form.deptName" placeholder="请输入科室名称" clearable size="small" />
	    </el-form-item>
	    <el-form-item label="科室编号" prop="deptNumber">
	      <el-input v-model="form.deptNumber" placeholder="请输入科室编号" clearable size="small" />
	    </el-form-item>
	    <el-form-item label="负责人" prop="deptLeader">
	      <el-input v-model="form.deptLeader" placeholder="请输入负责人" clearable size="small" />
	    </el-form-item>
	    <el-form-item label="联系电话" prop="leaderPhone">
	      <el-input v-model="form.leaderPhone" placeholder="请输入联系电话" clearable size="small" />
	    </el-form-item>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	    <el-button type="primary" @click="handleSubmit">确 定</el-button>
	    <el-button @click="cancel">取 消</el-button>
	  </span>
	</el-dialog> -->
	<!-- 添加修改对话框结束 -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      // 是否启用遮罩层
      loading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 分页数据总条数
      total: 0,
      // 表格字典数据
      deptTableList: [{
          deptNumber: '10002',
          deptName: '儿科',
          deptLeader: '王小虎',
          leaderPhone: '17673845997',
        }
	  ],
      // 对话框标题
      title: '',
      // 是否显示对话框
      open: false,
      // 状态数据字典
      statusOptions: [],
      // 日期范围
      dateRange: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        deptName: undefined,
        status: undefined
      },
      // 表单数据
      form: {},
      // 表单校验
      rules: {
        deptName: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        deptNumber: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
	  
  },
  methods: {
    // 查询表格数据
    getDeptList() {
		
	},
    // 条件查询
    handleQuery() {
		
	},
    // 重置查询
    resetQuery() {
		
	},
    // 数据表格多选时触发
    handleSelectionChange(selection) {
		
	},
    // 分页pageSize时触发
    handleSizeChange(val) {
		
	},
    // 上一页 下一页 跳转页数时触发
    handleCurrentChange(val) {
		
	},
    // 状态转换
    statusFormatter(row) {
		
	},
    // 打开添加的对话框
    handleAdd() {
      this.open = true,
	  
      this.reset()
    },
    // 打开修改的对话框
    handleUpdate(row) {
      // const deptId = row.id || this.ids
      this.open = true
      // this.reset()
      // getDeptById(deptId).then(res => {
      //   this.form = res.data
      // })
    },
    // 删除
    handleDelete(row) {
		
	},
    // 保存
    handleSubmit() {
		this.$refs.form.validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
	},
    // 取消
    cancel() {
      this.open = false
    },
    // 重置表单
    reset() {
      this.form = {
        id: undefined,
        deptName: undefined,
        deptNumber: undefined,
        regNumber: 0,
        orderNum: 0,
        deptLeader: undefined,
        leaderPhone: undefined,
        status: '0'
      }
      // this.resetForm('form')
    }
  }
}
</script>

<style scoped>

</style>
