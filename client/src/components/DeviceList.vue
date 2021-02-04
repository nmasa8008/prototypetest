<template>
  <div>
        <table border="1" cellspacing="0">
          <tbody>
            <tr>
              <th>機器名</th>
              <th>Type</th>
              <th>IP</th>
              <th>Port</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.name">
              <td v-text="item.name"></td>
              <td v-text="item.type"></td>
              <td v-text="item.ip"></td>
              <td v-text="item.port"></td>
              <td v-text="item.manual"></td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      list:[
      {name:'a',type:'b',ip:'c',port:'d',manual:'z'},
      {name:'a1',type:'b2',ip:'c3',port:'d4',manual:'z5'}
      ]
    }
  }
}
</script>



<style>
table{
    margin-left: auto;
    margin-right: auto;

}

th, td {
  padding: 5px;
  text-align: center;
}

.fade-transition {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}
</style>