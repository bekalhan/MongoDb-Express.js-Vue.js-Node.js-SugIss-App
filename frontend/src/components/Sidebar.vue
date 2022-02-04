<template>
<div>
    <aside id="sidebar" class="sidebar">
  <ul class="sidebar-nav" id="sidebar-nav" v-for="(sub,index) in subjects" :key="index">
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>{{sub.subjectname}}</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a :href="`/subject/suggestion/${sub._id}`">
              <i class="bi bi-circle"></i><span>Suggestions</span>
            </a>
          </li>
          <li>
            <a :href="`/subject/issue/${sub._id}`">
              <i class="bi bi-circle"></i><span>Issues</span>
            </a>
          </li>   
        </ul>
      </li>
  </ul>
  </aside>
</div>    
</template>
<script>
import Side from '../components/Sidebar.vue'
import {mapState,mapActions} from 'vuex'
export default
{
  data() {
      return{
          subjects : [],

      }
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
<style>
</style>