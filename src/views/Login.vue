<template>
  <div class="home">
    <div class="row disable-row row-custom">
      <div class="col-md-6 side-login w-full h-full padding-all">
        <div class="container">
          <h2 class="text-uppercase font-weight-bold">Login Sekarang!</h2>
          <h4>dan jalankan bisnis anda</h4>
        </div>
      </div>
      <div class="col-md-6 main-login padding-all">
        <div class="container d-flex justify-content-center">
          <div class="login-form">
            <h4 class="font-weight-bold text-center mb-5">
              Halo, Selamat Datang Kembali
            </h4>
            <div class="form-input text-left">
              <div class="form-group">
                <label for="emailForm" class="font-weight-bold">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control shadow-sm input-form"
                  id="emailForm"
                  placeholder="Masukan email anda"
                >
              </div>
              <div class="form-group">
                <label for="emailPasword" class="font-weight-bold">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control shadow-sm input-form"
                  id="emailPasword"
                  placeholder="Masukan password anda"
                >
              </div>
              <div>
                <span class="text-primary pointer-forget">lupa kata sandi?</span>
              </div>
            </div>
            <div class="d-flex flex-column button-action mt-5">
              <button
                class="button-login"
                @click="handleLogin"
              >
                Login
              </button>
              <button
                class="button-google mt-3"
              >
                <b-icon icon="google" class="mr-5"></b-icon> Login Menggunakan Google
              </button>
              <div class="mt-3">
                <span>Belum memiliki akun? <b>Daftar Sekarang!</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modalWrongPassword"
      data-cy="modal-information"
      hide-footer
      hide-header
    >
      <p>Salah Password</p>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Login',
  components: {
    HelloWorld,
  },
  data(){
    return{
      form:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    handleLogin(){
      const payload = {
        email: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('loginAuth', payload)
        .then((resp)=>{
          sessionStorage.setItem('token',resp.data.data.token)
          this.$store.commit('SET_TOKEN',resp.data.data.token)
          this.$router.push({path:'/member'})
        })
        .catch((error)=>{
          sessionStorage.setItem('token','')
          this.$store.commit('SET_TOKEN','')
          this.$bvModal.show('modalWrongPassword')
        })
    }
  },
};
</script>
<style>
  .disable-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .padding-all{
    padding: 24px 30px
  }
  .side-login{
    background-color: #f3f4f6;
  }

  .input-form::placeholder{
    color: lightgrey;
  }

  .login-form{
    border-radius: 24px;
    border: 1px #16a34a solid;
    padding: 46px 30px;
    background-color: #fafafa;
    max-width: 450px ;
  }

  .pointer-forget{
    cursor: pointer;
  }

  .button-login{
    background-color: #16a34a;
    color: white;
    border-radius: 6px;
    border: none;
    padding: 12px;
  }

  .button-google{
    color: black;
    border-radius: 6px;
    padding: 12px;
    background-color: white;
    border: gray solid 1px;
  }
</style>
