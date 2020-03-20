<template>
  <header>
    <div class="header-box">
      <div class="box">
        <div class="box-left">
          <p><i class="el-icon-crop"></i> 后台管理系统</p>
        </div>
        <ul class="box-right">
          <li @click="handleClose">
            <a href="javascript:void(0)">
              <i class="el-icon-switch-button"></i> 退出
            </a>
          </li>
          <li @click="fullScreen">
            <a href="javascript:void(0)">
              <i class="el-icon-full-screen"></i> 全屏
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="el-icon-user"></i> admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { removeToken } from '../../utils/token'

export default {
  name: 'HeaderList',
  data () {
    return {
      defaultColor: '#ED4040'
    }
  },
  methods: {
    handleClose () {
      this.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
        confirmButtonText: '去意已决',
        cancelButtonText: '我再想想',
        type: 'warning'
      }).then(_ => {
        removeToken()
        this.$notice.info({ msg: '已退出当前账号' })
      }).catch(_ => {
        return false
      })
    },
    fullScreen () {
      if (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      ) {
        // this.showAll = true
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        // this.showAll = false
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen()
        } else if (document.documentElement.body.msRequestFullscreen) {
          document.documentElement.body.msRequestFullscreen()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  header{
    .header-box{
      background-color: $primary-color;
      .box{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .box-left{
          float: left;
          width: 200px;
          text-align: center;
          p{
            line-height: 50px;
            color: #fff;
          }
        }
        ul.box-right{
          float: left;
          width: calc(100% - 200px);
          overflow: hidden;
          li{
            float: right;
            a{
              display: block;
              padding: 15px 30px;
              color: #fff;
              line-height: 20px;
              &:hover{
                background-color: #d73737;
                color: #f4f4f4;
              }
            }
          }
        }
      }
    }
  }
</style>
