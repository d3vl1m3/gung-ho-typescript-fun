import { Sex } from '@/enum/Sex'
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DbSeeder from '@/classes/seeders/DbSeeder';

  /* Additional components must be handled outside of the component instance */
  @Component({
    created() {
      DbSeeder.init();
    },
  })

  export default class App extends Vue {}
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
