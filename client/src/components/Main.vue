<template>
<div class='hello'>
  <div class='side-bar'>
    <SideBar/>
  </div>
  <div class='main'>
    <ActiveList/>
  </div>
</div>
</template>

<script>
import ActiveList from './ActiveList.vue';
import SideBar from './SideBar';
export default {
  components: { ActiveList,SideBar },
  name: 'Main',
   }
  
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: space-between;
}

.side-bar{
  width: 20%;
  height: 100%;
}
.main{
  width: 90%;
  height: 100%;
  margin-right: 2%;
}
</style>