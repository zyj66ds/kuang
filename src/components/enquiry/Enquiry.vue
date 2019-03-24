<template>
  <div>
    <el-tabs>
      <el-tab-pane label="全部需求信息" name="all"></el-tab-pane>
      <el-tab-pane label="未处理" name="untreated"></el-tab-pane>
      <el-tab-pane label="已处理" name="processed"></el-tab-pane>
    </el-tabs>
    <el-table :data="enquiryTable" style="width: 100%">
      <el-table-column prop="id" label="需求id" width="180"></el-table-column>
      <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="do" label="操作">
        <template slot-scope="scope">
          <el-button plain @click="check">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 查看信息 -->
    <el-dialog title="客户信息" :visible.sync="dialogFormVisible">
      <el-form :model="equiryForm" label-width="90px">
        <el-form-item label="客户姓名">
          <el-input v-model="equiryForm.name" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户类型">
          <el-input v-model="equiryForm.type" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户电话">
          <el-input v-model="equiryForm.dh" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户邮箱">
          <el-input v-model="equiryForm.yx" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="留言内容">
          <el-input v-model="equiryForm.nr" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="处理状态">
          <el-input v-model="equiryForm.status" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="处理记录">
          <el-input v-model="equiryForm.record" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="处理人">
          <el-input v-model="equiryForm.person" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="处理时间">
          <el-input v-model="equiryForm.date" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">提交处理</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      enquiryTable: [{ id: 1, date: 19941122, status: true }],
      dialogFormVisible: false,
      equiryForm: {
        name: '老王',
        type: '大公司',
        dh: '1234214',
        yx: '123@123.com',
        nr: '',
        status: '已处理',
        record: '',
        person: '豆豆',
        date: '19-02-23'
      }
    }
  },
  methods: {
    check () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
</style>
