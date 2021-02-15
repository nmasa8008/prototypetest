<template>
  <div>
    <template>
      <div class="device-entry">
        <div class="side-bar">
          <SideBar />
        </div>
        <div class="block">
          <!-- <button v-on:click="toggleBtn">インポート</button> -->
          <b-container fluid class="block2">
            <!-- User Interface controls -->
            <b-row class="mb-4">
              <b-col md="6" class="ml-auto p-4"
                >projectq
                <b-button href="/">ボタン</b-button>
              </b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col md="3" class="p-2">機器登録</b-col>
              <b-col md="3" class="ml-auto p-4">projectA </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col md="6" class="p-2">機器名：</b-col>
              <b-col md="6" class="ml-auto p-4">
                <b-form-input
                  v-model="devicename"
                  placeholder="Enter your name"
                >
                  {{ text }}
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col md="6" class="p-2">タイプ：</b-col>
              <b-col md="6" class="ml-auto p-4">
                <b-form-input v-model="type" placeholder="type">
                  {{ text }}
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col md="6" class="p-2">IP：</b-col>
              <b-col md="1" class="ml-auto p-1">
                <b-form-input v-model="ip1" placeholder="">
                  {{ text }}
                </b-form-input>
              </b-col>
              <b-col md="1" class="ml-auto p-1">
                <b-form-input v-model="ip2" placeholder="">
                  {{ text }}
                </b-form-input>
              </b-col>
              <b-col md="1" class="ml-auto p-1">
                <b-form-input v-model="ip3" placeholder="">
                  {{ text }}
                </b-form-input>
              </b-col>
              <b-col md="1" class="ml-auto p-1">
                <b-form-input v-model="ip4" placeholder="">
                  {{ text }}
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col md="6" class="p-2">Port：</b-col>
              <b-col md="6" class="ml-auto p-4">
                <b-form-input v-model="port" placeholder="port">
                  {{ text }}
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col md="6" class="p-2">カメラコード：</b-col>
              <b-col md="6" class="ml-auto p-4">
                <b-form-input v-model="camera" placeholder="camera">
                  {{ text }}
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col md="6" class="p-2">使用パターン：</b-col>
              <b-col md="6" class="ml-auto p-4">
                <!--<b-form-group label="Individual  radios" v-slot="aria">
                    <b-form-radio
                      v-model="selected"
                      ：aria-
                      definedby="aria"
                      name="some-radios"
                      value="A"
                      >オプションA
                    </b-form-radio>
                    <b-form-radio
                      v-model="selected"
                      ：aria-describeby="aria"
                      name="some-radios"
                      value="B"
                      >オプションB
                    </b-form-radio>
                  </b-form-group>-->

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    入場用
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    退場用
                  </label>
                </div>
              </b-col>
            </b-row>

            <!--<b-row>
              <b-col md="7" class="p-5">
                <button v-on:click="toggleBtn">追加</button>
                <button v-show="toggle" v-on:click="toggleBtn">戻る</button>
              </b-col>
            </b-row>-->
          </b-container>
        </div>
      </div>
    </template>

    <template> </template>
  </div>
</template>

<script>
import SideBar from "./SideBar";
//import DeviceEntry from "./DeviceEntry";

export default {
  components: { SideBar },
  data() {
    return {
      devicename: "",
      type: "",
      ip1: "",
      ip2: "",
      ip3: "",
      ip4: "",
      port: "",
      camera: "",
      selected: "",
      aria: "request",
      //show: false,
      show: [],
      toggle: false,
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    //テーブル下「HelloWorld」表示非表示関連
    toggleBtn: function () {
      this.toggle == true ? (this.toggle = false) : (this.toggle = true);
    },
    showtest: function () {
      this.show == true ? (this.show = false) : (this.show = true);
    },
    deleteUser(user) {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
      /*del: function () {
      this.items.splice(0);*/
    },
  },
};
</script>

<style scoped>
/*
.item1 {
  margin-right: 0%;
  width: 100%;
  font-size: 40px;
}*/
/* margin: 10px 0 0; */

.item2 {
  /* margin: 30px 0 0; */
  margin-left: 0%;
}
.item3 {
  flex-basis: 30%;
}
.my-1 {
  margin: 190px 0 0;
}
/*
.myaccount {
  margin-left: 30%;
  margin-bottom: 0%;
}*/

.clear {
  margin-left: 40%;
}

.between {
  width: 50%;
}

.device-entry {
  display: flex;
  justify-content: space-between;
}

/*
.saide {
  width: 20%;
}
*/
/*
.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
}*/

.block {
  width: calc(100% - 200px);
}
.block2 {
  width: 90%;
}

.p-2 {
  font-size: 3rem;
}

.p-5 {
  margin-left: 0%;
}

.mb-4 {
  margin-left: 30%;
}

.ms-5 {
  margin-left: 20%;
}
</style>
