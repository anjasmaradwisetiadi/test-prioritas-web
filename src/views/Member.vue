<template>
  <div class="member">
    <Header></Header>
    <div class="contain contain-bg">
      <div class="container pt-5 pb-5">
        <div class="header d-flex justify-content-between">
          <h2 class="font-weight-bold">
            Master Member
          </h2>
          <button class="btn btn-primary">
            Tambah Member
          </button>
        </div>
        <div class="mt-2 mb-2">
          <table class="table table-hover bg-table text-left">
            <thead class="bg-thead none-border">
              <tr class="none-border border-radius-thead">
                <th scope="col" >Tipe Member</th>
                <th scope="col" >Kode Member</th>
                <th scope="col" colspan="2">Nama Member</th>
                <th scope="col" colspan="2">Alamat</th>
                <th scope="col" >Telp</th>
                <th scope="col" >Status</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row" colspan="1">1</th>
              <td colspan="1">Markddddddddddddddddddddddddd</td>
              <td colspan="2">Otto</td>
              <td colspan="2">Mark</td>
              <td colspan="1">Ottoyok</td>
              <td colspan="1">@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td colspan="2">Otto</td>
              <td colspan="2">Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <div class="d-flex mt-2 justify-content-between">
          <div>
            <span>Menampilkan <b>1</b> to <b>5</b> of <b>97</b> results</span>
          </div>
          <div>
            pagination
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
import '../assets/css/common.css'
export default {
  name: "Member",
  components: {Footer, Header}
}
</script>

<style scoped>

.border-radius-thead{
  border-radius: 14px;
}

.bg-table{
  background-color: white;
  border-radius: 14px;
}

.bg-thead{
  border: none;
  border-top-left-radius: 14px;
  background-color: #f9fafb;
}
.table > :not(:first-child) {
  border-top: 2px solid currentColor;
}

/*.bg-table:after{
  content: '';
  display: block;
  padding-top: 10px;
  width: 100%;
  border-bottom: 1px black solid;
}*/
</style>
