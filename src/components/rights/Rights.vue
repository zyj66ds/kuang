<template>
  <div>
    <!-- 导航 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <template>
      <el-table :data="rightsList" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="authName" label="权限列表" width="180"></el-table-column>
        <el-table-column prop="path" label="路径" width="180"></el-table-column>
        <el-table-column label="等级">
          <template slot-scope="scope">
            <span v-if="scope.row.level==0">一级</span>
            <span v-else-if="scope.row.level==1">二级</span>
            <span v-else>三级</span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      rightsList: []
    };
  },
  created() {
    this.rightsUserList();
  },
  methods: {
    rightsUserList() {
      this.$ajax.get("rights/list").then(res => {
        console.log(res);
        this.rightsList = res.data.data;
      });
    },
    indexMethod(index) {
      return index;
    }
  }
};
</script>

<style lang='less'>
.bread {
  background: #d4dae0;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 20px;
}
</style>
