<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  /* Adds a type hinted prop with a default value */
  // @Prop({default: () => new User('', '')})
  // user!: User;
}
</script>
