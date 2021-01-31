<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome{{message }}</h2>

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
      <b-button type="here" variant="primary">こちらへ</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'List',
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
            const responseMessage = await res.json();
            const parsMessage = JSON.parse(responseMessage)
            this.message = parsMessage.message;
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
</style>
