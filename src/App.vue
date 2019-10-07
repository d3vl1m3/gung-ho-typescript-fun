import { Sex } from '@/enum/Sex'
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <pre style="text-align: left; max-width: 700px; margin: 0 auto;">
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

    public created() {
      DbSeeder.init();
      this.users = UserEntity.query().with('posts').get();
    }

  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
