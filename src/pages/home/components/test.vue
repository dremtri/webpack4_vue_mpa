<template>
  <div class="test">
    <welcome name="React"></welcome>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <slate-demo></slate-demo>
    <m-editor placeholder="简单editor"></m-editor>
  </div>
</template>
<script>
import { list } from '@api/home/home.js'
import Welcome from '../reactComponents/Welcome'
import SlateDemo from '../reactComponents/slate/index'
import MEditor from '@components/MEditor'
export default {
  name: 'Test',
  components: {
    Welcome,
    SlateDemo,
    MEditor
  },
  data() {
    return {}
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      list().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@assets/styles/variables.scss";
.test {
  color: $themeColor;
}
</style>