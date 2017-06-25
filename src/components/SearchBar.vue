<template>
  <div class="search-bar">
    <dit-input
      name="search"
      class="search-bar__input"
      autofocus
      :placeholder="placeholder"
    ></dit-input>
    <button class="search-bar__button">Search</button>
  </div>
</template>

<script>
  import {FormElements} from 'dit-vue'

  export default {
    name: 'search-input',
    props: {
      placeholder: String,
    },
    components: {
      ...FormElements,
    },
  }
</script>

<style lang="scss">
  @import "~dit-vue/dist/settings";
  @import "~dit-vue/dist/tools";

  @function calculateInputSize($search-button-size: 1em, $is-negative: false) {
    $padding-and-border: 16px + 4px;
    $modifier: if($is-negative, -1, 1);
    @return unquote("calc(#{$search-button-size} + #{$padding-and-border} / #{$modifier})");
  }

  $input-size: 1.2em;
  $search-button-width: calculateInputSize($input-size);

  .search-bar {
    position: relative;
    font-size: $input-size;

    * + & {
      margin-top: 8px;
    }
  }

  .search-bar__input {
    padding-right: calculateInputSize($input-size + .2em);
  }

  .search-bar__button {
    @include hide-text($search-button-width);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 0;
    padding: 0;
    font-size: inherit;
    cursor: pointer;
    background: $govuk-blue url(../../images/search-button.png) no-repeat 100% 50%;
    background-size: auto $search-button-width;

    &:focus {
      outline: 2px solid $outline-colour;
    }

    &:active {
      background-color: darken($govuk-blue, 10);
    }
  }
</style>
