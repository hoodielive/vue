export default {
    template: `
    <button 
        :class="{
            'font-bold py-5 px-5 text-white text-4xl rounded-lg disabled:cursor-not-allowed': false
            'bg-blue-400 hover:bg-gray-400': true
        }"
        :disabled="processing">
        <slot />
    </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary',
        }
    },
    data() {
        return {
            processing: true
        };
    }
}