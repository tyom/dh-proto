<template>
  <article class="content">
    <main-header>
      <h1>Welcome, Alex!</h1>
      <dit-input
        name="search"
        placeholder="Search for company name or contact"
        autofocus
      ></dit-input>
    </main-header>
    <div class="container">
      <div class="last-few-days">
        <h2>In the last 15 days</h2>

        <div class="panel-container">
          <div class="panel">
            <div class="panel__header">
              <h3 class="panel__title">Interactions</h3>
              <p class="panel__summary">16 interactions with 7 companies</p>
            </div>
            <ul>
              <li class="interactions__item" v-for="int in showList(interactions, 5)">
                <span class="interactions__item-company">
                  <router-link to="company">{{int.company}}</router-link>
                </span>
                <span class="interactions__item-subject"><strong>{{int.subject}}</strong></span>
              </li>
              <li class="interactions__item" v-if="interactions.length > 5">
                <a href="#">» Show {{interactions.length - 5}} more</a>
              </li>
            </ul>
          </div>
          <div class="panel">
            <div class="panel__header">
              <h3 class="panel__title">Contacts</h3>
              <p class="panel__summary">22 contacts from 11 companies</p>
            </div>
            <ul>
              <li class="interactions__item" v-for="int in showList(interactions, 5)">
                <span class="interactions__item-company"><a href="#">{{int.company}}</a></span>
                <span class="interactions__item-subject"><strong>{{int.subject}}</strong></span>
              </li>
              <li class="interactions__item" v-if="interactions.length > 5">
                <a href="#">» Show {{interactions.length - 5}} more</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import {FormElements} from 'dit-vue'
  import MainHeader from '../components/MainHeader.vue'

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
    methods: {
      showList(list, truncate) {
        return [...list].slice(0, truncate)
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

  input {
    margin-top: 10px;
  }

  h2 {
    color: #888;
    font-size: 1.4em;
    font-weight: 500;
    margin: 30px 0;
  }

  .panel-container {
    @include media('>phone') {
      display: flex;
    }
  }

  .panel {
    border-top: 5px solid #555;
    flex: 1;

    @include media('>phone') {
      &:nth-child(odd) {
        margin-right: 40px;
      }
    }

    .panel__header {
      padding: 10px;
    }

    .panel__title {
      margin: 0;
      padding:  0;
      font-size: 1.5em;
    }

    .panel__summary {
      margin: 0;
      color: #999;
      font-size: .9em;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .interactions__item {
    padding: 10px;
    border-top: 1px solid #ddd;
  }
</style>
