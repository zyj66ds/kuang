<template>
  <div>
    <el-tabs>
      <el-tab-pane label="全部销售订单" name="all"></el-tab-pane>
      <el-tab-pane label="待支付" name="unpaid"></el-tab-pane>
      <el-tab-pane label="待收货" name="receiving"></el-tab-pane>
      <el-tab-pane label="已完成" name="completed"></el-tab-pane>
    </el-tabs>
    <el-button @click="add">添加销售订单</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="销售订单编号" width="240"></el-table-column>
      <el-table-column prop="creatDate" label="订单创建时间" width="180"></el-table-column>
      <el-table-column prop="status" label="订单状态"></el-table-column>
      <el-table-column label="操作">
        <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
        <el-button size="mini" plain type="danger" icon="el-icon-delete"></el-button>
      </el-table-column>
    </el-table>

    <!-- 添加销售订单 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="orderForm" label-width="110px">
        <el-form-item label="销售订单编号">
          <el-input v-model="orderForm.num" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名">
          <el-input v-model="orderForm.name" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单创建时间">
          <el-input v-model="orderForm.sj" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="orderForm.dz" size="small" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货联系电话">
          <el-input v-model="orderForm.dh" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货联系人">
          <el-input v-model="orderForm.lxr" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="销售员">
          <el-input v-model="orderForm.xs" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-input v-model="orderForm.status" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单总价">
          <el-input v-model="orderForm.zj" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-input v-model="orderForm.fk" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实付总额">
          <el-input v-model="orderForm.ze" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="付款日期">
          <el-input v-model="orderForm.date" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品备注信息">
          <el-input v-model="orderForm.bz" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>

        <!-- <el-form-item label="订单商品">
          <el-input v-model="orderForm.sp" size="small" width="180px" autocomplete="off"></el-input>
        </el-form-item>-->
      </el-form>
      <ul id="info">
        <li>订单商品:</li>
        <li>你好</li>
        <li>你真好</li>
      </ul>
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
      tableData: [{ num: 23124142, creatDate: '19-2-3', status: '未完成' }],
      dialogFormVisible: false,
      orderForm: {}
    }
  },
  methods: {
    add () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
ul#info {
  list-style: none;
  overflow: hidden;
}
ul#info li {
  float: left;
  padding: 0 10px;
  width: 25%;
}
</style>
