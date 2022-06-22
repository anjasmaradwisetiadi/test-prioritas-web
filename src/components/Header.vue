<template>
  <div class="Header py-3 px-5 ">
    <div class="row">
      <div class="col-2">
        <h5>
          Logo
        </h5>
      </div>
      <div class="col-8 justify-content-center">
        <div class="d-flex justify-content-center">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link">Dashboard</a>
            </li>
            <li class="nav-item active-link">
              <a class="nav-link">Member</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <div class="d-flex align-items-center">
          <div class="mr-3">
            <b-form-checkbox v-model="switchOne" name="check-button" switch size="lg">
            </b-form-checkbox>
          </div>
          <div class="mr-3">
            <img
              class="image-rounded"
              :src="require('../assets/image/face1.jpg')" alt="">
          </div>
          <div class="mr-3">
            <div><b>Farras</b></div>
            <div class="text-muted mt-1">Admin</div>
          </div>
          <div >
            <p class="h4 font-weight-bold">
              <b-icon icon="chevron-down" class="mr-5"></b-icon>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      switchOne: false
    }
  }
}
</script>

<style scoped>
.Header{
  background-color: white;

}
.nav-link{
  color: #16a34a;
  padding-left: 10px;
  cursor: pointer;
}
.active-link{
  font-weight: bold;
}

.active-link::after{
  display: block;
  content: '';
  border-bottom: 2px #16a34a solid;
  width: 90%;
  align-items: center;
}

.image-rounded{
  width: 46px;
  height: 46px;
  border-radius: 50%;
}
</style>
