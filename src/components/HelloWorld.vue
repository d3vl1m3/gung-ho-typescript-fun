<template>
  <div class="hello">
    <h1>{{ user }}</h1>
    <h2>{{ users.getItems() }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import User from '@/models/User'
import UserCollection from '@/models/UserCollection'

@Component
export default class HelloWorld extends Vue {
  @Prop({default: () => new User('', '')})
  user!: User;

  @Prop({default: () => {
    const items = new UserCollection();
    for(let i = 0; i <=5; i += 1 ) {
      items.addItem(new User('', ''));
    }
    return items;
  }})
  users!: UserCollection;
}
</script>
