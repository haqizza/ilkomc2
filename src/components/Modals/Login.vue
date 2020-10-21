<template>
  <div>
    <div class="modal-data">
      <transition name="modal">
        <div v-show="show" @click="$emit('close'), registerOff()" class="modal-mask">
          <div @click.stop class="modal-wrapper">
            <div class="input-data">
              <form @submit="login" class="form-wrapper">
                <div class="input-group mb-3">
                  <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Enter Username" 
                  v-model="username"
                  />
                </div>
                <div class="input-group mb-3">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Enter Password" 
                    v-model="password"
                  />
                </div>
                <span v-show="same == false" class="text-danger">Password Not Matching</span>
                <div v-if="registering == true" class="input-group mb-3">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Confirm Password" 
                    v-model="rePassword"
                    @input="checkSame()"
                  />
                </div>
                <div>
                  <input 
                    v-if="registering == false" 
                    type="submit"
                    value="Login" 
                    class="btn btn-success form-button"
                  />
                  <input 
                    v-if="registering == false" 
                    type="button"
                    value="Create Account" 
                    @click="registerOn()" 
                    class="btn btn-primary form-button"
                  />
                  <input 
                    v-if="registering == true" 
                    type="button" 
                    value="Register" 
                    @click="register" 
                    class="btn btn-primary form-button"
                    />
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
import { mapActions } from 'vuex';

export default {
  data(){
    return{
      username: "",
      password: "",
      rePassword: "",
      registering: false,
      same: true,
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  methods:{
    ...mapActions(["login","register"]),
    checkSame(){
      if(this.rePassword == this.password){
        this.same = true;
      } else {
        this.same = false;
        console.log(this.same);
      }
    },
    registerOn(){
      this.registering = true;
    },
    registerOff(){
      this.registering = false;
    }
  },
  computed:{
    
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
  .registering{
    text-align: left;
  }
</style>