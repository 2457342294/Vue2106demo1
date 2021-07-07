<template>
	<el-container>
	  <el-aside width="200px">
		  <div>
			  <el-row>
			  		  <el-col :span="12">
			      <el-menu
			        :uniqueOpened="true"
			        default-active="1-1"
					
			        class="el-menu-vertical-demo"
			        route="true"
			        background-color="#545c64"
			        text-color="#fff"
			        active-text-color="#ffd04b">
			  	  <el-submenu index="1">
			  	    <template #title>
					<i class="el-icon-s-unfold"></i>
			  	      <span>体检中心</span>
			  	    </template>
			  	    <el-menu-item-group>
			  	      
					  <el-submenu index="2">
						<template #title><i class="el-icon-menu"></i>体检项目列表</template>
						<el-menu-item-group>
							<router-link :to="{path:'/home/assay_pro_team'}"><el-menu-item index="2-1"><i class="el-icon-menu"></i>团队体检</el-menu-item></router-link>
							<router-link :to="{path:'/home/assay_pro_person'}"><el-menu-item index="2-2"><i class="el-icon-menu"></i>个人体检</el-menu-item></router-link>
						</el-menu-item-group>
					   </el-submenu>
			  	      <el-menu-item index="1-2"><i class="el-icon-menu"></i>选项2</el-menu-item>
					  <el-menu-item index="1-3"><i class="el-icon-menu"></i>选项2</el-menu-item>
			  	    </el-menu-item-group>
			  	    
			  	  </el-submenu>
			      </el-menu>
			    </el-col>
			  </el-row>
		  </div>
	  </el-aside>
	  <el-main><router-view></router-view></el-main>
	</el-container>
</template>

<script>
	export default {
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	  }
</script>

<style>
	*{
		margin: 0;
	}
	a {
	  text-decoration: none;
	}
	 
	.router-link-active {
	  text-decoration: none;
	}
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 800px;
		height: 969px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 500px;
		height: 969px;
	  }
	  .el-col-12{
		  width: 199px;
		  flex-basis: 100%;
		  max-width: 100%;
	  }
	  .el-submenu__title{
		  width: 199px;
		  padding-left: 0;
		  text-align: left;
	  }
	  .el-submenu .el-menu-item{
		      height: 50px;
		      line-height: 50px;
		      padding: 0px 45px;
		      min-width: 199px;
			  text-align: left;
	  }
	  .el-menu-item-group__title{
		  display: none;
	  }
	  .el-menu-vertical-demo{
		  height: 969px;
	  }
</style>
