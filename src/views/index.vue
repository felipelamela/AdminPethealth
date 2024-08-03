<template>
  <HelloWorld />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name:'Index',
  data() {
    return{
      drawer: true ,
      rail: true,
    }
  },
  computed: {
    ...mapState(['userAccess']),
  },
  methods: {
    ...mapMutations(['toggleDarkMode']),
    ...mapMutations(['AddUserAccess']),
  },
  mounted(){

    console.log(this.userAccess)
  }
}
</script>
