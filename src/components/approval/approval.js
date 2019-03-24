export default {
  data () {
    return {
      activeName: 'first',
      // 表格数据
      tableData: [
        {
          id: 'sunbin',
          time: '2019-3-24',
          status: 'true',
          perform: '查看详情'
        },
        {
          id: '你好',
          time: '2019-3-24',
          status: 'false',
          perform: '查看详情'
        }
      ],
      //   模态框
      centerDialogVisible: false,
      //   模态框数据
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      //   下拉1
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      value: '',
      //   下拉2
      status: [
        {
          note: '选项1',
          label: '待审核'
        },
        {
          note: '选项2',
          label: '不同意'
        },
        {
          note: '选项3',
          label: '同意'
        }
      ],
      note: '',

      //  时间
      date: '',
      time: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
