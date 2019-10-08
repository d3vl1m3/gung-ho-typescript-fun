import { InputType } from '@/classes/enums/ElementAttributes'
import { Sex } from '@/enum/Sex'
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DbSeeder from '@/classes/seeders/DbSeeder';
  import UserEntity from '@/classes/entities/UserEntity';
  import {Item} from '@vuex-orm/core/lib/data';

  /* Additional components must be handled outside of the component instance */
  @Component({})

  export default class App extends Vue {
    protected users: Array<Item<UserEntity>> = [];
    public mounted() {
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
