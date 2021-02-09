<template>
<div class="hello">
  <div class="side-bar">
    <SideBar/>
  </div>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h2>Welcome{{responseData }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <b-form @submit="onSubmit" @reset="onReset" @here="onHere" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

      <b-button @click="login" type="button" variant="primary">login</b-button>
      <b-button @click="logout" type="button" variant="primary">logout</b-button>
      <router-link to="/login_check">ログインチェック</router-link>


    </b-form>
  </div>
</div>
</template>

<script>
import SideBar from './SideBar';

export default {
  components: { SideBar },
  name: 'Devicelist',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: '',
      },
      show: true,
      message:'',
    }
  },
    methods: {
      login() {
        this.$store.dispatch('user/login')
        this.$nextTick(() => {
          alert(`you have logged in!\nplease click 'ログインチェック'`)
          console.log('logged in')
        })
      },
      logout() {
        this.$store.dispatch('user/logout')
        this.$nextTick(() => {
          alert(`you have logged out`)
          console.log('logged out')
        })
      },
      onSubmit(event) {
        event.preventDefault()
          const created = async () => {
          const method = "POST";
          const body = JSON.stringify(this.form);
          const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          const res = await fetch("index/test", {method, headers, body});
          if (res.ok) {
            const responseData = await res.json();
            // const parsMessage = JSON.parse(responseMessage)
            console.log(responseData);
            console.log(responseData[0]);
            return responseData;

          } else {
            this.message = 'failed';
          }
        }
        created();
      },
    },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onHere(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
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
