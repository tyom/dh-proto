<template>
  <header class="main-header">
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>
    <slot></slot>
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
        trail[trail.length-1].url = null // remove url from current page
        return trail
      }
    },
  }
</script>

<style lang="scss">
  .main-header {
    padding: 30px 0;
    border-bottom: 4px solid #ddd;

    h1 {
      margin: 0;
    }

    .breadcrumbs {
      margin: -20px 0 30px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
    }
  }
</style>
