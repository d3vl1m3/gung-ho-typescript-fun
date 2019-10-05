<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :users="users"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from './components/HelloWorld.vue';
  import UserCollection from '@/models/UserCollection'
  import User from '@/models/User'

  /* Additional components must be handled outside of the component instance */
  @Component({
    components: {
      HelloWorld,
    }
  })

  export default class App extends Vue {
    /* 'data' property */
    users:UserCollection = this.getItems;

    /* 'get' turns a standard method in to computed property */
    get getItems() {
      return new UserCollection([
        new User('1', 'A'),
        new User('2', 'B'),
        new User('3', 'C'),
        new User('4', 'D'),
      ])
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
