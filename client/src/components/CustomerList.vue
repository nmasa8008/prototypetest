<template>
  <div class="main">
    <div class="saide">
      <SideBar />
    </div>

    <div class="block">
      <b-container fluid class="block2">
        <!-- User Interface controls -->
        <b-row class="mb-4">
          <b-col md="6" class="p-2">顧客一覧</b-col>
          <b-col md="6" class="ml-auto p-4">
            custmer01(直打ち)
            <b-button href="/">ボタン</b-button>
          </b-col>
        </b-row>

        <!--CSSうまくいかない-->
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

        <b-row align-self="between">
          <b-col md="7" class="p-5">
            <b-button href="/">追加</b-button>
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

          <template #cell(actions)="row">
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Info modal(編集)
            </b-button>
            <b-button>削除</b-button>
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
      </b-container>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";

export default {
  components: { SideBar },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          isActive: true,
          age: "東京都〇区１－１－１",
          name: { first: "テスト", last: "太郎" },
          phone: "000-0000-0000",
        },
        {
          isActive: false,
          age: 21,
          name: { first: "Larsen", last: "Shaw" },
          phone: "000-0000-0001",
        },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          //,_rowVariant: 'success'
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          //,_cellVariants: { age: 'danger', isActive: 'warning' }//赤,黄
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
      ],
      fields: [
        {
          key: "name",
          label: "機器名",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "age", label: "Type", sortable: true, class: "text-center" },
        {
          key: "isActive",
          label: "IP",
          //         formatter: (value, key, item) => {
          //           return value ? 'Yes' : 'No'
          //         },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "phone",
          label: "Port",
          sortable: true,
          class: "text-center",
        },
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
  },
};
</script>

<style>
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
  margin-left: 60%;
}

.between {
  width: 50%;
}
.main {
  display: flex;
  justify-content: space-between;
  padding: 0%;
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
  margin-top: 0px;
  margin-left: 1%;
}

.mb-4 {
  margin-left: 30%;
}

.ms-5 {
  margin-left: 20%;
}
</style>
