<template>
	<div class="app-container">
	  <!-- 查询条件开始 -->
	  <el-row :gutter="12" style="margin-bottom: 5px">
	    <el-col :span="24">
	      <el-card shadow="always">
	        <el-form ref="queryForm" :model="queryParams" :inline="true" label-width="88px">
				
			 <!-- <el-form-item>
				  <el-col :span="12">
				    <el-form-item label="" prop="deptId">
 				      <el-select
				        v-model="form"
				        clearable
				        size="small"
				        style="width: 200px"
				      >
					  
				        <el-option
				          v-for="dept in deptOptions"
				          :key="dept"
				          :label="dept"
				          :value="dept"
				        />
				      </el-select>
				    </el-form-item>
				  </el-col>
			  </el-form-item> -->
	            
			
			<el-form-item>
							  <el-col :span="12">
							    <el-form-item  prop="deptId">
							      <el-select
							        v-model="form"
							        clearable
							        size="small"
							        style="width: 200px"
							      >
							        <el-option
							          v-for="dept in deptOptions"
							          :key="dept"
							          :label="dept"
							          :value="dept"
							        />
							      </el-select>
							    </el-form-item>
								
								
							   <!-- <el-form-item>
							    		<el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">新增部门</el-button>
							    </el-form-item> -->
							  </el-col>
			</el-form-item>
			<el-form-item prop="deptId">
								<el-input v-model="input" placeholder="搜你想搜"></el-input>
			</el-form-item>
	          <el-form-item>
	           <el-button type="primary" round icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
	            <el-button type="primary" round icon="el-icon-refresh" size="mini" @click="resetQuery">打印</el-button>
	          </el-form-item>
	          <el-form-item style="float: right">
	           <el-button type="primary" round icon="el-icon-s-fold" size="small" @click="upWeek">上一周</el-button>
	            <el-button type="success" round icon="el-icon-s-operation" size="small" @click="currentWeek">当前周</el-button>
	            <el-button type="warning" round icon="el-icon-s-unfold" size="small" @click="nextWeek">下一周</el-button>
	          </el-form-item>
	        </el-form>
	      </el-card>
	    </el-col>
	  </el-row>
	  <!-- 查询条件结束 -->
	  
	  <!-- 排班表格开始 -->
	  <el-table v-loading="loading" :data="tableData" border :span-method="spanMethod">
	    <!-- <el-table-column prop="userId" label="bume" align="center" :formatter="userFormatter" /> -->
	    <el-table-column prop="deptId" label="姓名" align="center" :formatter="deptFormatter" />
	    <!-- <el-table-column prop="subsectionType" label="时间/日期" align="center" :formatter="subsectionTypeFormatter" /> -->
	    <el-table-column prop="schedulingType[0]" :label="labelNames[0]" align="center" :formatter="schedulingTypeDAY1Formatter" />
	    <el-table-column prop="schedulingType[1]" :label="labelNames[1]" align="center" :formatter="schedulingTypeDAY2Formatter" />
	    <el-table-column prop="schedulingType[2]" :label="labelNames[2]" align="center" :formatter="schedulingTypeDAY3Formatter" />
	    <el-table-column prop="schedulingType[3]" :label="labelNames[3]" align="center" :formatter="schedulingTypeDAY4Formatter" />
	    <el-table-column prop="schedulingType[4]" :label="labelNames[4]" align="center" :formatter="schedulingTypeDAY5Formatter" />
	    <el-table-column prop="schedulingType[5]" :label="labelNames[5]" align="center" :formatter="schedulingTypeDAY6Formatter" />
	    <el-table-column prop="schedulingType[6]" :label="labelNames[6]" align="center" :formatter="schedulingTypeDAY7Formatter" />
	    <el-table-column label="操作" align="center">
	      <template slot-scope="scope">
	        <el-button type="text" icon="el-icon-edit" size="mini" @click="editScheduling(scope.row.userId)">编辑</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  <!-- 排班表格结束 -->
	  <!-- <el-table
	        :data="tableData2"
	        :span-method="arraySpanMethod"
	        border
	        style="width: 100%">
	        <el-table-column
	          prop="id"
	          label="ID"
	          width="180">
	        </el-table-column>
	        <el-table-column
	          prop="name"
	          label="姓名">
	        </el-table-column>
	        <el-table-column
	          prop="amount1"
	          sortable
	          label="数值 1">
	        </el-table-column>
	        <el-table-column
	          prop="amount2"
	          sortable
	          label="数值 2">
	        </el-table-column>
	        <el-table-column
	          prop="amount3"
	          sortable
	          label="数值 3">
	        </el-table-column>
	      </el-table> -->
	  
	  </div>
