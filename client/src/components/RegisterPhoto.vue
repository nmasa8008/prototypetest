<template>
  <div class="register_photo">
    <h1>{{ msg }}</h1>
    <h2>Welcome{{ msg }}</h2>
    <div>
      <video ref="video" id="video" width="500" height="500" autoplay></video>
      <div>
        <button color="info" id="snap" v-on:click="capture()">撮影する</button>
      </div>
      <canvas ref="canvas" id="canvas" width="500" height="500"></canvas>
      <ul>
      <li class="capture" v-for="c in captures" v-bind:key="c.d">
        <img v-bind:src="c" height="50" />
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPhoto',
  props: {
    msg: String
  },
  // コピペコード from
  data() {
    return {
      video: {},
      canvas: {},
      captures: []
    }
  },
  mounted () {
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.srcObject = stream
        this.video.play()
      })
    }
  },
  methods: {
    capture () {
      this.canvas = this.$refs.canvas
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, 500, 500)
      this.captures.push(this.canvas.toDataURL('image/png'))
      console.log(this.captures)
    }
  },
  // コピペコード to
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
