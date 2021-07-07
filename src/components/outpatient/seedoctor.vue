<template>
	<el-container>
	    <el-aside style="width: 207px;min-height: 625px;">
			<el-tabs type="border-card">
			  <el-tab-pane label="叫号">
				<el-row style="height: 35px;">
				  <div class="demo-input-suffix">
				    序号：
				    <el-input class="jhinput" style="width: 135px;"></el-input>
				  </div>
				</el-row>
				<el-row>
				  <div class="demo-input-suffix">
				    姓名：
				    <el-input class="jhinput" style="width: 135px;"></el-input>
				  </div>
				</el-row>
				<el-row  style="margin-bottom: 10px;">
				  <el-button type="primary" style="padding: 7px 27px;margin-left: 5px;min-height: 0px;" round>叫号</el-button>
				  <el-button type="info" style="padding: 7px 27px;min-height: 0px;" round>过号</el-button>
				</el-row>
			  </el-tab-pane>
			</el-tabs>
			<el-tabs type="border-card" class="jzeltabs">
			  <el-tab-pane label="候诊">
				<el-table
				      :data="tableData"
				      style="width: 100%">
					  <el-table-column
					    prop="id"
					    label="id"
					    width="50">
					  </el-table-column>
					  <el-table-column
					    prop="jiuzhenid"
					    label="就诊号"
					    width="100">
					  </el-table-column>
					  <el-table-column
					    prop="name"
					    label="姓名"
					    width="70">
					  </el-table-column>
					  <el-table-column
					    prop="sex"
					    label="性别"
					    width="50">
					  </el-table-column>
				      <el-table-column
				        prop="date"
				        label="日期"
				        width="150">
				      </el-table-column>
				      <el-table-column
				        prop="age"
				        label="年龄"
				        width="50">
				      </el-table-column>
				      <el-table-column
				        prop="phone"
				        label="电话"
						width="110">
				      </el-table-column>
					  <el-table-column
					    prop="address"
					    label="地址"
					  	width="200">
					  </el-table-column>
				    </el-table>
			  </el-tab-pane>
			  <el-tab-pane label="过号">过号</el-tab-pane>
			  
			</el-tabs>
			<el-tabs type="border-card" class="jzeltabs">
			  <el-tab-pane label="接诊">
				  <el-table
				        :data="tableData"
				        style="width: 100%">
				  	  <el-table-column
				  	    prop="id"
				  	    label="id"
				  	    width="50">
				  	  </el-table-column>
				  	  <el-table-column
				  	    prop="jiuzhenid"
				  	    label="就诊号"
				  	    width="100">
				  	  </el-table-column>
				  	  <el-table-column
				  	    prop="name"
				  	    label="姓名"
				  	    width="70">
				  	  </el-table-column>
				  	  <el-table-column
				  	    prop="sex"
				  	    label="性别"
				  	    width="50">
				  	  </el-table-column>
				        <el-table-column
				          prop="date"
				          label="日期"
				          width="150">
				        </el-table-column>
				        <el-table-column
				          prop="age"
				          label="年龄"
				          width="50">
				        </el-table-column>
				        <el-table-column
				          prop="phone"
				          label="电话"
				  		width="110">
				        </el-table-column>
				  	  <el-table-column
				  	    prop="address"
				  	    label="地址"
				  	  	width="200">
				  	  </el-table-column>
				      </el-table>
			  </el-tab-pane>
			  <el-tab-pane label="已诊">已诊</el-tab-pane>
			</el-tabs>
		</el-aside>
	    <el-container>
			<el-header style="height: 155px;">
				<el-form ref="form" :model="form">
					<el-row :gutter="24" class="jiuzheninput">
						<el-col :span="4">
							<el-form-item label="姓名:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="病人性别:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="联系电话:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="类型:">
								<el-radio v-model="form.jiuzhenid" label="1">初诊</el-radio>
								  <el-radio v-model="form.jiuzhenid" label="2">复诊</el-radio>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="当前操作员:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>					
					</el-row>
				
					<el-row :gutter="24" class="jiuzheninput">
						<el-col :span="4">
							<el-form-item label="年龄:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="出生日期:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item label="省份证号:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<el-form-item label="地址:">
								<el-input v-model="form.jiuzhenid"></el-input>
							</el-form-item>
						</el-col>						
					</el-row>
					
					<el-row :gutter="24">
						<el-button @click="addzycf=true">中医处方</el-button>
						<el-button @click="addxycf=true">西医处方</el-button>
						<el-button @click="addjccf=true">检查</el-button>
						<el-button @click="addhycf=true">化验</el-button>
						<!-- <el-button>手术</el-button> -->
						<el-button @click="chufangmoban=true">处方模板</el-button>
						<el-button @click="lishichufang=true">历史处方</el-button>
						<el-button>保存处方模板</el-button>
						<el-button @click="zhuanzhuyuan=true">转住院</el-button>
						<el-button>保存病人信息</el-button>
						<!-- <el-button>打印</el-button> -->
						<el-button>开处方</el-button>
					</el-row>
				</el-form>
			</el-header>
			<el-main>
				<el-table
				    :data="chufang"
				    stripe
				    style="width: 100%">
				    <el-table-column
				      prop="id"
				      label="编号"
					  width="50">
				    </el-table-column>
				    <el-table-column
				      prop="date"
				      label="时间"
					  width="150">
				    </el-table-column>
				    <el-table-column
				      prop="doctor"
				      label="处方医生"
					  width="70">
				    </el-table-column>
					<el-table-column
					  prop="xmname"
					  label="项目名称"
					  width="200">
					</el-table-column>
					<el-table-column
					  prop="guige"
					  label="规格"
					  width="100">
					</el-table-column>
					<el-table-column
					  prop="usage"
					  label="用法"
					  width="80">
					</el-table-column>
					<el-table-column
					  prop="jiliang"
					  label="剂量"
					  width="80">
					</el-table-column>
					<el-table-column
					  prop="pinci"
					  label="频次"
					  width="50">
					</el-table-column>
					<el-table-column
					  prop="zu"
					  label="组"
					  width="40">
					</el-table-column>
					<el-table-column
					  prop="shuliang"
					  label="数量"
					  width="50">
					</el-table-column>
					<el-table-column
					  prop="danwei"
					  label="单位">
					</el-table-column>
					<el-table-column
					  prop="tianshu"
					  label="天数"
					  width="40">
					</el-table-column>
					<el-table-column
					  prop="sfpishi"
					  label="是否皮试"
					  width="80">
					</el-table-column>
					<el-table-column
					  prop="leixing"
					  label="类型"
					  width="50">
					</el-table-column>
					<el-table-column
					  prop="zhixingkeshi"
					  label="执行科室"
					  width="80">
					</el-table-column>
					<el-table-column
					  prop="sftuifei"
					  label="是否有退费"
					  width="100">
					</el-table-column>
					<el-table-column
					      fixed="right"
					      label="操作"
					      width="100">
					      <template #default="scope">
					        <el-button type="text" size="small">删除</el-button>
					      </template>
					    </el-table-column>
				  </el-table>
				  <el-pagination
				    background
				    layout="prev, pager, next"
				    :total="1000"
				  	v-model="addform">
				  </el-pagination>
				  <div style="margin-top: 20px; color: red;font-weight:800">总价格：123</div>
			</el-main>
	    </el-container>
	</el-container>
	
	
	<el-dialog
	  class="chufangdialog"
	  title="添加中医处方"
	  v-model="addzycf"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
					
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData1"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-checkbox v-model="checked"></el-checkbox>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="50">
			    </el-table-column>
			    <el-table-column
			      prop="specification"
			      label="规格"
				  width="90">
			    </el-table-column>
				<el-table-column
				  prop="kucun"
				  label="库存">
				</el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="添加西医处方"
	  v-model="addxycf"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
					
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData2"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-checkbox v-model="checked"></el-checkbox>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="200">
			    </el-table-column>
			    <el-table-column
			      prop="specification"
			      label="规格"
				  width="90">
			    </el-table-column>
				<el-table-column
				  prop="kucun"
				  label="库存">
				</el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	<el-dialog
	  class="chufangdialog"
	  title="添加化验处方"
	  v-model="addhycf"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
					
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData3"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-checkbox v-model="checked"></el-checkbox>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="200">
			    </el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	<el-dialog
	  class="chufangdialog"
	  title="添加检查处方"
	  v-model="addjccf"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
					
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData4"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-checkbox v-model="checked"></el-checkbox>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="200">
			    </el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="处方模板"
	  v-model="chufangmoban"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
					
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
				<el-col :span="4">
					<el-button @click="mobanxiangqing=true">新增处方模板</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData5"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-radio v-model="checked"></el-radio>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="200">
			    </el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
				<el-table-column
				  prop="beizhu"
				  label="备注">
				</el-table-column>
				<el-table-column
				      fixed="right"
				      label="操作"
				      width="100">
				      <template #default="scope">
						  <el-button type="text" size="small" @click="mobanxiangqing=true">查看</el-button>
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="处方模板详情"
	  v-model="mobanxiangqing"
	  width="80%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="8">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="16">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
					<el-button @click="addzycf=true">中医处方</el-button>
					<el-button @click="addxycf=true">西医处方</el-button>
					<el-button @click="addjccf=true">检查</el-button>
					<el-button @click="addhycf=true">化验</el-button>
					<el-button>保存</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="chufang"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号"
				  width="50">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="时间"
				  width="150">
			    </el-table-column>
			    <el-table-column
			      prop="doctor"
			      label="处方医生"
				  width="70">
			    </el-table-column>
				<el-table-column
				  prop="xmname"
				  label="项目名称"
				  width="200">
				</el-table-column>
				<el-table-column
				  prop="guige"
				  label="规格"
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="usage"
				  label="用法"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="jiliang"
				  label="剂量"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="pinci"
				  label="频次"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="zu"
				  label="组"
				  width="40">
				</el-table-column>
				<el-table-column
				  prop="shuliang"
				  label="数量"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="danwei"
				  label="单位">
				</el-table-column>
				<el-table-column
				  prop="tianshu"
				  label="天数"
				  width="40">
				</el-table-column>
				<el-table-column
				  prop="sfpishi"
				  label="是否皮试"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="leixing"
				  label="类型"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="zhixingkeshi"
				  label="执行科室"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="sftuifei"
				  label="是否有退费"
				  width="100">
				</el-table-column>
				<el-table-column
				      fixed="right"
				      label="操作"
				      width="100">
				      <template #default="scope">
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="历史处方"
	  v-model="lishichufang"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="4"></el-col>
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="tableData6"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号">
				  <el-radio v-model="checked"></el-radio>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
				  width="200">
			    </el-table-column>
				<el-table-column
				  prop="jiage"
				  label="价格">
				</el-table-column>
				<el-table-column
				  prop="beizhu"
				  label="备注">
				</el-table-column>
				<el-table-column
				      fixed="right"
				      label="操作"
				      width="100">
				      <template #default="scope">
						  <el-button type="text" size="small" @click="lishichufangxiangqing=true">查看</el-button>
				      </template>
				    </el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">添 加</el-button>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="历史处方详情"
	  v-model="lishichufangxiangqing"
	  width="80%"
	  :before-close="handleClose">
		<el-form class="elformbd" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="12">
					<el-form-item label="" class="chufangsousuo">
					    <el-input ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-row>
			<el-table
			    :data="chufang"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="id"
			      label="编号"
				  width="50">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="时间"
				  width="150">
			    </el-table-column>
			    <el-table-column
			      prop="doctor"
			      label="处方医生"
				  width="70">
			    </el-table-column>
				<el-table-column
				  prop="xmname"
				  label="项目名称"
				  width="200">
				</el-table-column>
				<el-table-column
				  prop="guige"
				  label="规格"
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="usage"
				  label="用法"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="jiliang"
				  label="剂量"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="pinci"
				  label="频次"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="zu"
				  label="组"
				  width="40">
				</el-table-column>
				<el-table-column
				  prop="shuliang"
				  label="数量"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="danwei"
				  label="单位">
				</el-table-column>
				<el-table-column
				  prop="tianshu"
				  label="天数"
				  width="40">
				</el-table-column>
				<el-table-column
				  prop="sfpishi"
				  label="是否皮试"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="leixing"
				  label="类型"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="zhixingkeshi"
				  label="执行科室"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="sftuifei"
				  label="是否有退费"
				  width="100">
				</el-table-column>
			  </el-table>
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="1000"
				v-model="addform">
			  </el-pagination>
		</el-form>
	</el-dialog>
	
	<el-dialog
	  class="chufangdialog"
	  title="转住院"
	  v-model="zhuanzhuyuan"
	  width="70%"
	  :before-close="handleClose">
		<el-form class="zhuanzhuyuan" ref="addform" :model="addform">
			<el-row :gutter="24">
				<el-col :span="8">
					<el-form-item label="病人姓名:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="性别:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="联系电话:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="24">
				<el-col :span="8">
					<el-form-item label="年龄:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="出生日期:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="省份证号:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="24">
				<el-col :span="8">
					<el-form-item label="操作员:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="科室:">
						<el-input v-model="form.jiuzhenid"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<!-- 一般、重、危 -->
					<el-form-item label="入院情况:">
						<el-input v-model="form.jiuzhenid"></el-input>
				</el-form-item>
			</el-row>
			<el-row :gutter="24">
				<el-col :span="12">
					<el-form-item label="地址:">
						<el-input
						  type="textarea"
						  :rows="2"
						  placeholder="地址"
						  v-model="addform.remark">
						</el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="诊断结果:">
						<el-input
						  type="textarea"
						  :rows="2"
						  placeholder="诊断结果"
						  v-model="addform.jiuzhenid">
						</el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</el-form>
	</el-dialog>
