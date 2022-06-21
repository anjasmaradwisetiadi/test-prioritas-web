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
        <p>faris</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
</style>
