<template>
  <article class="content">
    <main-header>
      <h1>Report a problem or leave feedback</h1>
    </main-header>

    <form class="container">
      <form-group label="Subject" hint="A brief summary of your feedback/problem">
        <dit-input></dit-input>
      </form-group>
      <form-group label="Description" hint="If you were having a problem, explain what you did, what happened and what you expected to happen. If you want to provide feedback or a suggestion, describe it here">
        <dit-textarea></dit-textarea>
      </form-group>
      <form-group label="Email" hint="If you wish to be contacted, please provide your email address">
        <dit-input></dit-input>
      </form-group>
      <fieldset-group variant="plain" legend="Feedback type">
        <radio-button value="bug" label="Bug report" name="feedbackType" inline/>
        <radio-button value="other" label="Other" name="feedbackType" inline/>
      </fieldset-group>
      <p>
        <dit-button variant="primary">Send</dit-button>
      </p>
    </form>
  </article>
</template>

<script>
  import {FormElements} from 'dit-vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    components: {
      ...FormElements,
      MainHeader,
    },
  }
</script>
