<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">新建客户信息</el-button>

    <el-table class="userTable" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="客户姓名" width="180"></el-table-column>
      <el-table-column prop="type" label="客户类型" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="address" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
          <el-button size="mini" plain type="danger" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新建客户 -->
    <el-dialog title="客户信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="90px">
        <el-form-item label="客户姓名">
          <el-input v-model="form.name" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户类型">
          <el-select v-model="form.type" placeholder="请选择客户类型">
            <el-option label="经销商" value="a1"></el-option>
            <el-option label="代理商" value="a2"></el-option>
            <el-option label="其他" value="a3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户公司">
          <el-input v-model="form.gs" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户电话">
          <el-input v-model="form.dh" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input v-model="form.yx" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="具体地址">
          <el-input v-model="form.dz" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="form.bz"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        type: '',
        gs: '',
        dh: '',
        yx: '',
        dz: '',
        password: '',
        bz: ''
      },
      tableData: [
        {
          name: '123',
          type: 'nihao',
          mobile: '123124124',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang='less'>
.userTable {
  margin-top: 10px;
}
</style>
