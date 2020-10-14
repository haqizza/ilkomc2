/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import VueAxios from 'vue-axios';

Vue.use(Vuex, axios);
axios.defaults.baseURL = 'https://ilkomc2-19.my.id/api'

const state = () => ({
  userList: [],
  currentUserData: {}
});

const getters = {
  getUserList: state => state.userList,
  getCurrentUserData: state => state.currentUserData,
  getCurrentUserId: state => state.currentUserData._id,
  // getCurrentUserName: state => state.currentUserData.name,
  // getCurrentUserProfession: state => state.currentUserData.profession,
  // getCurrentUserBirthday: state => state.currentUserData.birthday,
  // getCurrentUserAddress: state => state.currentUserData.address,
  // getCurrentUserCity: state => state.currentUserData.city,
  // getCurrentUserPhoneNumber: state => state.currentUserData.phoneNumber,
  // getCurrentUserEmail: state => state.currentUserData.email,
  // getCurrentUserPhoto: state => state.currentUserData.photo,
  // getCurrentUserBio: state => state.currentUserData.bio,
  // getCurrentUserEducation: state => state.currentUserData.education,
  // getCurrentUseAchievement: state => state.currentUserData.achievement,
  // getCurrentUserPortfolio: state => state.currentUserData.portfolio
};

const actions = {
  // addUser({commit}, input){

  // },
  changeCurrentUser({ commit }, input) {
    commit('SET_CURRENT_USER_DATA', input);
  },
  async loadUserList({commit}) {
    console.log('test action');
      try {
        const response = await axios.get('/users');
        console.log(response);
        commit('SET_USER_LIST', response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  
      // this.axios.get('https://ilkomc2-19.my.id/api/users', {
      //   headers: {
      //     'proxy': 'localhost:8000'
      //   }
      // })
      // .then(response => {
      //   commit('SET_USER_LIST', response.data)
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
      // .then(items => {
      //   console.log(items);
      // })
  },
  loadCurrentUser({commit}){
    commit(() => {
    })
  }
};

const mutations = {
  SET_CURRENT_USER_DATA: (state, currentUserData) => {
    state.currentUserData = currentUserData;
  },
  SET_USER_LIST: (state, users) => (
    state.userList = users
  )
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
