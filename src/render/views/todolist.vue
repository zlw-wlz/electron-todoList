<template>
  <div id="todolist">
    <div>今日代办事务</div>
    <el-button type="primary" @click="addTask">添加任务</el-button>
    <div v-for="item in todolist" :key="item.id" class="">
      {{item.toDo}} {{item.status}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //0-未完成，1-已完成
      todolist:[{toDo:'学习electron',status:'1',id:123},{toDo:'学习electron',status:'1',id:414},{toDo:'学习electron',status:'1',id:1241}]
    }
  },
  methods:{
    addTask(){
      this.todolist.push({toDo:'学习electron',status:'1',id:5235})
    }
  }
}
</script>

<style lang="scss">
#todolist{
  .undone{
  }
}
</style>