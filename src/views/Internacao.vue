<template>
  <v-app>
    <h1>olá Internação teste</h1>
</v-app>
</template>

<script>
import axios from 'axios';
import AppHeaderBar from '../components/default/AppHeaderBar.vue';
import AppSideBar from '../components/default/AppSideBar.vue';

export default {
  components:[AppHeaderBar,AppSideBar],
  name: "Internacao",
  data(){
    return{

    }
  },
  created(){
    this.getUser()
  },

  methods:{
    async getUser( ){
      const res = await axios.get("http://localhost:3000/clinic/find-user")
      console.log("🚀 ~ getUser ~ res:", res)
    },
  },
  

}


</script>