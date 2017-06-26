<template>
  <div class="recent-activity">
    <h2 v-if="title">{{title}}</h2>

    <div class="panel-container">
      <div class="panel">
        <div class="panel__header">
          <h3 class="panel__title">Interactions</h3>
          <p class="panel__summary">{{total.interactions}} interactions from {{interactionsCompanies.length}} companies</p>
        </div>
        <ul>
          <li class="interactions__item" v-for="item in interactions">
            <router-link class="interactions__item-company" :to="`company/${item.company}`">
              {{item.company}}
            </router-link>
            <span class="interactions__item-subject"><strong>{{item.subject}}</strong></span>
          </li>
          <li class="interactions__item" v-if="!isInteractionsExpanded && total.interactions > 5">
            <a href="#" @click.prevent="isInteractionsExpanded = true">
              » Show {{total.interactions - interactions.length}} more
            </a>
          </li>
        </ul>
      </div>
      <div class="panel">
        <div class="panel__header">
          <h3 class="panel__title">Contacts</h3>
          <p class="panel__summary">{{total.contacts}} contacts from {{contactsCompanies.length}} companies</p>
        </div>
        <ul>
          <li class="interactions__item" v-for="item in contacts">
            <router-link class="interactions__item-company" :to="`company/${item.company}`">
              {{item.company}}
            </router-link>
            <span class="interactions__item-subject"><strong>{{item.subject}}</strong></span>
          </li>
          <li class="interactions__item" v-if="!isContactsExpanded && total.contacts > 5">
            <a href="#" @click.prevent="isContactsExpanded = true">
              » Show {{total.contacts - contacts.length}} more
            </a>
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
        total: {
          interactions: recentActivity.interactions.length,
          contacts: recentActivity.contacts.length,
        },
        isInteractionsExpanded: false,
        isContactsExpanded: false,
      }
    },
    computed: {
      interactions() {
        if (this.isInteractionsExpanded) {
          return recentActivity.interactions
        }
        return [...recentActivity.interactions].slice(0, this.truncationLength)
      },
      contacts() {
        if (this.isContactsExpanded) {
          return recentActivity.contacts
        }
        return [...recentActivity.contacts].slice(0, this.truncationLength)
      },
      interactionsCompanies() {
        return uniq(recentActivity.interactions.map(i => i.company))
      },
      contactsCompanies() {
        return uniq(recentActivity.contacts.map(i => i.company))
      }
    },
    props: {
      title: String,
      truncationLength: {
        type: Number,
        default: 5,
      },
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
