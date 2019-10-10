import { InputType } from '@/classes/enums/ElementAttributes'
import { InputType } from '@/classes/enums/ElementAttributes'
import { Sex } from '@/enum/Sex'
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
import {MyApp} from '@/classes/test';

/* Additional components must be handled outside of the component instance */
@Component({})

export default class App extends Vue {
  protected users: Array<Item<UserEntity>> = [];
  public mounted() {

    new MyApp().manageDuck();
    // DbSeeder.init();
    // this.users = UserEntity.query().with('posts').get();
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
