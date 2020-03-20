<template>
  <div class="loginPage">
    <div class="showForm">
      <div class="login">
        <span class="title">后台管理系统</span>
        <el-form
          :model="form"
          :rules="rules"
          :hide-required-asterisk="true"
          ref="form"
          label-position="left"
          label-width="60px"
        >
          <el-form-item label="账号" prop="email">
            <el-input v-model="form.email" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              show-password="show-password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="form.code" placeholder="请输入验证码">
              <template slot="append">
                <valid-code height="38px" :value.sync="validCode"/>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleReset">重置</el-button>
            <el-button type="primary" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <ul class="info">
      <li>
        后台管理系统PC版
      </li>
      <li>
        中文
      </li>
      <li>
        <a href="http://beian.miit.gov.cn" target="_blank">
          津ICP备19009993号-1
        </a>
      </li>
    </ul>
    <p class="lang">
      版权所有 | © 2019-2020&nbsp;&nbsp;&nbsp;
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    const validateCode = (rule, value, callback) => {
      if (value !== this.validCode) {
        callback(new Error('验证码输入错误'))
      } else {
        callback()
      }
    }
    return {
      form: {},
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^([a-zA-Z0-9]){6,20}$/i,
            message: '密码格式不正确',
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '账号格式不正确',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { validator: validateCode, trigger: 'blur' }
        ]
      },
      validCode: ''
    }
  },
  mounted () {
    const height = document.querySelector('.loginPage').clientHeight
    document.querySelector('.showForm').style.marginTop = height / 2 - 170 + 'px'
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.form)
        } else {
          return false
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .loginPage{
    height: 100vh;
    width: 100vw;
    min-width: 700px;
    min-height: 700px;
    overflow: hidden;
    background-size: cover;
    position: relative;
    &:before{
      content: '';
      width: 100%;
      height: 100%;
      background-color: $primary-color;
      position: absolute;
      top:0;
      left: 0;
      z-index: 10;
    }
    .showForm {
      width: 410px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: #999 0 2px 10px;
      position: relative;
      z-index: 20;
      padding: 20px;
      margin: 0 auto 0;
      .login{
        width: 90%;
        margin: 0 auto;
        .title{
          display: block;
          margin-top: 15px;
          margin-bottom: 20px;
          font-size: 16px;
          text-align: center;
        }
        ::v-deep .el-input-group__append{
          padding: 0;
        }
      }
    }
    .info{
      position: absolute;
      z-index: 20;
      color: #ddd;
      left: 60px;
      bottom: 60px;
      li{
        font-size: 14px;
        line-height: 14px;
        display: inline-block;
        vertical-align: middle;
        padding: 0 8px;
        border-right: 1px solid #d3d3d3;
        &:last-child{
          border-right: 1px solid transparent;
        }
        a{
          color: inherit;
        }
      }
    }
    .lang{
      position: absolute;
      right: 60px;
      bottom: 60px;
      color: #ddd;
      font-size: 14px;
      z-index: 20;
    }
  }
</style>
