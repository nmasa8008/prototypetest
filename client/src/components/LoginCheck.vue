<template>
  <div class="login-check">
    <h1>【デバッグ用】ログインチェック画面</h1>
    <h2>loggedIn: {{ loggedIn }}</h2>
    <p>ここに表示している loggedIn の値は Vuex の store から取得しています。store からの取得方法は、このページのソースを参考にして下さい。</p>
  </div>
</template>

<script>
export default {
  name: 'LoginCheck',
  props: {
    msg: String
  },
  computed: {
    loggedIn() { return this.$store.getters['user/loggedIn'] },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
