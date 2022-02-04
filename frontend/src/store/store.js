import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

// const Mutations = 
// {
//     INCREMENT = 'INCREMENT', 
//     DECREMENT = 'DECREMENT'
// }

export const store = new Vuex.Store({
    state :
    {
        counter : 3,
    },
    mutations : 
    {
        INCREMENT (state)
        {
            state.counter ++;
        },
        DECREMENT (state)
        {
            state.counter --;
        },
    },
    actions : 
    {
        increment ({commit})
        {
            commit('INCREMENT');
        },
        decrement ({commit})
        {
            commit('DECREMENT')
        },
        async fetchsubjects ()
        {
            const request = await axios.get('http://localhost:3000/subject');
            return request.data;
        },
        async fetchsuggestions (ctx,path)
        {
            const request = await axios.get(path);
            return request.data;        
        },
        async fetchissues (ctx,path)
        {
            console.log("gtti");
            console.log(path)
            const request = await axios.get(path);
            return request.data;
        },
        async personwhowrite (ctx,path)
        {
            console.log(path);
        }
        
    }

})