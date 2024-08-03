<template>
  <!-- <v-app :theme="isDarkMode? 'light':'dark'"> -->
    <v-app theme="light">
      <VLayout class="rounded rounded-md">
        <AppSideBar></AppSideBar>
        <v-main>
          <router-view :route="$router.path" />
        </v-main>
      </VLayout>

    </v-app>
</template>

<script >
import { mapState, mapMutations } from 'vuex';

export default{
  name: "App",
  computed: {
    ...mapState(['userAccess']),
  },
  methods: {
    ...mapMutations(['toggleDarkMode']),
    ...mapMutations(['AddUserAccess']),
  },
  created(){
    if(Object.keys(this.userAccess).length == 0){
      this.$router.push('/login')
    }
  }
}
</script>
