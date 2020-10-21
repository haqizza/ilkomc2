<template>
  <component :is="getCurrentScreen"></component>
</template>

<script>
import { mapGetters } from 'vuex';
import Front from '@/views/Front';
import Dashboard from '@/views/Dashboard';
// @ = src directory alias

export default {
  components:{
    Front,
    Dashboard
  },
  computed:{
    ...mapGetters(["getCurrentScreen"]),
  }
}
</script>

<style>

</style>