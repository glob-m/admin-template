<template>
  <aside>
    <div class="aside-body">
      <el-menu
        background-color="#fff"
        text-color="#2c3e50"
        active-text-color="#ED4040"
        :default-active="activeRouter"
        menu-trigger="click"
        :unique-opened="true"
        router>
        <template v-for="(item, index) in asideMenu">
          <el-menu-item class="menu-item"
                        v-if="!item.children" :index="item.url"
                        :key="index">
            <span slot="title" class="menu-title">
              <i v-if="item.icon_type === 'font_class'" :class="item.icon_url"></i>
              {{item.menu_name}}
            </span>
          </el-menu-item>
          <el-submenu v-else
                      :index="item.url"
                      :key="index"
          >
            <span slot="title" class="menu-title">
                <i v-if="item.icon_type === 'font_class'" :class="item.icon_url"></i>
                {{item.menu_name}}
              </span>
            <el-menu-item
              class="menu-item"
              v-for="(sub_item, sub_index) in item.children"
              v-show="!sub_item.children"
              :index="sub_item.url"
              :key="sub_index + '#'"
            >
              <span slot="title" class="menu-title">{{sub_item.menu_name}}</span>
            </el-menu-item>
            <el-submenu
              class="menu-item"
              v-for="(sub_item, sub_index) in item.children"
              v-show="sub_item.children"
              :index="sub_item.url"
              :key="sub_index + '$'"
            >
              <span slot="title" class="menu-title">{{sub_item.menu_name}}</span>
              <el-menu-item v-for="(last_item,last_index) in sub_item.children"
                            :index="last_item.url"
                            :key="last_index">
                <span slot="title" class="menu-title">{{last_item.menu_name}}</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </aside>
</template>

<script>
import aside from './aside'
export default {
  name: 'AsideList',
  data () {
    return {
      asideMenu: aside
    }
  },
  computed: {
    activeRouter () {
      return this.$route.meta.active || this.$route.path
    }
  }
}
</script>

<style lang="scss">
  aside{
    height: inherit;
    width: inherit;
    padding: 23px 0;
    .aside-body{
      width: 100%;
      height: 100%;
      background-color: white;
      box-shadow:0 0 3px 0 rgba(131, 131, 131, 0.2);
      border-radius: 10px;
      overflow: hidden;
      margin-left: 5px;
      .menu-title{
        display: block;
        margin-left: 12px;
        i{
          vertical-align: top;
        }
      }
      .el-menu{
        border: none;
        .el-menu-item:focus,
        .el-menu-item:hover,
        .menu-item:focus,
        .menu-item:hover,
        .el-submenu__title:hover{
          background-color: rgba(255, 70, 70, 0.09) !important;
          color: $primary-color !important;
          & span.menu-title{
            color: $primary-color;
            i{
              color: $primary-color;
            }
          }
        }
      }
    }
  }
</style>
