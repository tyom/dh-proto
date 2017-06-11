<template>
  <div class="content" v-if="$store.state.isAuthenticated">
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>
    <main-header>
      <h1>Welcome, Alex!</h1>
    </main-header>
    <p>
      <dit-button @click.native="handleLogout">Log out</dit-button>
    </p>
  </div>
  <login v-else></login>
</template>

<script>
  import {Global, FormElements} from 'dit-vue'
  import Login from '../components/Login.vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    data() {
      return {
        breadcrumbs: [
          {url: '/', title: 'Dashboard'},
          {url: '/companies', title: 'Companies'},
        ]
      }
    },
    methods: {
      handleLogout() {
        this.$store.commit('authenticate', false)
      }
    },
    components: {
      ...Global,
      ...FormElements,
      Login,
      MainHeader,
    }
  }
</script>

<style>
  .breadcrumbs {
    margin: 10px 0;
  }
</style>
