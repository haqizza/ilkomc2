<template>
  <div>
    <div class="modal-data">
      <transition name="modal">
        <div v-show="show" @click="$emit('close')" class="modal-mask">
          <div @click.stop class="modal-wrapper">
            <div class="input-data">
              <form @submit="addUser" class="form-wrapper">
                <div class="input-group mb-3">
                  <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Nama Lengkap" 
                  v-model="nama"
                  >
                </div>
                <div class="input-group mb-3">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Alamat" 
                  v-model="alamat"
                  >
                </div>
                <div class="input-group mb-3">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Email"
                  v-model="email"
                >
                </div>
                <div class="input-group mb-3">
                <input 
                  type="telp" 
                  class="form-control" 
                  placeholder="Nomor Telepon" 
                  v-model="telp"
                  >
                </div>
                <div class="input-group mb-3">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Website" 
                  v-model="web"
                  >
                </div>
                <div>
                  <input type="submit" value="Submit" class="btn btn-primary form-button">
                  <input type="reset" value="Cancel" class="btn btn-danger form-button">
                </div>
              </form>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data(){
    return{
      nama: "",
      alamat: "",
      email: "",
      telp: "",
      web: "",
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions(['addUser'])
  }
}
</script>
<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .input-data{
    background-color: white;
    width: 500px;
    padding: 30px 50px;
    border-radius: 20px;
  }
  .form-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-button{
    margin: 0 10px;
  }
</style>