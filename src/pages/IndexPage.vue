<template>
  <div class="content" v-if="$store.state.isAuthenticated">
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>
    <main-header>
      <h1>Welcome, Alex!</h1>
    </main-header>
  </div>
  <login v-else></login>
</template>

<script>
  import {Global} from 'dit-vue'
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
    components: {
      ...Global,
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
