<template>
  <div id="app">
    <global-header>
      <h1>
        <router-link to="/" class="logo">
          DIT <span>Data Hub</span>
        </router-link>
        <phase-tag phase="alpha"></phase-tag>
      </h1>
      <template slot="nav">
        <router-link to="/" v-if="$store.state.isAuthenticated">Dashboard</router-link>
        <router-link to="/support">Support</router-link>
        <template v-if="$store.state.isAuthenticated">
          <router-link to="/user" class="nav__user">Alex</router-link>
          <router-link to="/logout" v-if="$store.state.isAuthenticated">Log out</router-link>
        </template>
        <router-link to="/login" v-else>Log in</router-link>
      </template>
    </global-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import {Global, Layout} from 'dit-vue'

  export default {
    components: {
      ...Global,
      ...Layout,
    },
  }
</script>

<style lang="scss">
  .nav__user {
    margin-left: 40px !important;

    &::before {
      border-left: 1px solid rgba(#fff, .5);
      content: "";
      position: relative;
      left: -20px;
    }
  }
</style>
