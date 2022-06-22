<template>
  <div class="member">
    <Header></Header>
    <div class="contain contain-bg">
      <div class="container pt-5 pb-5">
        <div class="header d-flex justify-content-between">
          <h2 class="font-weight-bold">
            Master Member
          </h2>
          <button
            @click="addMember"
            class="btn btn-primary">
            Tambah Member
          </button>
        </div>
        <div class="mt-2 mb-2">
          <div v-if="loadingStatus">
            Loading....
          </div>
          <div v-else-if="errorStatus && !loadingStatus">
            Something wrong
          </div>
          <div v-else-if="!errorStatus && !loadingStatus">
            <table class="table table-hover bg-table text-left">
              <thead class="bg-thead none-border">
              <tr class="none-border border-radius-thead">
                <th scope="col" width="20%">Tipe Member</th>
                <th scope="col" width="20%">Kode Member</th>
                <th scope="col" width="20%">Nama Member</th>
                <th scope="col" width="30%">Alamat</th>
                <th scope="col" width="20%">Telp</th>
                <th scope="col" width="10%">Status</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="(item,index) in memberData"
                :key="index"
              >
                <td width="20%" >{{ item.attributes.office_type}}</td>
                <td width="20%">{{ item.attributes.code }}</td>
                <td width="20%">{{ item.attributes.name }}</td>
                <td width="30%">{{ item.attributes.address }}</td>
                <td width="20%">{{ item.attributes.phone}}</td>
                <td class="d-flex"  width="10%">
                <span class="h4">
                  <b-icon icon="eye" class="mr-2"></b-icon>
                </span>
                  <span class="h4">
                  <b-icon icon="trash"></b-icon>
                </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
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
  components: {Footer, Header},

  computed:{
    memberData(){
      return this.$store.getters.getMemberCollect
    },
    loadingStatus(){
      return this.$store.state.loading
    },
    errorStatus(){
      return this.$store.state.error
    }
  },
  mounted() {
    this.$store.dispatch('getOffice','Member')
  },
  methods:{
    addMember(){
      this.$router.push('/add-member')
    }
  }
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
