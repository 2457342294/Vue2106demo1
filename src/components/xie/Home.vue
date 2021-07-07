<template>
	<el-container>
	  <el-header>Header</el-header>
	  <el-container>
	    <el-aside width="200px">
			<ul>
				<li><router-link :to="{name:'hos_not'}">住院申请</router-link></li>				
			</ul>
		</el-aside>
	    <el-main>
			<router-view></router-view>
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>

</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
	height: 574px;
    text-align: center;
    float: left;
  }
  .el-aside li{
	list-style: none;
	padding :10px 15px
  }
  .el-aside li a{
  	text-decoration: none;
  }
  .el-aside li:hover a{
    color:red;
  }
  
  .el-main {
    background-color: #E9EEF3;
    /* color: #333;
    text-align: center;
    line-height: 400px; */
  }
</style>

