<template>
	<!-- 中心页面 -->
	<el-table
	
	    :data="tableData"
		border
	    style="width: 100%">
		<el-table-column
		      type="selection"
		      width="55">
		</el-table-column>
	    <el-table-column
	      prop="title"
	      label="标题"
	     >
	    </el-table-column>
	    <el-table-column
	      prop="body"
	      label="内容"
	      >
	    </el-table-column>
	    <el-table-column
	      label="操作">
		   <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button> -->
			<template v-slot:default="r">
					<el-button @click="bj(r.row),dialogFormVisible = true" type="primary" icon="el-icon-edit" circle />
			</template>
	    </el-table-column> 
	  </el-table>
	  <!-- 		分页 	-->
	  <!-- <el-pagination :current-page="pageNo" @current-change="getData"
	    background layout="total,prev,pager,next,jumper" :page-size="size" 
	    :total="total">
	  </el-pagination> -->
	  <!--当前页码改变触发这个事件 @current-change-->
	  <el-pagination
	        @current-change="getnews"
	        :current-page="pageNo"
	        :page-size="size"
	        layout="total,prev, pager, next, jumper"
	        :total="total">
	 </el-pagination>
	 <div>
		 <el-dialog title="编辑" v-model="dialogFormVisible">
		   <el-form :model="form">
				<el-form-item label="新闻标题" :label-width="formLabelWidth">
				      <el-input v-model="form.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="内容" :label-width="formLabelWidth">
				      <el-input v-model="form.body" autocomplete="off"></el-input>
				</el-form-item>
		   </el-form>
		   <template #footer>
		     <span class="dialog-footer">
		       <el-button @click="dialogFormVisible = false">取 消</el-button>
		       <el-button type="primary" @click="dialogFormVisible = false,bj()">确 定</el-button>
		     </span>
		   </template>
		 </el-dialog>
	 </div>
</template>

<script>
	export default {
	  data() {
	    return {
			// 弹框
			dialogFormVisible: false,
			formLabelWidth: '120px',
			//分页
			total:0,
			pageNo:1,
			size:3,
			// 表格数据
	      tableData: [],
		  form: {
			  title:'',
			  body:''
				
		  }
	    }
	  },
		methods:{
			getnews(nub){
				if(nub == undefined){
					nub = this.pageNo
				}
					this.axios.get("getnews",{params:{pageNo:nub,size:this.size}}).then(data=>{
						this.tableData=data.data.list,
						this.total=data.data.total,
						console.log(data.data)
						
					})
			},
			bj(row){
				if(row!=undefined){
					this.form.title=row.title,
					this.form.body=row.body
				}else{
					alert('修改')
				}
				
				console.log(row)
			}
			
		},
		// 页面加载时就调用的函数
		created(){
			// this.getnews()
		}
	}
</script>

<style>
	 td,.cell {
	
	      text-align: center!important;
	
	    }
	
	    
</style>
