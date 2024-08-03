import { createStore } from "vuex";

export default createStore({
  state: {
    isDarkMode: true,
    clinicAccess:{},
    userAccess:{}
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    AddUserAccess(state,user){
      console.log(user)
      state.userAccess = user
    },
    RemoveUserAccess(state){
      state.userAccess = {}
    },
    AddClinicAccess(state, clinic){
      state.clinicAccess = clinic
    },
    RemoveClinicAccess(state){
      state.clinicAccess = {}
    }
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit('toggleDarkMode');
    },
    AddUserAccess({ commit }, user){
      commit('AddUserAccess',user);
    },
    RemoveUserAccess({ commit },){
      commit('RemoveUserAccess');
    },
    AddClinicAccess({ commit }, clinic){
      commit('AddClinicAccess', clinic);
    },
    RemoveClinicAccess({ commit }){
      commit('RemoveClinicAccess');
    }
  },
  getters: {
    isDarkMode: state => state.isDarkMode,
    clinicAccess: state => state.clinicAccess,
    userAccess: state => state.userAccess,
  }
});