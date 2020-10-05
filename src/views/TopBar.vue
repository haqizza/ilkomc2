<template>
  <div id="topbar">
    <div class="wrapper">
      <img src="../assets/logo.png" onClick="getIsiData"/>
      <div class="isi-data" @click="openModalIsiData">
        <i class="far fa-plus-square"></i> Isi Data
      </div>
    </div>
    <ModalIsiData @close="showModalIsiData = false" :show.sync="showModalIsiData"></ModalIsiData>
  </div>
</template>
<script>
import ModalIsiData from '@/components/Modals/IsiData'

export default {
  components: {
    ModalIsiData
  },
  data(){
    return{
      showModalIsiData: false
    }
  },
  methods:{
    openModalIsiData(){
      this.showModalIsiData = true;
      console.log(this.showModalIsiData);
    }
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
    z-index: 1;
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