</template>

<script>
	export default {
	      data() {
	        return {
				//处方
				chufang: [{
					id: '1',
					date:'2021-06-27 17:00:00',
					doctor:'张三',
					xmname:'陈皮',	
					guige:'1g*1',
					usage:'口服',
					jiliang:'',
					danwei:'g',
					pinci:'',
					zu:'0',
					shuliang:'2',
					danwei:'1g',
					tianshu:'',
					sfpishi:'否',
					leixing:'中药',
					zhixingkeshi:'中药药房',
					sftuifei:'正常'
				}, {
					id: '2',
					date:'2021-06-27 17:09:20',
					doctor:'张三',
					xmname:'复方甘草酸西片',	
					guige:'25mg*36片/盒',
					usage:'口服',
					jiliang:'25',
					danwei:'mg',
					pinci:'tid',
					zu:'0',
					shuliang:'1',
					danwei:'盒',
					tianshu:'1',
					sfpishi:'否',
					leixing:'西药',
					zhixingkeshi:'西药药房',
					sftuifei:'正常'
				}, {
					id: '3',
					date:'2021-06-27 17:11:40',
					doctor:'张三',
					xmname:'尿素测定',	
					guige:'项',
					usage:'',
					jiliang:'1',
					danwei:'项',
					pinci:'',
					zu:'0',
					shuliang:'1',
					danwei:'项',
					tianshu:'',
					sfpishi:'否',
					leixing:'化验',
					zhixingkeshi:'化验科',
					sftuifei:'正常'
				}, {
					id: '4',
					date:'2021-06-27 17:14:40',
					doctor:'张三',
					xmname:'黑白热敏打印照片',	
					guige:'片',
					usage:'',
					jiliang:'1',
					danwei:'片',
					pinci:'',
					zu:'0',
					shuliang:'1',
					danwei:'片',
					tianshu:'',
					sfpishi:'否',
					leixing:'检查',
					zhixingkeshi:'检查科',
					sftuifei:'正常'
				},
				{
					id: '5',
					date:'2021-06-27 17:00:00',
					doctor:'张三',
					xmname:'陈皮',	
					guige:'1g*1',
					usage:'口服',
					jiliang:'',
					danwei:'g',
					pinci:'',
					zu:'0',
					shuliang:'2',
					danwei:'1g',
					tianshu:'',
					sfpishi:'否',
					leixing:'中药',
					zhixingkeshi:'中药药房',
					sftuifei:'正常'
				}, {
					id: '6',
					date:'2021-06-27 17:09:20',
					doctor:'张三',
					xmname:'复方甘草酸西片',	
					guige:'25mg*36片/盒',
					usage:'口服',
					jiliang:'25',
					danwei:'mg',
					pinci:'tid',
					zu:'0',
					shuliang:'1',
					danwei:'盒',
					tianshu:'1',
					sfpishi:'否',
					leixing:'西药',
					zhixingkeshi:'西药药房',
					sftuifei:'正常'
				}, {
					id: '7',
					date:'2021-06-27 17:11:40',
					doctor:'张三',
					xmname:'尿素测定',	
					guige:'项',
					usage:'',
					jiliang:'1',
					danwei:'项',
					pinci:'',
					zu:'0',
					shuliang:'1',
					danwei:'项',
					tianshu:'',
					sfpishi:'否',
					leixing:'化验',
					zhixingkeshi:'化验科',
					sftuifei:'正常'
				}, {
					id: '8',
					date:'2021-06-27 17:14:40',
					doctor:'张三',
					xmname:'黑白热敏打印照片',	
					guige:'片',
					usage:'',
					jiliang:'1',
					danwei:'片',
					pinci:'',
					zu:'0',
					shuliang:'1',
					danwei:'片',
					tianshu:'',
					sfpishi:'否',
					leixing:'检查',
					zhixingkeshi:'检查科',
					sftuifei:'正常'
				}],
				//中药处方
				tableData1: [{
					id: '11515151',
					name:'陈皮',
					specification:'1g*1',
					jiage:'0.08',
					kucun:'1000'
				}, {
					id: '11515152',
					name:'当归',
					specification:'1g*1',
					jiage:'0.16',
					kucun:'1000'
				}, {
					id: '11515154',
					name:'茯苓',
					specification:'1g*1',
					jiage:'0.15',
					kucun:'1000'
				}, {
					id: '11515153',
					name:'黄芩',
					specification:'1g*1',
					jiage:'0.18',
					kucun:'1000'
				}],
				//西药处方
				tableData2: [{
					id: '11515151',
					name:'阿莫西林胶囊',
					specification:'0.25g*20',
					jiage:'2.1',
					kucun:'1000'
				}, {
					id: '11515152',
					name:'复方氯化钠注射液',
					specification:'500ml*1',
					jiage:'2.4',
					kucun:'1000'
				}, {
					id: '11515154',
					name:'甲硝唑氯化钠注射液',
					specification:'100ml*1',
					jiage:'1.495',
					kucun:'1000'
				}, {
					id: '11515153',
					name:'头孢呋辛钠针',
					specification:'1.5g*1',
					jiage:'6.5',
					kucun:'1000'
				}],
				//化验处方
				tableData3: [{
					id: '11515151',
					name:'二氧化碳反应曲线',
					jiage:'15'
				}, {
					id: '11515152',
					name:'血清尿酸测定',
					jiage:'9'
				}, {
					id: '11515153',
					name:'尿素测定',
					jiage:'5'
				}, {
					id: '11515154',
					name:'一次性使用真空采血管',
					jiage:'1.5'
				}],
				//检查处方
				tableData4: [{
					id: '11515151',
					name:'数字化摄影(DR)',
					jiage:'48'
				}, {
					id: '11515152',
					name:'DVO医用红外激光胶片',
					jiage:'15.5'
				}, {
					id: '11515153',
					name:'黑白热敏打印照片',
					jiage:'9'
				}],
				//处方模板
				tableData5: [{
					id: '1',
					name:'感冒',
					jiage:'48',
					beizhu:'治疗感冒'
				}, {
					id: '2',
					name:'鼻炎',
					jiage:'15.5',
					beizhu:'治疗鼻炎'
				}, {
					id: '3',
					name:'支气管炎',
					jiage:'125.5',
					beizhu:'治疗支气管炎'
				}],
				//历史处方
				tableData6: [{
					id: '1',
					name:'张三',
					jiage:'48',
					beizhu:'治疗感冒'
				}, {
					id: '2',
					name:'李四',
					jiage:'15.5',
					beizhu:'治疗鼻炎'
				}, {
					id: '3',
					name:'王五',
					jiage:'125.5',
					beizhu:'治疗支气管炎'
				}],
				addform: {
					category:'',
					famiroom:'',
					type: '',
					attendingdoc:'',
					moeny:'',
					medicalcard:'',
					name: '',
					card:'',
					birthday:'',
					phone:'',
					sex:'',
					address:'',
					remark:''
				},
				//转住院
				zhuanzhuyuan:false,
				//历史处方详情
				lishichufangxiangqing:false,
				//历史处方
				lishichufang:false,
				//模板详情
				mobanxiangqing:false,
				//处方模板
				chufangmoban:false,
				//新增检查处方
				addjccf:false,
				//新增化验处方
				addhycf:false,
				//新增中药处方
				addzycf:false,
				//新增西药处方
				addxycf:false,
				// 处方
				form:{
					jiuzhenid:'',
					name:''
				},
				//候诊
	          tableData: [{
				id:'123',
				jiuzhenid:'20210624001',
				name:'张三',
				sex:'男',
	            date: '2016-05-02 14:25:26',
				age:'18',
				phone:'12345678900',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            id:'1',
	            jiuzhenid:'20210624001',
	            name:'张三',
	            sex:'男',
	            date: '2016-05-02',
	            age:'18',
	            phone:'12345678900',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            id:'1',
	            jiuzhenid:'20210624001',
	            name:'张三',
	            sex:'男',
	            date: '2016-05-02',
	            age:'18',
	            phone:'12345678900',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            id:'1',
	            jiuzhenid:'20210624001',
	            name:'张三',
	            sex:'男',
	            date: '2016-05-02',
	            age:'18',
	            phone:'12345678900',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }],
			  //中药处方复选框
			  checked:false
	        }
	      }
		}
