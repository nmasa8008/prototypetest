<template>
<div class='hello'>
  <div class='saide'>
    <SaideBar/>
  </div>
  <div class='main'>
    <ActiveList/>
  </div>
</div>
</template>

<script>
import ActiveList from './ActiveList.vue';
import SaideBar from './SaideBar';
export default {
  components: { ActiveList,SaideBar },
  name: 'Main',
   }
  
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: space-between;
}

.saide{
  width: 20%;
  height: 100%;
}
.main{
  width: 90%;
  height: 100%;
  margin-right: 2%;
}
</style>