<template>
  <article class="content">
    <main-header>
      <h1>{{title}}</h1>
    </main-header>
    <div class="container">

    </div>
  </article>
</template>

<script>
  import {FormElements} from 'dit-vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    data() {
      return {
        title: this.$route.params.name
      }
    },
    components: {
      MainHeader,
      ...FormElements,
    },
  }
</script>

<style lang="scss" scoped>
  @import "~dit-vue/src/components/tools";

</style>
