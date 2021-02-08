<template>
<div>
<table border="1" cellspacing="0">
          <tbody>
            <tr>
              <th>背番号</th>
              <th>名前</th>
              <th>打率</th>
              <th>試合数</th>
              <th>打席数</th>
              <th>打席</th>
              <th>安打</th>
              <th>二塁打</th>
              <th>三塁打</th>
              <th>本塁打</th>
            </tr>
            <tr v-for="item in batter">
              <td v-text="item.un"></td>
              <td v-text="item.name"></td>
              <td v-text="item.avg"></td>
              <td v-text="item.gm"></td>
              <td v-text="item.pa"></td>
              <td v-text="item.ab"></td>
              <td v-text="item.h"></td>
              <td v-text="item.h2"></td>
              <td v-text="item.h3"></td>
              <td v-text="item.hr"></td>
            </tr>
          </tbody>
        </table>
   
        <table border="1" cellspacing="0">
          <tbody>
            <tr>
              <th>背番号</th>
              <th>名前</th>
              <th>防御率</th>
              <th>試合数</th>
              <th>完投</th>
              <th>無点勝</th>
              <th>無四球</th>
              <th>勝利</th>
              <th>敗戦</th>
              <th>ホールド</th>
              <th>HP</th>
              <th>セーブ</th>
            </tr>
            <tr v-for="item in pitcher">
              <td v-text="item.un"></td>
              <td v-text="item.name"></td>
              <td v-text="item.era"></td>
              <td v-text="item.gm"></td>
              <td v-text="item.cg"></td>
              <td v-text="item.sho"></td>
              <td v-text="item.sho1"></td>
              <td v-text="item.w"></td>
              <td v-text="item.l"></td>
              <td v-text="item.hld"></td>
              <td v-text="item.hp"></td>
              <td v-text="item.sv"></td>
            </tr>
          </tbody>
        </table>
  
    </div>
</template>

<script>

</script>



<style>

</style>