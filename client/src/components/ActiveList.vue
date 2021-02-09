<template>
 <div>
   <h1>LIST!!!!!!!!!!!!</h1>
    <b-container fluid>
 <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

   <b-table :items="userData" :fields="fields" stacked="md"
      show-empty
      small>
     <template #cell(actions)="row">
      <b-button  size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">Select row</b-button>
     </template>
   </b-table>
   <p>
      Selected Rows:<br>
      {{ infoModal }}
  </p>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'ActiveList',
   data(){
      return {
        fields: [ { key: 'user_name', label: 'user_name', sortable: true, sortDirection: 'desc' },
        { key: 'customer_id', label: 'customer_id', sortable: true, sortDirection: 'desc' },
        { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Actions' }],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
    userData: function() {
       const data = this.$store.getters['list/users'];
       return data;
    }
    },
    mounted(){
        this.$store.dispatch('list/getAll')
    },

    methods: {
    info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      }
   }
}
</script>