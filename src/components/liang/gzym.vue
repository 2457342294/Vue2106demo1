<template>
	
		  <el-container>
				<el-header>工作台欢迎你</el-header>
				<el-container>
		        <el-aside width="200px">
					 <!-- 左边导航栏-->
					<el-row class="tac">
					  <el-col>
					    <el-menu
					      default-active="1-1"
					      class="el-menu-vertical-demo"
					      @open="handleOpen"
					      @close="handleClose">
					      <el-submenu index="1">
					        <template #title>
					          <i class="el-icon-video-camera-solid"></i>
					          <span>权限管理</span>
					        </template>
					        <el-menu-item-group>
							  <router-link :to="{path:'/'}">
								  <el-menu-item index="1-1">
										<i class="el-icon-s-order"></i>
										员工管理
								  </el-menu-item>
							  </router-link>
							  <router-link :to="{path:'/dept'}">
							  		<el-menu-item index="1-3">
							  			<i class="el-icon-s-order"></i>
							  			部门科室
							  		</el-menu-item>
							  </router-link>
							  <router-link :to="{path:'/scheduling'}">
							  		<el-menu-item index="1-4">
							  			<i class="el-icon-s-order"></i>
							  			排班管理
							  		</el-menu-item>
							  </router-link>
							  
					        </el-menu-item-group>
					      </el-submenu>
					      <el-menu-item index="2">
					        <i class="el-icon-menu"></i>
					        <template #title>导航二</template>
					      </el-menu-item>
					      <el-menu-item index="3">
					        <i class="el-icon-document"></i>
					        <template #title>导航三</template>
					      </el-menu-item>
					      <el-menu-item index="4">
					        <i class="el-icon-setting"></i>
					        <template #title>导航四</template>
					      </el-menu-item>
					    </el-menu>
					  </el-col>
					 </el-row>
				</el-aside>
		        <el-main>
					<!-- 中心页面 -->
					<router-view></router-view>
					
				</el-main>
				</el-container>
		    </el-container>
			
</template>

<script>
  export default {
    data() {
      return {
		isCollapse: true
      }
    },
	methods:{
		goTo(uri){
			/* <div class="aside">
				< ul>
					<li><router-link :to="{name:'Dept',params:{id:1,n:'这是params参数'}}">部门管理</router-link></li>
					<li><router-link :to="{path:'/user-mgr',query:{msg:'这是query参数'}}">员工管理</router-link></li>
				</ul>
			</div>
			<div class="content">
				<router-view></router-view>
			</div> */
			this.$router.push(uri)
		},
		handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	created(){
		// this.getnews()
	}
  }
</script>

<style>
	/* 去掉a标签的下滑线 */
	a{color:#000;text-decoration:none}
	
	.el-main {
		
	    line-height: 30px!important;
	}
	.el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    height:900px;
	  }
	
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
		height:900px;
	  }
	
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>
