<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div ref="elems"></div>
    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import UserEntity from '@/classes/entities/UserEntity';
import {Item} from '@vuex-orm/core/lib/data';
import Duck from '@/classes/mixin-example/duck'
import DbSeeder from '@/classes/seeders/DbSeeder'

/* Additional components must be handled outside of the component instance */
@Component({})

export default class App extends Vue {
  protected users: Array<Item<UserEntity>> = [];
  public mounted() {
    // example of a mixin/trait infused class in action
    const duck  = new Duck({sound: 'puiock'});
    console.log(duck.hasQuacked);
    console.log(duck.talk());
    console.log(duck.hasQuacked);

    DbSeeder.init();
    this.users = UserEntity.query().with('posts').get();
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
