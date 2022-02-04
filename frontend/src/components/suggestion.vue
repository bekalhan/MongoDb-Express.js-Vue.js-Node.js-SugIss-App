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
             <h1 class="text-center">Suggestions</h1>
             <hr>
         </div>
         <div class="card-body mt-2" v-for="(item,sug) in suggestions" :key="sug">
             <h5 class="card-title" style="margin-top:10px">
                 <strong id="name">{{item.personname}}</strong>
             </h5>
             <div class="ps-3">
                 {{item.findsug.contentsug}}
            </div>
         </div>
         <hr>
         <div class="card-body" style="margin-top:40px">
              <h5 class="card-title">
                  <h3 class="text-center">New Suggestion</h3>
              </h5>
              <div class="activity">
                  <form>
                      <div class="form-group">
                          <label for="exampleFormControlTextarea1">Your suggestion</label>
                            <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div class="text-center">                    
                            <button class="btn btn-success mt-3">New Suggestion</button>
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
             suggestions : [],
            personname : '',
             subjectId : '',
             deneme : ''
         }
    },
    components :
    {
        "header-white" : HeaderWhite,
        "home-app":Home,
        "side-app":Side,
        Main
    },
    async mounted ()
    {
        this.subjectId = this.$route.params.id;
        this.suggestions = await this.fetchsuggestions(`http://localhost:3000/subject/suggestion/${this.subjectId}`);
    },
    methods : 
    {
        ...mapActions(['fetchsuggestions'])
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