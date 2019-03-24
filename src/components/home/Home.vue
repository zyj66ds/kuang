<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="8">
          <img src alt>
        </el-col>
        <el-col :span="8">
          <h1>矿山机械供需信息系统</h1>
        </el-col>
        <el-col :span="8" class="out">
          欢迎超级管理员
          <a href="#" @click.prevent="loginOut">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          :router="true"
          :default-active="$route.path"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="item1 in menusList" :key="item1.id" :index="item1.id+''">
            <!-- 自定义标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item1.authName }}</span>
            </template>
            <!-- index="/users" -->
            <el-menu-item
              v-for="item2 in item1.children"
              :key="item2.id"
              :index=" '/'+ item2.path"
            >{{ item2.authName }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menusList: [
        {
          authName: '客户管理',
          id: 1,
          path: 'management',
          children: [
            { authName: '客户信息管理', path: 'info' },
            { authName: '客户需求管理', path: 'enquiry' }
          ]
        },
        {
          authName: '销售管理',
          id: 2,
          children: [
            { authName: '销售团队管理', path: 'team' },
            { authName: '销售任务管理', path: 'duty' },
            // { authName: '销售任务执行', path: 'execute' },
            { authName: '订单管理', path: 'order' },
            { authName: '出库单管理', path: 'out1' }
          ]
        },
        {
          authName: '采购管理',
          id: 3,
          children: [
            { authName: '物料信息管理', path: 'material' },
            { authName: '采购申请单', path: 'request' },
            { authName: '采购订单', path: 'sheet' },
            { authName: '入库单管理', path: 'in' },
            { authName: '出库单管理', path: 'out2' }
          ]
        },
        {
          authName: '库存管理',
          id: 4,
          children: [
            { authName: '物料存放管理', path: 'deposit' },
            // { authName: '库存盘点管理', path: 'check' },
            { authName: '出库管理', path: 'outc' },
            { authName: '入库管理', path: 'inc' }
          ]
        },
        {
          authName: '信息管理',
          id: 5,
          children: [{ authName: '企业新闻管理', path: 'news' }]
        },
        {
          authName: '财务审批',

          id: 6,
          children: [{ authName: '财务审批', path: 'approval' }]
        },
        {
          authName: '统计汇总',
          id: 7,
          children: [
            { authName: '采购汇总', path: 'purchase' },
            { authName: '销售汇总', path: 'sales' }
          ]
        },
        {
          authName: '系统维护',
          id: 8,
          children: [
            { authName: '用户管理', path: 'user' },
            { authName: '日志管理', path: 'diary' },
            { authName: '数据备份', path: 'backup' }
          ]
        }
      ]
    }
  },
  created () {
    // this.loadLeftMenus()
  },
  methods: {
    loginOut () {
      this.$confirm('此操作将退出账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
    // async loadLeftMenus () {
    //   let res = await this.$ajax.get('menus')
    //   console.log(res)
    //   this.menusList = res.data.data
    // }
  }
}
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  .container {
    height: 100%;
    min-width: 860px;
    background-color: #eaeef1;
    .header {
      background-color: #b3c1cd;
      h1 {
        line-height: 60px;
        text-align: center;
      }
      .out {
        text-align: right;
        line-height: 60px;
        a {
          color: #daa521;
        }
      }
    }
    .aside {
      background-color: #545c64;
    }
  }
}
</style>
