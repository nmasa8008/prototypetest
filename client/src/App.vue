<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view>
    <List msg="Welcome to Your Vue.js App"/>
    <RegisterPhoto msg="顔写真登録画面"/>
    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
