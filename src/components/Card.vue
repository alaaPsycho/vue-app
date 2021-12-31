<template>
    <div class="parent">
     <div class="container margin-left 50">
  <div class="row align-baseline">
    <div class="col">
      <div class="card-group">
        <div class="card">
        </div>
        </div>
    <img  class="card-img-top " :src='src' alt="Card image cap">
    
    <div class="card-body">
      <button  class="btn btn-primary mb-3  btn-lg btn-block">Aply</button>
      <h5  class="card-title">{{name}}</h5>
       <h3>{{id}}</h3>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </div>
    
  </div>

    </div>
</template>

<script>
    export default {
        name :'Card',
        props:['name','id','src']
    }
</script>

<style  scoped>
.container{
  top: -200PX;
  display: block;
  position: relative;
  left: 60%;
  transform: translateX(-50%);
  margin :400PX 0;
}
.align-baseline{
width: 500PX;
height: 500PX;
}
.card-body,.card-footer{
  background: #DDD;
}
</style>