<template>
  <div id="tools">
    <div class="drag"></div>
    <div class="tools-item">
      <i class="el-icon-minus" @click="toMini"></i>
      <i class="el-icon-full-screen" @click="toMax"></i>
      <i class="el-icon-close" @click="toClose"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toMini(){
      this.$client.miniWindow()
    },
    toMax(){
      this.$client.maxWindow()
    },
    toClose(){
      this.$client.closeWindow()
    }
  }
}
</script>

<style lang="scss">
#tools{
  display: flex;
  height: 50px;
  .drag{
    flex: 1;
  }
  .tools-item{
    i{
      margin: 0 8px;
    }
  }
}
</style>