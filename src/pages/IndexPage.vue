<template>
  <div class="content" v-if="$store.state.isAuthenticated">
    <main-header>
      <h1>Welcome, Alex!</h1>
    </main-header>
  </div>
  <login v-else></login>
</template>

<script>
  import Login from '../components/Login.vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    components: {
      Login,
      MainHeader,
    }
  }
</script>
