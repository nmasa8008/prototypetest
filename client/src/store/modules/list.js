import api from'../../operation/api'

const state = () => ({
  users: [],
  });

 const actions ={
    async getAll(context){
     const payload = await api.getUser();
        context.commit('setData',payload);

     }
 }

const getters = {
  users(state) {
    return state.users;
  }
}

 const mutations ={
   setData(state, payload) {
     state.users=[...payload]
   },
 }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }