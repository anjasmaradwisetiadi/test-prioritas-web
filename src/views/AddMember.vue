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
              <div>
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
                      type="text"
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
                  <div class="d-flex">
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="radio" name="gridMale" id="male" value="male">
                      <label class="form-check-label" for="male">
                        Laki - laki
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridFemale" id="female" value="female">
                      <label class="form-check-label" for="female">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start text-left mt-3">
              <div class="col">
                <div class="">
                  <div>
                    <span class="font-weight-bold">Status Pernikahan</span>
                  </div>
                  <div class="d-flex">
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="radio" name="gridMarried" id="married" value="married">
                      <label class="form-check-label" for="married">
                        Menikah
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridunMarried" id="unMarried" value="unMarried">
                      <label class="form-check-label" for="unMarried">
                        Belum Menikah
                      </label>
                    </div>
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
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="radio" name="gridActive" id="active" value="actived">
                      <label class="form-check-label" for="active">
                        Aktif
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridunActived" id="unActived" value="unActived">
                      <label class="form-check-label" for="unActived">
                        Tidak Aktif
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <div>
                <button class="btn btn-light">
                  Kembali
                </button>
              </div>
              <div>
                <button
                  class="btn btn-danger mr-3"
                >
                  Reset
                </button>
                <button class="btn btn-success">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "AddMember",
  components: {Footer, Header}
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
</style>
