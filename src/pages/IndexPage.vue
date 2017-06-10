<template>
  <div class="page">
    <div class="page" v-if="$store.state.isAuthenticated">
      <h1>Welcome!</h1>
    </div>
    <login v-else></login>
  </div>
</template>

<script>
  import Login from '../components/Login.vue'

  export default {
    components: {
      Login,
    }
  }
</script>
