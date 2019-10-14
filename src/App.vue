<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form ref="form" v-on:submit.prevent="submitForm">
      <div>
        <label>
          Author:
          <select name="author">
            <option v-for="author in getAuthors" :value="author.id">{{ author.name }}</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Title: <input type="text" name="title">
        </label>
      </div>
      <div>
        <label>
          Body: <textarea type="text" name="body"></textarea>
        </label>
      </div>
      <div>
        <button type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DbSeeder from '@/classes/seeders/DbSeeder';
import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import {Item} from '@vuex-orm/core/lib/data';
import UserEntity from '@/classes/entities/UserEntity';
import Post from '@/classes/models/Post';
import FormDataPostModelPropsFactory from '@/classes/factories/models/FormDataPostModelPropsFactory';
import PostEntity from '@/classes/entities/PostEntity';
import PostEntityFactory from '@/classes/factories/entities/PostEntityFactory';

/* Additional components must be handled outside of the component instance */
@Component({})

export default class App extends Vue {
  protected items: Array<Item<EntityAbstract>> = [];

  public created() {
    DbSeeder.init();
  }

  get getAuthors() {
    return UserEntity.query().get();
  }

  protected submitForm() {
    const form = this.$refs.form as HTMLFormElement;

    const postProps = new FormDataPostModelPropsFactory({form}).props;

    if ( postProps ) {
      const post = new Post(postProps);
      const postEntities = new PostEntityFactory(post).items;
      PostEntity.insert({data: postEntities});
    }


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
