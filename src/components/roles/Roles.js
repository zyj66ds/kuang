export default {
  data () {
    return {
      rolesTableData: [],
      dialogRightsVisible: false,
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
          ]
        }]
      },
      {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        },
        {
          id: 6,
          label: '二级 2-2'
        }
        ]
      },
      {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        },
        {
          id: 8,
          label: '二级 3-2'
        }
        ]
      }
      ],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      roleId: ''
    }
  },
  created () {
    this.rolesList()
    this.dialogVisible()
  },
  methods: {
    async rolesList () {
      let res = await this.$ajax.get('roles')
      console.log(res)
      this.rolesTableData = res.data.data
    },
    modelIndex (index) {
      return index
    },

    showAssignRightsDialog (row) {
      // console.log(row)
      this.roleId = row.id
      this.dialogRightsVisible = true
      let keys = []
      row.children.forEach(item1 => {
        item1.children.forEach(item2 => {
          item2.children.forEach(item3 => {
            keys.push(item3.id)
          })
        })
      })
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(keys)
      })
    },
    async dialogVisible () {
      let res = await this.$ajax.get('rights/tree')
      this.data2 = res.data.data
    },
    async assignRights () {
      let key1 = this.$refs.tree.getCheckedKeys()
      let key2 = this.$refs.tree.getHalfCheckedKeys()
      let keys = [...key1, ...key2]
      let res = await this.$ajax.post('roles/' + this.roleId + '/rights', {
        rids: keys.join(',')
      })
      console.log(keys)
      console.log(res)
      this.dialogRightsVisible = false
      this.$message({
        message: '更新成功',
        type: 'success'
      })
      this.rolesList()
    }
  }
}
