<template>
  <div class="block">
    <h2 class="block__heading">Log in</h2>
    <div class="block__body">
      <form-group label="Email">
        <dit-input name="login" autofocus/>
      </form-group>
      <form-group label="Password">
        <dit-input name="password" type="password"/>
      </form-group>
    </div>
    <div class="block__footer">
      <dit-button variant="primary">Submit</dit-button>
    </div>
  </div>
</template>

<script>
  import {FormElements} from 'dit-vue'

  export default {
    name: 'login',
    components: {
      ...FormElements,
    }
  }
</script>

<style lang="scss">
  .block {
    max-width: 40em;
    padding: 20px;
    margin: 80px auto;
  }

  .block__heading {
    font-size: 2em;
    margin: 0;
  }

  .block__footer {

  }
</style>
