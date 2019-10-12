<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div ref="elems"></div>
    <pre>
      {{ items }}
    </pre>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Item} from '@vuex-orm/core/lib/data';
import DbSeeder from '@/classes/seeders/DbSeeder';
import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import User from '@/classes/models/User'

/* Additional components must be handled outside of the component instance */
@Component({})

export default class App extends Vue {
  protected items: Array<Item<EntityAbstract>> = [];
  public mounted() {
    DbSeeder.init();
    new User({})
  }
}
</script>

<style lang="scss">
  pre {
    max-width: 100%;
    overflow-x: scroll;
    text-align: left;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
