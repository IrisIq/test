<template>
  <div class="index">
    <div class="table">
      <el-card>
        <el-table :data="data" style="width: 100%" border stripe height="50vh">
          <el-table-column type="index" label="序号" align="center" header-align="center"> </el-table-column>
          <el-table-column prop="name" label="分类" align="center" header-align="center" width="110"> </el-table-column>
          <el-table-column prop="value" label="数量" align="center" header-align="center"> </el-table-column>
          <el-table-column fixed="right" label="操作" align="center" header-align="center">
            <template v-slot="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>

    <el-card>
      <div class="cookie">
        <div id="main" style="width: 100vh; height: 50vh"></div>
      </div>
    </el-card>

    <el-dialog title="修改人数" :visible.sync="dialogVisible" width="50%" append-to-body>
      <div>
        <!-- 表单验证 -->
        <el-form :model="form" ref="formRef" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="人数"
            prop="value"
            :rules="[
              { required: true, message: '人数不能为空' },
              { type: 'number', message: '人数必须为数字值' }
            ]"
          >
            <el-input type="age" v-model.number="form.value" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.draw()
  },

  data() {
    return {
      data: [],
      dialogVisible: false,
      form: {
        // value: 0
      }
    }
  },
  methods: {
    async draw() {
      const { data: res } = await this.$http.get('/api/get')
      this.data = res.data
      const chart = this.$echarts.init(document.getElementById('main'))
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '人数',
            type: 'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '100',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },

            data: this.data
          }
        ]
      }

      chart.setOption(option)
      window.addEventListener('resize', function () {
        chart.resize()
      })
    },
    handleClick(scope) {
      // console.log(scope)
      this.dialogVisible = true
      this.form = scope
      console.log(this.form)
    },
    submitForm() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: row;
}
.cookie {
  width: 50%;
  height: 100%;
}
.table {
  width: 50%;
  // background-color: red;
  height: 100%;
}
#main {
  // width: 50%;
  // background-color: black;
  height: 100%;
}
</style>
