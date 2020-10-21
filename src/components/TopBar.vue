<template>
  <div id="topbar">
    <div class="wrapper">
      <a href="/">
      <img src="../assets/logo.png" onClick="getIsiData"/>
      </a>
      
      <div v-if="getCurrentScreen == 'Front'" class="isi-data" @click="openModalLogin">
        Login
      </div>

      <div v-if="getCurrentScreen == 'Dashboard'" class="isi-data" @click="logout">
        Logout
      </div>
    </div>
    <Login @close="showModalLogin = false" :show.sync="showModalLogin"></Login>
  </div>
</template>
<script>
import Login from '@/components/Modals/Login'
import { mapGetters } from 'vuex';

export default {
  components: {
    Login
  },
  data(){
    return{
      showModalLogin: false
    }
  },
  methods:{
    openModalLogin(){
      this.showModalLogin = true;
      console.log(this.showModalLogin);
    },
  },
  computed:{
    ...mapGetters(["getCurrentScreen"]),
  }
}
</script>
<style scoped>
  img{
    width: 43px;
    height: 43px;
  }
  #topbar{
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    background-color: white;
    box-shadow: 4px 0px 8px 5px rgb(0,0,0,0.2);
  }
  .wrapper{
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .isi-data{
    padding: 10px 20px;
    background-color:#2675a6;
    color: white;
    border-radius: 15px;
  }
  .isi-data:hover{
    background-color:#12a552;
    color: white;
  }
</style>