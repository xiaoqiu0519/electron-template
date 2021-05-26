<template>
  <div class="login">
    <h1>Welcome to Your Vue.js + TypeScript App</h1>
    <el-form :model="ruleForm" status-icon :rules='rules' ref="ruleFormRef" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名:" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submitlogin" type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
// import {createWindow} from '@/background'
import {defineComponent,reactive,ref} from 'vue'
// import fs from 'fs'
export default defineComponent({
  setup(){
    const ruleForm = reactive({
      username:'',
      password:''
    })
    const ruleFormRef = ref(null)
    const validateUsername = (value:string | number, callback:()=>void) => {
      if (value === '') {
        console.log(11111)
        // callback(new Error('请输入密码'));
      } else {
        if (ruleForm.username !== '111222') {
          console.log(1111133333)
          // ruleFormRef.validateField('username');
        }
        callback();
      }
    };
    const rules = {
      username:[{ validator: validateUsername, trigger: 'blur' }]
    }
    const submitForm = ()=>{
      // createWindow('home')
    }
    return {
      ruleForm,
      ruleFormRef,
      rules,
      submitForm
    }
  }
})
</script>
<style lang='scss' scoped>
.login{
  width: 100%;
  height: calc(100vh); 
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  h1{
    margin-bottom: 50px;
  }
  ::v-deep .el-form-item__label{
    text-align: left !important;
  }
  .submitlogin{
    width: 200px;
  }
}
</style>