<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from './components/HelloWorld.vue';
  import Posts from '@/models/Posts';
  import Users from '@/models/Users';

  /* Additional components must be handled outside of the component instance */
  @Component({
    components: {
      HelloWorld,
    },
  })

  export default class App extends Vue {
    /* 'data' property */
    // users:UserCollection = this.getItems;

    /* 'get' turns a standard method in to computed property */
    // get getItems() {
    //   //...
    // }
    public created() {
      // Assuming this data structure is the response from the API backend.
      const authorJohn = {
        id: 8,
        name: 'John Doe',
        email: 'john@example.com',
      };
      const posts = [
        {
          id: 2,
          title: 'Hello, world!',
          body: 'Some awesome body...',
          author: authorJohn,
        },
        {
          id: 3,
          title: 'Goodbye, moon!',
          body: 'Some mediocre text...',
          author: authorJohn,
          published: true,
        },
      ];

      Posts.insert({ data: posts });

      let user: Users[];

      user = Users.query().with('posts', (query) => {
        query.where('published', true);
      }).get();
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
