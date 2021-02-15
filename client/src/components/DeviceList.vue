<template>
  <div>
    <template>
      <div class="main-1" v-show="!toggle">
        <div class="saide">
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
              <b-col md="6" class="p-2">機器一覧</b-col>
              <b-col md="6" class="ml-auto p-4">projectA </b-col>
            </b-row>

            <b-row ms="5">
              <b-col md="12" lg="6" class="ms-5">
                <b-form-group
                  label="検索キーワード："
                  label-for="filter-input"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      class="ms-2"
                      id="filter-input"
                      v-model="filter"
                      type="search"
                      placeholder="Type to Search"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button
                        :disabled="!filter"
                        @click="filter = ''"
                        class="clear"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="7" class="p-5" v-show="!toggle">
                <!--  <b-button href="/">インポート</b-button> -->
                <!--<p v-show="toggle">真偽値：true</p>--><!--ボタン切り替えチェック-->
                <button v-on:click="toggleBtn">追加</button>
              </b-col>
            </b-row>
            <!-- Main table element -->
            <b-table
              class="table table-bordered"
              :items="items"
              :fields="fields"
              :filter="filter"
              :filter-included-fields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              stacked="md"
              show-empty
              small
              @filtered="onFiltered"
              head-variant="light"
            >
              <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
              </template>

              <!--ボタンとリンクの表示分岐の方法わからない -->
              <template #cell(face)="row">
                <div v-show="show">
                  <a href="row.value.url">{{ row.value.name }}</a>
                </div>
                <div v-show="items.show in items">
                  <b-button>登録</b-button>
                </div>
              </template>

              <template #cell(actions)>
                <!--  <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Info modal(編集)
            </b-button>-->

                <!--削除ボタンうまく機能しない-->
                <b-button class="btn btn-danger" @click="deleteUser(user)"
                  >削除</b-button
                >
                <!--<b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>-->
              </template>

              <!--<template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template> -->
            </b-table>

            <!-- Info modal -->
            <b-modal
              :id="infoModal.id"
              :title="infoModal.title"
              ok-only
              @hide="resetInfoModal"
            >
              <pre>{{ infoModal.content }}</pre>
            </b-modal>
            <b-row v-show="toggle">
              <button>追加</button>
              <button v-on:click="toggleBtn">戻る</button>
            </b-row>
          </b-container>
        </div>
      </div>
    </template>

    <template>
      <div v-show="toggle">
        <DeviceEntry />
        <button>追加</button>
        <button v-on:click="toggleBtn">戻る</button>
      </div></template
    >
  </div>
</template>

<script>
import SideBar from "./SideBar";
import DeviceEntry from "./DeviceEntry";

export default {
  components: { SideBar, DeviceEntry },
  data() {
    return {
      user: [],
      //show: false,
      show: [],
      toggle: false,
      items: [
        {
          name: { first: "テスト", last: "太郎" },
          belong: "〇会社",
          phone: "000-0000-0000",
          vehicle: "品川000あ0000",
          face: {
            name: "google",
            url: "https://www.google.com/",
          },
          show: false,
        },
        {
          isActive: false,
          age: 21,
          name: { first: "Larsen", last: "Shaw" },
          phone: "000-0000-0001",
          face: {
            name: "google",
            url: "https://www.google.com/",
          },
          show: true,
        },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          //,_rowVariant: 'success'
        },
        {
          isActive: false,
          age: 89,
          name: { first: "Geneva", last: "Wilson" },
        },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          //,_cellVariants: { age: 'danger', isActive: 'warning' }//赤,黄
        },
        {
          name: { first: "テスト", last: "２郎" },
          belong: "×会社",
          phone: "000-0000-0003",
          vehicle: "品川001い0001",
        },
      ],
      fields: [
        {
          key: "name",
          label: "作業員名",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "belong",
          label: "所属",
          sortable: true,
          class: "text-center",
        },
        {
          key: "phone",
          label: "電話番号",
          //         formatter: (value, key, item) => {
          //           return value ? 'Yes' : 'No'
          //         },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "vehicle",
          label: "車両番号",
          sortable: true,
          class: "text-center",
        },
        { key: "face", label: "顔写真" },
        { key: "actions", label: "操作" },
      ],

      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
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

.main-1 {
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
