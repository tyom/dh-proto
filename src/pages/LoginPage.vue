<template>
  <div class="login">
    <h2 class="login__heading">Log in</h2>
    <ul class="errors" v-if="errors.length">
      <li v-for="error in errors">{{error}}</li>
    </ul>
    <form class="login__body" @submit.prevent="handleLogin">
      <form-group label="Email" hint="Any email">
        <dit-input name="login" autofocus v-model="login"/>
      </form-group>
      <form-group label="Password" hint="Try 'password'">
        <dit-input name="password" type="password" v-model="password"/>
      </form-group>
      <dit-button variant="primary">Submit</dit-button>
    </form>
  </div>
</template>

<script>
  import {FormElements} from 'dit-vue'

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
  .login {
    max-width: 40em;
    margin: 50px auto;
  }

  .login__heading {
    font-size: 2em;
    margin: 0;
  }

  .errors {
    border: 4px solid #9a1e20;
    background-color: lighten(#9a1e20, 60);
    list-style: none;
    padding: 20px;
    margin: 20px 0;
  }
</style>
