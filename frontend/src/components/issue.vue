<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-center">
            <header-white></header-white>
        </div>
    </div>
    <div class="row">
        <side-app></side-app>
    </div>
    <main id="main" class="main">
         <div class="pagetitle">
             <h1 class="text-center">Issues</h1>
             <hr>
         </div>
         <div class="card-body mt-2" v-for="(item,iss) in suggestions" :key="iss">
             <h5 class="card-title" style="margin-top:10px">
                 <strong id="name">{{item.personname}}</strong>
             </h5>
             <div class="ps-3">
                 {{item.findiss.contentsug}}
            </div>
         </div>
         <hr>
         <div class="card-body" style="margin-top:40px">
              <h5 class="card-title">
                  <h3 class="text-center">New Issue</h3>
              </h5>
              <div class="activity">
                  <form>
                      <div class="form-group">
                          <label for="exampleFormControlTextarea1">Your issue</label>
                            <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div class="text-center">                    
                            <button class="btn btn-success mt-3">New Issue</button>
                      </div>
                  </form>
              </div>

            </div>
         

    </main>  
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import HeaderWhite from './HeaderWhite.vue'
import Side from './Sidebar.vue'
import Home from '../components/Home.vue'
import Main from './Main.vue'
export default
{
    data ()
    {
         return {
             issues : [],
             subjectId : ''
         }
    },
    components : 
    {
        "header-white":HeaderWhite,
        "side-app":Side
    },
    async mounted ()
    {
        this.subjectId = this.$route.params.id;
        this.issues = await this.fetchissues(`http://localhost:3000/subject/issue/${this.subjectId}`);
    },
    methods : 
    {
        ...mapActions(['fetchissues'])
    }
}
</script>
<style>
.card-body
{
    background-color:white;
}
#name
{
    margin-top: 20px !important;
}
</style>