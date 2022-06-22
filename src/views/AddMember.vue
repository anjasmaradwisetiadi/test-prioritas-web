<template>
  <div class="Add-member">
    <Header></Header>
    <div class="contain contain-bg">
      <div class="container pt-5 pb-5">
        <div class="card rounded-lg">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="font-weight-bold">
                  Tambah Data Member
                </h3>
              </div>
              <div class="draft-style">
                Draft
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 card rounded-lg">
          <div class="card-body">
            <div class="justify-content-between">
              <div>
                <h4 class="font-weight-bold text-left">
                  Atur Biodata Member
                </h4>
              </div>
            </div>
            <hr>
            <div class="row justify-content-start text-left">
              <div class="col-6  d-flex flex-column">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Nama member</span>
                  </div>
                  <div>
                    <input
                      v-model="form.nameMember"
                      class="input-form"
                      type="text"
                      placeholder="Masukan name member"
                    >
                  </div>
                </div>
              </div>
              <div class="col-6 flex-column">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Tanggal Lahir</span>
                  </div>
                  <div>
                    <input
                      v-model="form.birthMember"
                      class="input-form"
                      type="date"
                      placeholder="Masukan tanggal lahir"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Email</span>
                  </div>
                  <div>
                    <input
                      v-model="form.email"
                      class="input-form"
                      type="text"
                      placeholder="Masukan Email Distributor"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Alamat</span>
                  </div>
                  <div>
                    <input
                      v-model="form.address"
                      class="input-form"
                      type="text"
                      placeholder="Masukan Alamat Distributor"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="">
                  <div>
                    <span class="font-weight-bold">Alamat</span>
                  </div>
                  <b-form-radio-group
                    id="radio-group-gender"
                    v-model="form.gender"
                  >
                      <div class="d-flex">
                          <div class="mr-3">
                            <b-form-radio  name="some-radios" value="Laki - laki">Laki - laki</b-form-radio>
                          </div>
                          <div class="">
                            <b-form-radio name="some-radios" value="Perempuan">Perempuan</b-form-radio>
                          </div>
                      </div>
                  </b-form-radio-group>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="">
                  <div>
                    <span class="font-weight-bold">Status Pernikahan</span>
                  </div>
                  <b-form-radio-group
                    id="radio-group-married"
                    v-model="form.married"
                  >
                    <div class="d-flex">
                      <div class="mr-3">
                        <b-form-radio name="some-radios" value="Menikah">Menikah</b-form-radio>
                      </div>
                      <div class="">
                        <b-form-radio name="some-radios" value="Belum menikah">Belum menikah</b-form-radio>
                      </div>
                    </div>
                  </b-form-radio-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 card rounded-lg">
          <div class="card-body">
            <div class="justify-content-between">
              <div>
                <h4 class="font-weight-bold text-left">
                  Atur NPWP
                </h4>
              </div>
            </div>
            <hr>
            <div class="row justify-content-start text-left">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">NPWP</span>
                  </div>
                  <div>
                    <input
                      v-model="form.npwp"
                      class="input-form"
                      type="text"
                      placeholder="Masukan NPWP Valid"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Alamat NPWP</span>
                  </div>
                  <div>
                    <input
                      v-model="form.addressNpwp"
                      class="input-form"
                      type="text"
                      placeholder="Masukan alamat NPWP"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 card rounded-lg">
          <div class="card-body">
            <div class="justify-content-between">
              <div>
                <h4 class="font-weight-bold text-left">
                  Atur Referal
                </h4>
              </div>
            </div>
            <hr>
            <div class="row justify-content-start text-left">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">No. Referal</span>
                  </div>
                  <div>
                    <input
                      v-model="form.noReferal"
                      class="input-form"
                      type="text"
                      placeholder="Masukan nomor referal"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Nama Referal</span>
                  </div>
                  <div>
                    <input
                      v-model="form.nameReferal"
                      class="input-form"
                      type="text"
                      placeholder="Masukan nama referal"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 card rounded-lg">
          <div class="card-body">
            <div class="justify-content-between">
              <div>
                <h4 class="font-weight-bold text-left">
                  Atur Kantor
                </h4>
              </div>
            </div>
            <hr>
            <div class="row justify-content-start text-left">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Kode Kantor</span>
                  </div>
                  <div>
                    <input
                      v-model="form.codeOffice"
                      class="input-form"
                      type="text"
                      placeholder="Masukan kode kantor"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Alamat Kantor</span>
                  </div>
                  <div>
                    <input
                      v-model="form.addressOffice"
                      class="input-form"
                      type="text"
                      placeholder="Masukan alamat kantor"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col-6  d-flex flex-column">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Provinsi</span>
                  </div>
                  <div>
                    <select
                      @click="handleProvince"
                      class="custom-select"
                      v-model="form.province"
                    >
                      <option value="" selected disabled>Pilih Provinsi</option>
                      <option v-if="loadingStatus">Loading....</option>
                      <option v-else-if="errorStatus && !loadingStatus">Error....</option>
                      <option
                        v-for="(item,index) in getProvince"
                        :key="index"
                        :value="item.attributes.code">
                        {{ item.attributes.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6 flex-column">
                <div class="card-input">
                  <div>
                    <span class="font-weight-bold">Kota</span>
                  </div>
                  <div>
                    <select
                      class="custom-select"
                      @click="handleCities"
                      v-model="form.cities"
                    >
                      <option value="" selected disabled>Pilih Kota</option>
                      <option v-if="loadingStatus">Loading....</option>
                      <option v-else-if="errorStatus && !loadingStatus">Error....</option>
                      <option
                        v-for="(item,index) in getCities"
                        :key="index"
                        :value="item.attributes.code">
                        {{ item.attributes.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="">
                  <div>
                    <span class="font-weight-bold">Status</span>
                  </div>
                  <div class="d-flex">
                    <b-form-radio-group
                      id="radio-group-status"
                      v-model="form.status"
                    >
                      <div class="d-flex">
                        <div class="mr-3">
                          <b-form-radio  name="some-radios" value="Aktif">Aktif</b-form-radio>
                        </div>
                        <div class="">
                          <b-form-radio name="some-radios" value="Tidak aktif">Tidak Aktif</b-form-radio>
                        </div>
                      </div>
                    </b-form-radio-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <div>
                <button
                  class="btn btn-light"
                  @click="handleBack"
                >
                  Kembali
                </button>
              </div>
              <div>
                <button
                  class="btn btn-danger mr-3"
                  @click="handleReset"
                >
                  Reset
                </button>
                <button
                  class="btn btn-success"
                  @click="handleSave"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <b-modal
      id="modalSuccessSave"
      data-cy="modal-information"
      hide-footer
      hide-header
    >
      <p
        class="text-center"
        :class="statusMessage? 'text-success': 'text-danger'"
      >
        {{ message }}</p>
    </b-modal>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import enviroment from "../service/enviroments/enviroment";
export default {
  name: "AddMember",
  components: {Footer, Header},
  data(){
    return{
      selected:{
        gender: 'Laki - laki',
        married: 'Menikah',
        status: 'Tidak aktif'
      },
      message:'',
      statusMessage:true,
      form:{
        nameMember:'',
        birthMember:'',
        email:'',
        address:'',
        npwp:'',
        addressNpwp:'',
        noReferal: '',
        nameReferal: '',
        codeOffice: '',
        addressOffice:'',
        province: '',
        cities: '',
        gender: 'Laki - laki',
        married: 'Menikah',
        status: 'Tidak aktif'
      }
    }
  },
  computed:{
    getProvince(){
      return this.$store.getters.getProvinceCollect
    },
    getCities() {
      return this.$store.getters.getCitiesCollect
    },
    loadingStatus(){
      return this.$store.state.loading
    },
    errorStatus(){
      return this.$store.state.error
    }
  },
  methods:{
    handleProvince(){
      this.$store.dispatch('getProvince')
    },
    handleCities(){
      this.$store.dispatch('getCities')
    },
    handleSave(){
      const payload = {
        'officeRegistrationId': enviroment.auth_office_id,
        "officeReferralId": enviroment.auth_office_id,
        'officeCategoryId':enviroment.user_category_member_id,
        'nameMember':this.form.nameMember,
        'birthMember':this.form.birthMember,
        'email':this.form.email,
        'address':this.form.address,
        'npwp':this.form.npwp,
        'addressNpwp':this.form.addressNpwp,
        'noReferal': this.form.noReferal,
        'nameReferal': this.form.nameReferal,
        'codeOffice': this.form.codeOffice,
        'addressOffice': this.form.addressOffice,
        'province': this.form.province,
        'cities': this.form.cities,
        'gender': this.form.gender,
        'married': this.form.married,
        'status': this.form.status,
      }
      this.$store.dispatch('createMember', payload)
        .then((resp)=>{
          this.statusMessage = true
          this.message = 'Berhasil create member'
          this.$bvModal.show('modalSuccessSave')
        })
        .catch((error)=>{
          this.statusMessage = false
          this.message = 'Gagal create member'
          this.$bvModal.show('modalSuccessSave')
        })


    },
    handleReset(){
      this.form.nameMember = ''
      this.form.birthMember = ''
      this.form.email = ''
      this.form.address = ''
      this.form.npwp = ''
      this.form.addressNpwp = ''
     this.form.noReferal = ''
     this.form.nameReferal = ''
     this.form.codeOffice = ''
     this.form.addressOffice = ''
     this.form.province = ''
     this.form.cities = ''
     this.form.gender = ''
     this.form.married = ''
     this.form.status = ''
    },
    handleBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.card-input{
  padding: 8px;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 6px;
}
.card-input span{
  padding-left: 8px;
}

.input-form{
 width: 100%;
 border: none;
  padding-left: 8px;
}
.input-form::placeholder{
  color: lightgrey;
}

.draft-style{
  background-color: #fef3c7;
  color: #c8996b;
  padding: 4px 14px;
  margin: 4px 2px;
  border-radius: 14px;
}
</style>
