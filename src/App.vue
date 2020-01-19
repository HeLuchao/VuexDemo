<template>
  <div id="app" class="page">
    <el-card class="box-card">
      <ListOne />
    </el-card>
    <el-card class="box-card">
      <ListTwo />
    </el-card>
  </div>
</template>

<script>
import ListOne from './components/ListOne.vue';
import ListTwo from './components/ListTwo.vue';

export default {
  name: 'app',
  components: {
    ListOne,
    ListTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.page{
  width: 100%;
  height: 100%;
  background: #F7F6FB;
  font-family:"Ubuntu";
  color: #555;
}
.box-card{
  margin-top: 30px;
}
.action{
  width: 100%;
  margin-top: 20px;
  text-align: right;
}
</style>

