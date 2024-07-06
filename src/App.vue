<template>
  <v-app>
      <VLayout class="rounded rounded-md">
      <AppSideBar></AppSideBar>
        <div>
          <v-main>
            <router-view key="/dashboard"/>
          </v-main>
        </div>
    </VLayout>

  </v-app>
</template>

<script lang="ts">
export default{
  name: "App",
  mounted(){
    console.log(this.$router.path)
  }
}
</script>
