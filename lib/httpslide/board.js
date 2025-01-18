import {defineComponent} from 'vue';

export default defineComponent({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        clickUp() {
            this.count++;
            this.$emit('times-clicked', this.count);
        }
    },
    template: `
      <button @click="clickUp" class="text-pink-500">
        You clicked me {{ count }} times.
      </button>
    `,
});
