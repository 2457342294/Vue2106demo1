<template>
	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	<el-form-item label="姓名" prop="age">
	  <el-input v-model="ruleForm.name"></el-input>
	</el-form-item>
	  <el-form-item label="密码" prop="pass">
	    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
	 import { defineComponent } from 'vue'
	 import { ElMessage } from 'element-plus'
	  export default {
	    data() {
	      var checkAge = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('姓名不能为空'));
	        }else{
				callback();
			}
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          callback();
	        }
	      };
	      return {
	              ruleForm: {
	                name: '',
					pass: ''
	              },
	              rules: {
	                pass: [
	                  { validator: validatePass, trigger: 'blur' }
	                ],
	                name: [
	                  { validator: checkAge, trigger: 'blur' }
	                ]
	              }
	            };
	          },
	    methods: {
	      submitForm(formName) {
			  // 当表单的所有验证通过的时候，的validate里面的valid会返回true
	        this.$refs[formName].validate((valid) => {
				
	          if (valid) {
				  // var ruleForm : this.ruleForm;
				  console.log( this.ruleForm),
					  this.axios({
						  url:"dl",
						  params:{name:this.ruleForm.name,pass:this.ruleForm.pass},
					}).then(data =>{
						console.log(data.data)
						if(data.data=="OK"){
							// 跳转路由页面
							this.$router.push("gzym")
						}else{
							this.open4();
						}
					})
	          } else {
				  
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      },
		   open4() {
		            ElMessage({
		              showClose: true,
		              message: '账户或密码有误！',
		              type: 'error'
		            });
		          }
	    }
	  }
</script>

<style>
</style>
