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
                    v-model="selected.gender"
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
                    v-model="selected.married"
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
                    <span class="font-weight-bold">Nama member</span>
                  </div>
                  <div>
                    <input
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
                      class="input-form"
                      type="text"
                      placeholder="Masukan tanggal lahir"
                    >
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
                      v-model="selected.status"
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
                  @click="handleCancel"
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
      <p>Berhasil Save</p>
    </b-modal>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "AddMember",
  components: {Footer, Header},
  data(){
    return{
      selected:{
        gender: 'Laki - laki',
        married: 'Menikah',
        status: 'Tidak aktif'
      }
    }
  },
  methods:{
    handleSave(){
      console.log('handle Save')
      console.log(this.selected)
      this.$bvModal.show('modalSuccessSave')
    },
    handleCancel(){
      console.log('handle Cancel')
    },
    handleBack(){
      console.log('handle Back')
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
