<template>
  <header class="main-header">
    <div class="container">
      <breadcrumbs :items="breadcrumbs"></breadcrumbs>
      <slot></slot>
    </div>
  </header>
</template>

<script>
  import {Global} from 'dit-vue'

  export default {
    components: {
      ...Global,
    },
    computed: {
      breadcrumbs() {
        const trail = this.$breadcrumbs.map(item => {
          const url = item.path === '' ? '/' : item.path
          return {
            title: item.meta.breadcrumb,
            url,
          }
        })
        if (trail.length === 1) {
          // remove url from current page
//          trail[trail.length-1].url = null
          trail.pop()
        }
        return trail
      }
    },
  }
</script>

<style lang="scss">
  $top-padding: 50px;

  .main-header {
    padding: $top-padding 0 30px;
    background-color: #dee0e2;
    margin-bottom: 30px;

    h1 {
      margin: 0;
      font-size: 2.2em;
    }

    .breadcrumbs {
      margin: ($top-padding - 90) 0 30px;
      border-bottom: 1px solid #bbb;
      padding-bottom: 10px;
    }
  }
</style>
