// import axios from 'axios'
export default {
  data () {
    return {
      userList: [{
        username: '熊熊',
        email: 'nnnn@ass.com',
        mobile: '1008100'
      }],
      total: 0,
      pagenum: 1,
      search: '',
      dialogFormVisible: false,
      addUserForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        // 去找 上面的 prop
        username: [
          // 如果不填写数据会触发
          // required: true 必填项
          // trigger: 'blur'  失去焦点触发
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          // 如果格式不正确会 触发
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          // 如果不填写数据会触发
          // required: true 必填项
          // trigger: 'blur'  失去焦点触发
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          // 如果格式不正确会 触发
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur'
          }
        ],
        email: [{
          pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$/,
          message: '邮箱格式不正确',
          trigger: 'blur'
        }],
        mobile: [{
          pattern: /^1(3|4|5|7|8)\d{9}$/,
          message: '手机格式不正确',
          trigger: 'blur'
        }]
      },
      dialogEditVisible: false,
      editForm: {
        id: 1,
        username: '',
        email: '',
        mobile: ''
      }
    }
  },
  created () {
    this.loadUsersList()
  },
  methods: {
    async loadUsersList (pagenum = 1, query = '') {
      try {
        let res = await this.$ajax.get('/users', {
          params: {
            query,
            pagenum,
            pagesize: 2
          }
        })

        // console.log(res)
        this.userList = res.data.data.users
        this.total = res.data.data.total
        this.pagenum = res.data.data.pagenum
      } catch (error) {
        console.log(error)
      }
    },
    pageChanged (res) {
      // console.log(res)
      this.loadUsersList(res, this.search)
    },
    searchUser () {
      this.loadUsersList(1, this.search)
    },
    async delUser (id) {
      // console.log(id)
      try {
        await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        let res = await this.$ajax.delete('users/' + id)
        if (res.data.meta.status === 200) {
          this.$message({
            message: res.data.meta.msg,
            type: 'success'
          })
        }
        this.loadUsersList(1, '')
      } catch (error) {
        this.$message({
          message: '点击了取消',
          type: 'info'
        })
      }
      // console.log(res)
    },
    async stateChange (row) {
      const id = row.id
      const mgState = row.mg_state
      let res = await this.$ajax.put(`users/${id}/state/${mgState}`)
      // console.log(res)
      if (res.data.meta.status === 200) {
        this.$message({
          message: res.data.meta.msg,
          type: 'success'
        })
      }
    },

    showAddUserDialog () {
      this.dialogFormVisible = true
    },
    async addUser () {
      let res = await this.$ajax.post('users', this.addUserForm)
      console.log(res)
      this.dialogFormVisible = false
      this.$message({
        message: res.data.meta.msg,
        type: 'success'
      })
      this.$refs.addUserForm.resetFields()
      this.loadUsersList(1, '')
    },
    showEdit (row) {
      // console.log(row)
      const {
        id,
        username,
        email,
        mobile
      } = row
      this.editForm.id = id
      this.editForm.username = username
      this.editForm.email = email
      this.editForm.mobile = mobile
      console.log(this.editForm)

      this.dialogEditVisible = true
    },
    async editUser () {
      const id = this.editForm.id
      let res = await this.$ajax.put('users/' + id, {
        email: this.editForm.email,
        mobile: this.editForm.mobile
      })
      console.log(res)
      this.dialogEditVisible = false
      this.$message({
        message: res.data.meta.msg,
        type: 'success'
      })
      this.loadUsersList(1, '')
    }
  }
}