</script>

<style>
	  /* 123*/
	  .el-tabs--border-card>.el-tabs__content {
	      padding: 0px;
	  }
	  .el-table .cell {
	      -webkit-box-sizing: border-box;
	      box-sizing: border-box;
	      overflow: hidden;
	      text-overflow: ellipsis;
	      white-space: normal;
	      word-break: break-all;
	      line-height: 35px;
	      padding-left: 0px;
	      padding-right: 0px;
	  }
	  .el-table td, .el-table th {
	      padding: 0px 0;
	      min-width: 0;
	      -webkit-box-sizing: border-box;
	      box-sizing: border-box;
	      text-overflow: ellipsis;
	      vertical-align: middle;
	      position: relative;
	      text-align: left;
	  }
	  .jhinput .el-input__inner{
			height: 30px;
	  }
	  .jzeltabs .el-tabs__content {
		padding: 0px;
		height: 193px;
	}
	.jiuzheninput .el-col .el-form-item .el-input .el-input__inner {
		height: 30px;
		padding: 0px 5px;
	}
	.jiuzheninput .el-col .el-form-item{
		margin-bottom: 10px;
	}
	.jiuzheninput .el-col{
		padding-left: 7px !important;
		padding-right: 7px !important;
	}
	.el-dialog__body {
		padding: 30px 20px;
		color: #606266;
		font-size: 14px;
		word-break: break-all;
		padding-top: 10px;
	}
	.chufangsousuo{
		margin-bottom: 8px;
	}
	.zhuanzhuyuan .el-row .el-col .el-form-item .el-form-item__label {
	    width: 80px;
	}
	</style>
	
	