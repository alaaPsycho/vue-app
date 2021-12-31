<template>
    <div>
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <ul>
      <router-link to="/">home</router-link>
      <router-link to="/"></router-link>
      <router-link to="/about">about</router-link>
        </ul>
  <form class="form-inline">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
      <input @keydown ="search()" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

</nav>
    </div>
</template>

<script>
    export default {
        name:'nav',
     
        methods:{
            search(v){
                let inp = document.querySelector('input');
                inp.addEventListener('keypress',query);
                v.preventdefault();

            },
        }
    }
</script>

<style lang="scss" scoped>
nav{
    position: relative;
    top: -30PX;
}
ul > *{
    margin-left: 10PX;
}
</style>