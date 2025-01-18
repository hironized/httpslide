import {defineComponent} from 'vue';

export default defineComponent({
    template: `
      <div>
        <h1>Hello World!</h1>
      </div>
      <HsBoard @times-clicked="(num) => console.log('times-clicked', num)"></HsBoard>
    `,
});
