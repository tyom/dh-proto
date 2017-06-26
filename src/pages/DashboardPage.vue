<template>
  <article class="content">
    <main-header>
      <h1>Search companies and contacts</h1>
      <search></search>
    </main-header>
    <div class="container">
      <recent-activity></recent-activity>
    </div>
  </article>
</template>

<script>
  import {FormElements} from 'dit-vue'
  import MainHeader from '../components/MainHeader.vue'
  import Search from '../components/Search.vue'
  import RecentActivity from '../components/RecentActivity.vue'

  export default {
    data() {
      return {
        interactions: [
          {
            subject: 'Subject line',
            company: 'Samsung',
          },
          {
            subject: 'Lorem line',
            company: 'AT&T',
          },
        ]
      }
    },
    components: {
      MainHeader,
      Search,
      RecentActivity,
      ...FormElements,
    },
  }
</script>
