const vm = Vue.createApp({
   data() {
        return {
            firstName: 'Osa',
            lastName: 'Meji',
            url: 'http://youtube.com',
            age: 20,
        }
   }, 
   methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            event.preventDefault();
            console.log(msg)
            this.lastName = event.target.value
        }
   }
}).mount('#app')
