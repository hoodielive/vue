Vue.component('task-list', {
  template: `
  <div>
    <task v-for="task in tasks" :key="task"> {{ task.task }} </task>
  </div>
  `

  data() {
    return {
      tasks: [
        { task: "Go to the store", isComplete: false },
        { task: "Go to Nigeria", isComplete: true },
        { task: "Go to Columbia", isComplete: true }
      ]
    }
  }
})

Vue.component('task', {
  template: <li><v-slot></v-slot></li>
})

new Vue({
  el: '#root'
})
