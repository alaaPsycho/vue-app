<template>
  <div class="home">
  <!--<Card  v-for='car in 5'  :key='car' style='margin-bottom:100PX'/>--><!-- Or with loop-->
  <card v-for='job in  jobs' :key='job.id' :id='job.id' :src='job.src'  :name="job.name"/>

 <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li v-for='row in rows' :key='row.id' class="page-item"><a class="page-link" v-text='length()' href="#"></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

</div>
  
</template>
<script>
// @ is an alias to /src
import Card from '../components/Card'
export default {
  name: "Home",
  components: {
   Card
  },
    data(){
    return {
      jobs : [],
      rows : 1,

    }
  },
  created(){ // or mounted
    this.fetchData();
  },
  methods:{
 async fetchData(){
   let res = await fetch('job.json');
   let value = await res.json();
      this.jobs = value;
      this.rows = this.jobs.length
   console.log(value)
    },
    length (){
      for(let i =0;i <= this.jobs.length -1;i++){
        return i;
      }
    }
  }
};
</script>
<style scoped>
</style>