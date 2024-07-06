<template>
  <v-app>
    <h1>olá mundo</h1>
</v-app>
</template>

<script>
import AppHeaderBar from '../components/default/AppHeaderBar.vue';
import AppSideBar from '../components/default/AppSideBar.vue';

export default {
  name: "Dashboard",
  components:[AppHeaderBar,AppSideBar]
}
</script>