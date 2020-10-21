<template>
  <div id="profile">
    <p>{{ getCurrentUserData.name }}</p>
    <br>
    {{getCurrentUserData.address}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters(['getCurrentUserData'])
  }
}
</script>
<style scoped>
  #profile{
    float: right;
    width: 75%;
    z-index: -1;
    background-color: #d7d7d7;
  }
</style>