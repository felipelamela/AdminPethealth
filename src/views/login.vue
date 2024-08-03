<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 mt-12"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="login"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
        v-model="pass"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mb-5"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="loginUser"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios';
import {mapState, mapMutations } from 'vuex';

  export default {
    data: () => ({
      userLogin:{
        Login:'',
        Password:''
      },
      login:'',
      pass:'',
      visible: false,
    }),
    computed:{
    ...mapState(['userAccess']),
    },
    methods:{
      ...mapMutations(['AddUserAccess']),
      async loginUser(){
        this.userLogin.Login = this.login
        this.userLogin.Password = this.pass
        const {data} = await axios.post("http://localhost:3000/auth/login",this.userLogin)
        if(data.status){
          this.AddUserAccess(data.data.Login)
          this.$router.push('/')
        }
      },
    }
  }
</script>