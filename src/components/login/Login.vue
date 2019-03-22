<template>
  <el-row class="row" type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form class="form" :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="startLogin">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable-next-line */
import axios from "axios";
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    startLogin () {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return
        }
        axios
          .post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            // if(res.)
            console.log(res)
            if (res.data.meta.status === 200) {
              localStorage.setItem('token', res.data.data.token)
              this.$message({
                message: res.data.meta.msg,
                type: 'success',
                duration: 800
              })
              this.$router.push('/home')
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: 'error',
                duration: 800
              })
            }
          })
        this.$router.push('/home')
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
.row {
  height: 100%;
  background: #2d434c;
}
.form {
  background: #fff;
  padding: 25px;
  border-radius: 15px;
}
</style>
