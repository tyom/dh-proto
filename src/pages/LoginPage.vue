<template>
  <article class="content">
    <main-header>
      <h1>Log in</h1>
    </main-header>

    <form class="container" @submit.prevent="handleLogin">
      <ul class="errors" v-if="errors.length">
        <li v-for="error in errors">{{error}}</li>
      </ul>
      <form-group label="Email" hint="Any email">
        <dit-input name="login" autofocus v-model="login"/>
      </form-group>
      <form-group label="Password" hint="Try 'password'">
        <dit-input name="password" type="password" v-model="password"/>
      </form-group>
      <dit-button variant="primary">Submit</dit-button>
    </form>
  </article>
</template>

<script>
  import {FormElements} from 'dit-vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    name: 'login',
    data() {
      return {
        login: '',
        password: '',
        errors: [],
      }
    },
    components: {
      ...FormElements,
      MainHeader,
    },
    methods: {
      handleLogin() {
        const isAuthenticated = this.password === 'password'

        if (isAuthenticated) {
          this.$store.commit('authenticate', true)
          this.$router.push('/')
        } else {
          this.errors = [
            'Your email or password is incorrect. Most likely password.'
          ]
        }

      },
    }
  }
</script>

<style lang="scss">
  .errors {
    border: 4px solid #9a1e20;
    background-color: lighten(#9a1e20, 60);
    list-style: none;
    padding: 20px;
    margin: 20px 0;
  }
</style>
