<template>
  <div class="about">
    <h1>This is an about page</h1>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='../assets/ALAA.jpg' class="d-block w-100" alt=''/>
    </div>
    <div class="carousel-item">
      <img src='../assets/alaa1.jpg' class="d-block w-100" alt=''/>
    </div>
    <div class="carousel-item">
      <img src='../assets/alaa2.jpg' class="d-block w-100" alt=''/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  
  },
};
</script>
<style scoped>
.about{
  margin-top: 100PX;
}
#carouselExampleControls{
 width: 700PX;
 height: 400PX;
 margin: auto;
 border-radius: 16PX;
}
button{
  background: rgba(255, 255, 255, 0.2);
  color: red;
}
.carousel-control-prev,.carousel-control-next{
  color: black;
  background: blue;
  max-width: 50PX;
  height: 100PX;
}
img{
   max-width: 700PX;
 max-height: 650PX;
 object-fit: cover;

}
</style>