<script setup lang="ts">

/**
 * Emitted when the foo property is changed.
 */
type MyEventsFoo = /** Emitted when the foo property is changed. */ 'foo';
interface MyEvents {
  (event: MyEventsFoo, data?: { foo: string }): void;
  (event: 'bar', value: { year: number; title?: any }): void;
  (e: 'baz'): void;
}

const emit = defineEmits<MyEvents>();
</script>
<template>
  <div>
    foo:
    <button @click="emit('bar', { year: 2023, title: 'Storybook' })">
      event: 'bar', value: {year: 2023, title:'Storybook' }
    </button>
  </div>
  <div>bar:
    <button @click="emit('baz')">event: 'baz'</button>
  </div>
  <div>foo:
    <button @click="emit('foo', { foo: 'foo' })">
      event: 'foo', data: {foo: 'foo'}
    </button>
  </div>
</template>
