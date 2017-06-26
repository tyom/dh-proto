<template>
  <div class="recent-activity">
    <h2 v-if="title">{{title}}</h2>

    <div class="panel-container">
      <div class="panel">
        <div class="panel__header">
          <h3 class="panel__title">Interactions</h3>
          <p class="panel__summary">{{interactions.length}} interactions from {{interactionsCompanies.length}} companies</p>
        </div>
        <ul>
          <li class="interactions__item" v-for="int in interactionsTruncated">
            <span class="interactions__item-company">
              <router-link to="company">{{int.company}}</router-link>
            </span>
            <span class="interactions__item-subject"><strong>{{int.subject}}</strong></span>
          </li>
          <li class="interactions__item" v-if="interactions.length > 5">
            <a href="#">» Show {{interactions.length - interactionsTruncated.length}} more</a>
          </li>
        </ul>
      </div>
      <div class="panel">
        <div class="panel__header">
          <h3 class="panel__title">Contacts</h3>
          <p class="panel__summary">{{contacts.length}} contacts from {{contactsCompanies.length}} companies</p>
        </div>
        <ul>
          <li class="interactions__item" v-for="int in contactsTruncated">
            <span class="interactions__item-company"><a href="#">{{int.company}}</a></span>
            <span class="interactions__item-subject"><strong>{{int.subject}}</strong></span>
          </li>
          <li class="interactions__item" v-if="interactions.length > 5">
            <a href="#">» Show {{contacts.length - contactsTruncated.length}} more</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import recentActivity from '../../api/recent-activity'
  import {uniq} from 'lodash'

  export default {
    name: 'recent-activity',
    data() {
      return {
        interactions: recentActivity.interactions,
        interactionsTruncated: this.truncateList(recentActivity.interactions, 5),
        contacts: recentActivity.contacts,
        contactsTruncated: this.truncateList(recentActivity.contacts, 5),
      }
    },
    computed: {
      interactionsCompanies() {
        return uniq(this.interactions.map(i => i.company))
      },
      contactsCompanies() {
        return uniq(this.contacts.map(i => i.company))
      }
    },
    methods: {
      truncateList(list, truncate) {
        return [...list].slice(0, truncate)
      }
    },
    props: {
      title: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "~dit-vue/src/components/tools";

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
