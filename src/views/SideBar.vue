<template>
  <div id="sidebar">
    <div
      class="userItem"
      v-for="(item, index) in getUserList"
      :key="index"
      @click="SET_CURRENT_USER_DATA(item)"
    >
    {{item.name}}
    </div>
    <!-- <button @click="loadUserList"></button> -->
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  // name: 'Sidebar',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['getUserList'])
  },
  methods: {
    ...mapMutations(['SET_CURRENT_USER_DATA']),
    ...mapActions(["loadUserList"]),
    out(){
      console.log(this.getUserList);
    }
  },
  created:function() {
    this.loadUserList()
  },
}
</script>
<style scoped>
  button:hover{
    background-color: green;
  }
  #sidebar{
    padding-top: 10px;
    width: 25%;
    overflow-y: scroll;
    z-index: 1;
  }
  #sidebar::-webkit-scrollbar{
    display: none;
  }
  .userItem{
    padding: 10px 20px;
    border: 1px solid rgb(0,0,0,0.2);
  }
</style>