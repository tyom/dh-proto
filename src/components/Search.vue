<template>
  <div class="search">
    <form @submit.prevent="handleSearch">
      <search-bar style="max-width: 800px" placeholder="e.g. example"></search-bar>
    </form>
    <nav class="search__results" v-if="results.length">
      <div class="search__results-summary">
        {{results.length}} companies found
      </div>
      <ul v-for="result in results" class="search__result-list">
        <li class="search__result-list-item">
          <router-link to="company">
            <h3 class="search__result-title">
              {{result.name}}
            </h3>
            <dl class="search__result-details">
              <dt class="u-visually-hidden">Region</dt>
              <dd>{{result.uk_region.name}}</dd>
              <dd>{{result.trading_address_town}}</dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue'

  export default {
    name: 'search',
    data () {
      return {
        results: [],
      }
    },
    methods: {
      handleSearch () {
        this.results = this.$store.state.search.companies
      }
    },
    components: {
      SearchBar,
    }
  }
</script>

<style lang="scss" scoped>
  * + .search {
    margin-top: 8px;
  }

  .search__results {
    margin: 20px 0 0;
  }

  .search__results-summary {
    margin-bottom: 20px;
    padding: 0 8px;
  }

  .search__result-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .search__result-list-item {
    font-size: 1.1em;
    border-top: 1px solid #bbb;
  }

  .search__result-list-item a {
    display: block;
    color: inherit;
    padding: 8px;
    text-decoration: none;

    &:hover {
      background-color: rgba(#fff, .4);
    }
  }

  .search__result-title {
    margin: 0;
  }

  .search__result-details {
    margin: 0;
    color: #777;

    dt,
    dd {
      margin: 0 8px 0 0;
      display: inline-block;
    }
  }
</style>
