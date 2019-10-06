import { Sex } from '@/enum/Sex'
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from './components/HelloWorld.vue';
  import CharacterEntity from '@/entities/CharacterEntity';
  import Character from '@/models/Character';
  import {Sex} from '@/enum/Sex';
  import CharacterCollection from '@/models/CharacterCollection';
  import CharacterEntityFactory from '@/factories/CharacterEntityFactory';

  /* Additional components must be handled outside of the component instance */
  @Component({
    components: {
      HelloWorld,
    },
    created() {
      const characters = new CharacterCollection([
        new Character('Liam', new Date('1988/10/06 GMT') , Sex.MALE),
        new Character('Beth', new Date('1991/03/23 GMT') , Sex.FEMALE),
        new Character('Tara', new Date('1995/12/12 GMT') , Sex.FEMALE),
        new Character('Frank', new Date('2998/01/01 GMT') , Sex.MALE),
      ]);

      CharacterEntity.insert({
        data: new CharacterEntityFactory(characters).items,
      });
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
