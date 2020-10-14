<template>
  <div>
    <TopBar></TopBar>
    <div id="container">
      <SideBar></SideBar>
      <Profile></Profile>
    </div>
  </div>
</template>

<script>
import TopBar from '@/views/TopBar'
import Profile from '@/views/Profile'
import SideBar from '@/views/SideBar'

export default {
  name: 'App',
  components: {
    SideBar,
    TopBar,
    Profile
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto';
  }
  #container{
    min-height: 600px;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
  }
</style>
