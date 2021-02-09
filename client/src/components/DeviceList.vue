<template>
<b-container fluid>
  <SideBar/>
    <!-- User Interface controls -->
    <div class="container">
      <div class = "item1">
        【デバッグ用】機器一覧
      <div>
                           
      </div> 
      </div>
          <div class = "item2">
        プロジェクトA
      </div>
    </div>
    <b-row >
      <b-col lg="6" class="my-1">
        <b-form-group
          label="検索キーワード："
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

    </b-row>
    <div class = "tuika">
      <b-button href = "/">追加</b-button><!--編集画面に遷移-->
    </div>
    <!-- Main table element -->
    <b-table
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
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
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
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
  import SideBar from './SideBar';

  export default {
    components: { SideBar },
    name: 'HelloWorld',
    props: {
    msg: String
    },
    data() {
      return {
        items: [
          { isActive: true, age: '東京都〇区１－１－１', 
          name: { first: 'テスト', last: '太郎' }, phone: '000-0000-0000' },
          { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }, phone: '000-0000-0001'},
          {
            isActive: false,
            age: 9,
            name: { first: 'Mini', last: 'Navarro' }
            //,_rowVariant: 'success'
          },
          { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
          {
            isActive: true,
            age: 87,
            name: { first: 'Larsen', last: 'Shaw' }
            //,_cellVariants: { age: 'danger', isActive: 'warning' }//赤,黄
          },
          { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
        ],
        fields: [
          { key: 'name', label: '機器名', sortable: true, sortDirection: 'desc' },
          { key: 'age', label: 'type', sortable: true, class: 'text-center' },
          {
            key: 'isActive',
            label: 'IP',
   //         formatter: (value, key, item) => {
   //           return value ? 'Yes' : 'No'
   //         },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'phone', label: 'Port', sortable: true, class: 'text-center' },
          { key: 'actions', label: '操作' }
        ],
       
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  
  }
</script>
<style>
.item1{
  font-size: 40px;
  margin: 10px 0 0;
}
.item2{
  margin: 30px 0 0;
}

.my-1{
  margin: 190px 0 0;
}
.tuika{
  text-align: left;
  font-size: 40px;
}

.container {
  display: flex;
  justify-content: space-between;
}
.container {
  display: flex;
  justify-content: space-between;
}

</style>