<template>
  <div class="test">
    aasdgasasdfauhjkhdgs
  </div>
</template>
<script>
import { list } from '@api/home/home.js'
export default {
  name: 'Test',
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