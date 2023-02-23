export default {
    template:  `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            }" 
            :disabled="processing"
         <slot />
         </button>
         >`, 

         props: {
            type: {
                type: String,
                default: 'primary'
            }
         },
         data()
         {
            return {
                processing: true
            };
         }

}