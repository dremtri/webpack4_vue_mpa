<template>
  <div class="test">
    aasdgasasdfauhjkhdgs
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      arr: [1, 2, 3, 4]
    }
  },
  mounted() {
    this.arr.forEach(val => console.log(val))
    const tempArr = this.arr.map(val => val * 2)
    tempArr.forEach(val => console.log(val))
  }
}
</script>

<style lang="scss" scoped>
@import "~@assets/styles/variables.scss";
.test {
  color: $themeColor;
}
</style>