import { h, defineComponent } from 'vue';
// import type { MyProps } from './PropDefinitions';  this works on vue@3.3.0

interface MyProps {
  /**
   * string foo
   */
  foo: string;
  /**
   * optional number bar
   */
  bar?: number;
}

export default defineComponent((props: MyProps) => () => h('Pre', `${JSON.stringify(props)}`), {
  props: ['foo', 'bar'],
});
