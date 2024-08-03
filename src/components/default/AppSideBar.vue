<template>
  <VNavigationDrawer  v-if="Object.keys(userAccess).length > 0" v-model="drawer" >
        <v-list class="mt-10" density="compact" nav>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-home-city" title="Home" @click="push('/')" value="home"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-view-dashboard" title="Dashboard" @click="push('/dashboard')" value="home1"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-hospital-building" title="Internação" @click="push('/internacao')" value="login"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-calendar-arrow-right" title="Agendamento" @click="push('/schedule')" value="login1"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-history" title="Historico" @click="push('/history')" value="login2"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-account-group-outline" title="Colaborador" @click="push('/worker')" value="users"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-chart-box" title="Contabilidade" @click="push('/cont')" value="users1"></v-list-item>
          <v-list-item class="pt-3 pb-3" prepend-icon="mdi-exit-to-app" title="Logoff" @click="logoff()" value=""></v-list-item>
        </v-list>
  </VNavigationDrawer>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name:'AppSideBar',
  data() {
    return{
      userLog: true,
      drawer: true ,
      rail: true,
    }
  },
    computed: {
    ...mapState(['userAccess']),
  },
  methods:{
    ...mapMutations(['RemoveUserAccess']),
    push(router){
      this.$router.push(router)
    },
    logoff(){
      this.RemoveUserAccess()
      this.$router.push('/login')
    }
  }
}
</script>