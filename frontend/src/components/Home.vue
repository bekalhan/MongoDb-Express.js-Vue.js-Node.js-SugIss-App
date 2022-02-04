<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center">
                <headerwhite-app></headerwhite-app>
            </div>
        </div>
        <div>
            <side-app></side-app>
        </div>
        <!-- <div class="row">
            <div class="col-md-4 mt-3" id="div-one">
            </div>
            <div class="col-md-4 text-center mt-3" id="orta">
                <ul class="list-group text-center">
                    <li class="list-group-item" v-for="(sub,index) in subjects" :key="index">{{sub.subjectname}}
                        <br>
                        <a :href="`/subject/suggestion/${sub._id}`" class="text-center mt-1" style="text-decoration:none">suggestions</a>
                        <br>
                        <a :href="`/subject/issue/${sub._id}`"  class="text-center mt-1" style="text-decoration:none">issues</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 mt-3" id="div-three">
            </div>
        </div> -->
    </div>
</template>
<script>
import HeaderWhite from './HeaderWhite.vue'
import Side from '../components/Sidebar.vue'
import {mapState,mapActions} from 'vuex'
export default
{
  data() {
      return{
          subjects : [],

      }
  },
  components : 
  {
      "side-app":Side,
      "headerwhite-app":HeaderWhite
  },
   async mounted ()
  {
    this.subjects = await  this.fetchsubjects();    
  },
  methods : 
  {
      ...mapActions(['fetchsubjects'])
  }
}
</script>
<style >

</style>