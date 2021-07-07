<template>
	<h1>这是我老婆</h1>
	<div class="demo-image__placeholder">
	  <div class="block">
	    <el-image :src="src"></el-image>
	  </div>
	</div>
</template>

<script>
	 export default {
	     data() {
	       return {
	         src: '/public/erlp.jpg'
	       }
	     }
	   }
</script>

<style>
</style>