</template>

<script>
	export default {
	  data() {
	    return {
			 tableData2: [{
			          id: '12987122',
			          name: '王小虎',
			          amount1: '234',
			          amount2: '3.2',
			          amount3: 10
			        }, {
			          id: '12987123',
			          name: '王小虎',
			          amount1: '165',
			          amount2: '4.43',
			          amount3: 12
			        }, {
			          id: '12987124',
			          name: '王小虎',
			          amount1: '324',
			          amount2: '1.9',
			          amount3: 9
			        }, {
			          id: '12987125',
			          name: '王小虎',
			          amount1: '621',
			          amount2: '2.2',
			          amount3: 17
			        }, {
			          id: '12987126',
			          name: '王小虎',
			          amount1: '539',
			          amount2: '4.1',
			          amount3: 15
			        }],
			// 遮罩层
			  loading: false,
			  // 对话框标题
			  title: '',
			  // 是否打开对话框
			  open: false,
			  // 科室数据
			  deptOptions: ["妇科",
							"儿科"],
			  // 医生数据
			  userOptions: [],
			  // 排班类型数据
			  schedulingTypeOptions: [],
			  // 排班时间段数据
			  subsectionTypeOptions: [],
			  // 查询参数
			  queryParams: {
			    deptId: undefined,
			    userId: undefined,
			    queryDate: undefined
			  },
			  schedulingData: {
			    startTimeThisWeek: undefined,
			    endTimeThisWeek: undefined
			  },
			  // 排班表数据
			  tableData: [],
			  labelNames: ['职务', '时间/日期', '', '', '', '', ''],
			  // 修改的数据
			  editData: []
			}
	},
	computed: {
	    groupNum() {
	      // return new Set(this.tableData.map(o => o.userId))
	    }
	  },
	  created() {
	    // 加载科室
	    // selectAllDept().then(res => {
	    //   this.deptOptions = res.data
	    // })
	    // 加载需要排班的医生数据
	    // queryUsersNeedScheduling().then(res => {
	    //   this.userOptions = res.data
	    // })
	    // // 加载排班时段
	    // this.getDictDataByType('his_subsection_type').then(res => {
	    //   this.subsectionTypeOptions = res.data
	    // })
	    // // 加载排班类型
	    // this.getDictDataByType('his_scheduling_type').then(res => {
	    //   this.schedulingTypeOptions = res.data
	    // })
	    // this.getSchedulingList()
	  },
	  methods: {
		   // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
		   //        if (row 2 === 0) {
		   //          if (columnIndex === 0) {
		   //            return [1, 2];
		   //          } else if (columnIndex === 1) {
		   //            return [0, 0];
		   //          }
		   //        },
		   //      },
	    // 查询排班数据
	    getSchedulingList() {
	      this.loading = true
	      // queryScheduling(this.queryParams).then(res => {
	      //   console.log(res)
	      //   this.tableData = res.data.tableData
	      //   this.labelNames = res.data.labelNames
	      //   this.schedulingData = res.data.schedulingData
	      //   this.loading = false
	      // })
	    },
	    // 查询
	    handleQuery() {
	      // this.getSchedulingList()
	    },
	    // 重置查询
	    resetQuery() {
	      // this.resetForm('queryForm')
	      // this.getSchedulingList()
	    },
	    // 上一周
	    upWeek() {
	      // this.queryParams.queryDate = this.schedulingData.startTimeThisWeek
	      // this.getSchedulingList()
	    },
	    // 当前周
	    currentWeek() {
	      // this.queryParams.queryDate = undefined
	      // this.getSchedulingList()
	    },
	    // 下一周
	    nextWeek() {
	      // this.queryParams.queryDate = this.schedulingData.endTimeThisWeek
	      // this.getSchedulingList()
	    },
	    // 医生转换数据
	    userFormatter(row) {
	      let userName = ''
	      // this.userOptions.filter(item => {
	      //   if (row.userId === item.id) {
	      //     userName = item.userName
	      //   }
	      // })
	      return userName
	    },
	    // 科室转换数据
	    deptFormatter(row) {
	      let deptName = ''
	      // this.deptOptions.filter(item => {
	      //   if (row.deptId === item.id) {
	      //     deptName = item.deptName
	      //   }
	      // })
	      return deptName
	    },
	    // 排班时间转换数据
	    subsectionTypeFormatter(row) {
	      return this.selectDictLabel(this.subsectionTypeOptions, row.subsectionType)
	    },
	    // 排班类型转换数据
	    schedulingTypeDAY1Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[0])
	    },
	    schedulingTypeDAY2Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[1])
	    },
	    schedulingTypeDAY3Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[2])
	    },
	    schedulingTypeDAY4Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[3])
	    },
	    schedulingTypeDAY5Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[4])
	    },
	    schedulingTypeDAY6Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[5])
	    },
	    schedulingTypeDAY7Formatter(row) {
	      return this.selectDictLabel(this.schedulingTypeOptions, row.schedulingType[6])
	    },
	    // 编辑
	    editScheduling(userId) {
	      this.editData = []
	      this.open = true
	      let name = ''
	      this.userOptions.filter(item => {
	        if (userId === item.id) {
	          name = item.userName
	        }
	      })
	      this.title = '修改【' + name + '】的排班信息'
	      this.tableData.filter(item => {
	        if (userId === item.userId) {
	          this.editData.push(item)
	        }
	      })
	    },
	    // 合并单元格
	    spanMethod({ row, column, rowIndex, columnIndex }) {
	      if (columnIndex < 2 || columnIndex > 9) {
	        const len = this.userGroup(row.userId)
	        const lenName = this.userIdLen(row.userId)
	        if (rowIndex === lenName) {
	          return {
	            rowspan: len,
	            colspan: 1
	          }
	        } else {
	          return {
	            rowspan: 0,
	            colspan: 0
	          }
	        }
	      } else {
	        return {
	          rowspan: 1,
	          colspan: 1
	        }
	      }
	    },
	    userGroup(id) {
	      return this.tableData.filter(o => o.userId === id).length
	    },
	    userIdLen(id) {
	      const tmp = Array.from(this.groupNum)
	      const index = tmp.indexOf(id)
	      let len = 0
	      for (let i = 0; i < index; i++) {
	        len += this.userGroup(tmp[i])
	      }
	      return len
	    },
	    // 提交
	    handleSubmit() {
	      this.loading = true
	      const form = { beginDate: this.schedulingData.startTimeThisWeek, data: this.editData }
	      saveScheduling(form).then(res => {
	        this.loading = false
	        this.open = false
	        this.msgSuccess('保存成功')
	        this.getSchedulingList()
	      }).catch(() => {
	        this.loading = false
	        this.open = false
	        this.msgError('保存失败')
	      })
	    },
	    // 取消
	    cancel() {
	      this.open = false
	    }
	  }
	}
	
</script>

<style>
	
</style>
